import { createClient } from '@supabase/supabase-js';

// Environment variables (optional - will gracefully fall back to local storage if not set)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'YOUR_SUPABASE_URL' && 
  supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY'
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Unified storage service for Guestbook & Contact submissions
export const storageService = {
  // Fetch guestbook messages
  async getGuestbookEntries() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('guestbook')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase fetch failed, falling back to local cache:', err);
      }
    }
    // Fallback to localStorage
    const local = localStorage.getItem('portfolio_guestbook');
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        console.error(e);
      }
    }
    // Default initial seeded entries
    return [
      {
        id: '1',
        name: 'Sarah Chen',
        role: 'Full Stack Engineer @ TechCorp',
        message: 'Incredible portfolio! Clean Tailwind layout, smooth animations, and solid project demonstrations.',
        created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
      },
      {
        id: '2',
        name: 'Prof. David Miller',
        role: 'CS Faculty Advisor',
        message: 'Impressive demonstration of modern web technologies, responsive design, and database integration.',
        created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
      }
    ];
  },

  // Save a guestbook message
  async addGuestbookEntry(entry) {
    const newEntry = {
      id: Date.now().toString(),
      name: entry.name,
      role: entry.role || 'Visitor',
      message: entry.message,
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('guestbook')
          .insert([newEntry])
          .select();
        if (!error && data) return data[0];
      } catch (err) {
        console.warn('Supabase insert failed, saving to local cache:', err);
      }
    }

    // Save to localStorage
    const current = await this.getGuestbookEntries();
    const updated = [newEntry, ...current];
    localStorage.setItem('portfolio_guestbook', JSON.stringify(updated));
    return newEntry;
  },

  // Save contact inquiry
  async saveContactInquiry(inquiry) {
    const record = {
      id: Date.now().toString(),
      name: inquiry.name,
      email: inquiry.email,
      subject: inquiry.subject || 'Portfolio Inquiry',
      message: inquiry.message,
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('contact_inquiries')
          .insert([record]);
        if (!error) return { success: true, cloud: true };
      } catch (err) {
        console.warn('Supabase contact save failed, using local storage fallback:', err);
      }
    }

    // Fallback: save to localStorage
    const inquiries = JSON.parse(localStorage.getItem('portfolio_inquiries') || '[]');
    inquiries.unshift(record);
    localStorage.setItem('portfolio_inquiries', JSON.stringify(inquiries));
    return { success: true, cloud: false };
  }
};
