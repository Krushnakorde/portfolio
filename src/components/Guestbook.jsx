import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Send, Database, CheckCircle2, User, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { storageService, isSupabaseConfigured } from '../config/supabase';

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const data = await storageService.getGuestbookEntries();
      setEntries(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      await storageService.addGuestbookEntry({
        name: name.trim(),
        role: role.trim() || 'Visitor / Recruiter',
        message: message.trim(),
      });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // safe fallback if canvas is restricted
      }

      setName('');
      setRole('');
      setMessage('');
      setSuccessMsg('Thank you! Your entry has been recorded in the database.');
      setTimeout(() => setSuccessMsg(''), 5000);
      await loadEntries();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return 'Recent';
    }
  };

  return (
    <section id="guestbook" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/70 border border-emerald-300/40 dark:border-emerald-800">
            <Database className="w-3.5 h-3.5" />
            <span>Database Storage Feature</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Visitor <span className="text-gradient">Guestbook</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Leave a note, feedback, or greeting! Entries are stored directly in the database.
          </p>
        </div>

        {/* Database Status Indicator Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="glass-card px-5 py-3 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Storage Engine:
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {isSupabaseConfigured
                  ? 'Supabase PostgreSQL Cloud DB (Active)'
                  : 'Client Persistent Storage Layer (Ready for Supabase cloud sync)'}
              </span>
            </div>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {entries.length} Messages Recorded
            </span>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form to submit (5 cols) */}
          <div className="md:col-span-5 glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquarePlus className="w-5 h-5 text-sky-500" />
              <span>Sign the Guestbook</span>
            </h3>

            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-xs font-medium text-emerald-700 dark:text-emerald-300 flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Title or Role (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Recruiter @ Google / Peer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Say hello, share advice, or leave feedback!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 active:scale-95"
              >
                {loading ? (
                  <span>Saving to DB...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Post Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Live Feed of Entries (7 cols) */}
          <div className="md:col-span-7 space-y-3.5 max-h-[520px] overflow-y-auto pr-1">
            {entries.length === 0 ? (
              <div className="glass-card p-8 rounded-3xl text-center text-slate-500">
                Be the first to leave a message in the guestbook!
              </div>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {entry.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {entry.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {entry.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      {formatDate(entry.created_at)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-10">
                    "{entry.message}"
                  </p>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
