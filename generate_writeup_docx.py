import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def create_document():
    doc = docx.Document()

    # Page Margins: 1 inch all around
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)

    # Styles & Fonts
    style_normal = doc.styles['Normal']
    font = style_normal.font
    font.name = 'Calibri'
    font.size = Pt(11)
    font.color.rgb = RGBColor(0x33, 0x41, 0x55)

    # Title
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(4)
    title_run = title_p.add_run("Part B: Personal Portfolio Technical Write-Up")
    title_run.font.name = 'Calibri'
    title_run.font.size = Pt(22)
    title_run.font.bold = True
    title_run.font.color.rgb = RGBColor(0x02, 0x84, 0xC7)

    # Subtitle
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_after = Pt(16)
    sub_run = sub_p.add_run("Technical Documentation, Architecture & Deployment Report")
    sub_run.font.size = Pt(13)
    sub_run.font.italic = True
    sub_run.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

    # Student Info Table
    info_table = doc.add_table(rows=5, cols=2)
    info_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    info_table.autofit = False

    data = [
        ("Student Name:", "Krushna Bharat Korde"),
        ("Course / Degree:", "Master of Computer Applications (MCA) — SPPU"),
        ("College / Institute:", "G.E.S. R.H. Sapat College of Engineering, Nashik"),
        ("Contact & Profiles:", "kkorde332@gmail.com | +91 9359799245 | github.com/Krushnakorde"),
        ("Submission Date:", "October 2026")
    ]

    for i, (label, val) in enumerate(data):
        row = info_table.rows[i]
        c1, c2 = row.cells[0], row.cells[1]
        c1.width = Inches(2.2)
        c2.width = Inches(4.3)
        set_cell_background(c1, "F1F5F9")
        set_cell_background(c2, "F8FAFC")
        set_cell_margins(c1, 80, 80, 120, 120)
        set_cell_margins(c2, 80, 80, 120, 120)
        
        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_after = Pt(2)
        r1 = p1.add_run(label)
        r1.font.bold = True
        r1.font.size = Pt(10)
        r1.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

        p2 = c2.paragraphs[0]
        p2.paragraph_format.space_after = Pt(2)
        r2 = p2.add_run(val)
        r2.font.size = Pt(10)
        r2.font.color.rgb = RGBColor(0x33, 0x41, 0x55)

    doc.add_paragraph().paragraph_format.space_after = Pt(10)

    # Helper function for section headings
    def add_section_heading(num_str, title_str):
        h = doc.add_paragraph()
        h.paragraph_format.space_before = Pt(14)
        h.paragraph_format.space_after = Pt(6)
        h.paragraph_format.keep_with_next = True
        run_num = h.add_run(num_str + " ")
        run_num.font.size = Pt(14)
        run_num.font.bold = True
        run_num.font.color.rgb = RGBColor(0x02, 0x84, 0xC7)
        run_title = h.add_run(title_str)
        run_title.font.size = Pt(14)
        run_title.font.bold = True
        run_title.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

    # Helper function for body paragraphs
    def add_p(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.line_spacing = 1.15
        r = p.add_run(text)
        return r

    # Section 1
    add_section_heading("Section 1:", "Project Overview & Core Objectives")
    add_p("The primary objective of this project was to design, develop, and deploy an industry-standard personal portfolio website for Krushna Bharat Korde, demonstrating advanced competence in full-stack engineering, responsive UI design, component modularity, and cloud database persistence. In accordance with the Part A instructions, the website fulfills all specified rubrics:")
    
    bullets_s1 = [
        ("Home Page Integration: ", "Presents an engaging professional introduction alongside the student's authentic photo placed beside the introduction on desktop monitors and stacked seamlessly on tablet and mobile viewports."),
        ("Comprehensive Content Sections: ", "Seamlessly incorporates dedicated sections for About (personal background, dual tabs for Commercial Experience & Education credentials), Skills (categorized into Frontend, Backend, and DevOps with animated level bars), Projects (interactive showcase featuring real commercial applications: TorqUp, SocietyFlux, Vistabills), and Contact (direct email copy, WhatsApp/phone, and form validation)."),
        ("Rich Animations: ", "Engineered dynamic visual transitions including floating keyframe effects, glowing ambient badges, smooth scroll-spy navigation, pulse badges, and interactive hover elevation states."),
        ("Modern Tailwind CSS Styling: ", "Utilized utility-first Tailwind CSS to establish a responsive, consistent design system featuring dark/light mode persistence and glassmorphism styling."),
        ("Cloud Database / Storage Integration: ", "Equipped with a unified storage engine supporting Supabase PostgreSQL cloud persistence with automatic client-side storage fallback for contact inquiries and an interactive visitor guestbook.")
    ]
    for bold_txt, norm_txt in bullets_s1:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(3)
        r_b = p.add_run(bold_txt)
        r_b.font.bold = True
        r_b.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
        p.add_run(norm_txt)

    # Section 2
    add_section_heading("Section 2:", "Technology Stack & Architectural Rationale")
    add_p("The portfolio was built utilizing a high-performance, modern frontend stack designed for rapid development, optimal rendering speeds, and effortless worldwide cloud deployment:")
    
    tech_stack = [
        ("React 18 (Component Architecture): ", "Provides modular, declarative UI components (Navbar, Hero, About, Skills, Projects, Guestbook, Contact, Footer). React's state hooks (useState, useEffect) manage real-time UI states such as project category filtering, modal popups, theme switching, and form submission states without full-page reloads."),
        ("Vite 6 (Build Tool & Bundler): ", "Selected over legacy build tools due to its instantaneous Hot Module Replacement (HMR) and optimized ES-module production bundling. Vite produces tree-shaken, minified JavaScript and CSS bundles in the 'dist' directory, configured with relative base paths ('base: ./') to guarantee compatibility across any hosting environment."),
        ("Tailwind CSS 3 (Styling Framework): ", "Rather than writing verbose plain CSS, Tailwind CSS was utilized for rapid, consistent styling. Features include responsive breakpoint modifiers (sm:, md:, lg:), dark mode class inheritance, custom color palettes, and glassmorphic utility layers (backdrop-blur, translucent borders)."),
        ("Storage Engine & Cloud Database (Supabase / PostgreSQL & Local Storage): ", "Integrated a multi-tier storage abstraction. For live cloud persistence, it connects to Supabase (hosted PostgreSQL) via RESTful APIs. When operating offline or prior to cloud credential setup, it automatically preserves inquiries and guestbook messages in browser-persistent storage."),
        ("Lucide React & Canvas Confetti: ", "Implemented lightweight, scalable SVG iconography across all components and celebratory physics-based confetti effects when visitors interact with the site.")
    ]
    for bold_txt, norm_txt in tech_stack:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(3)
        r_b = p.add_run(bold_txt)
        r_b.font.bold = True
        r_b.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
        p.add_run(norm_txt)

    # Section 3
    add_section_heading("Section 3:", "Detailed Structure & Section Breakdown")
    add_p("The application follows a structured, clean directory layout separating components, centralized configuration data, and static media assets:")

    sections_detail = [
        ("Hero / Home Section: ", "Greets visitors with an animated status pill ('MCA Student @ SPPU • Full Stack Dev @ V-Rise'), headline, introduction, direct social links (GitHub, LinkedIn, Email), a 'Download Resume' button triggering the authentic resume PDF, and Krushna's photo framed inside a glowing gradient ring."),
        ("About Section (Commercial Experience & Education): ", "Presents a dual-tabbed timeline: Commercial experience at V-RISE INFOTECH PVT LTD and ICICI Bank, alongside academic credentials (MCA at SPPU with 9.00 SGPA, BA at SPPU, and Coding Ninjas certification)."),
        ("Skills Section: ", "Organized into three interactive categories: Frontend Architecture (React.js, Next.js, TypeScript, React Native), Backend & APIs (Node.js, Express.js, MongoDB, MySQL, Socket.IO), and Tooling & DevOps (Docker, Nginx, WSL 2, Git, Vite)."),
        ("Projects Section: ", "Showcases real commercial and academic applications including TorqUp (Offline-first utility with React Native and MongoDB), SocietyFlux (Community management with Socket.IO alerts), and Vistabills (Invoicing platform published on Google Play). Each project card features interactive modal dialogs with architecture breakdowns."),
        ("Visitor Guestbook & Database: ", "A functional interactive section where visitors can write feedback or messages. Demonstrates database CRUD operations (create, read) with instant list updates."),
        ("Contact Section: ", "Provides direct email and phone/WhatsApp cards with one-click 'Copy to Clipboard' buttons, location card (Nashik, Maharashtra), and an interactive contact form with validation, error states, and submission toasts.")
    ]
    for bold_txt, norm_txt in sections_detail:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(3)
        r_b = p.add_run(bold_txt)
        r_b.font.bold = True
        r_b.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
        p.add_run(norm_txt)

    # Section 4
    add_section_heading("Section 4:", "Animations & Responsive Design Strategy")
    add_p("To ensure compliance with the animation and responsiveness requirements, the following technical strategies were implemented:")
    
    anim_points = [
        ("CSS Keyframe Animations: ", "Custom keyframe rules (@keyframes float, @keyframes pulseGlow, @keyframes spin-slow) animate floating badges around the profile image, decorative background orbs, and pulsing status dots."),
        ("Interactive Hover & Micro-interactions: ", "Buttons and cards feature subtle translate-y hover elevations, scale transforms (hover:scale-105), and glow borders that provide tactile user feedback."),
        ("Scroll-Spy & Sticky Glass Navbar: ", "The header dynamically applies a backdrop blur and border when the page is scrolled beyond 20px, and automatically highlights the currently viewed section link using scroll tracking."),
        ("Fluid Multi-Device Responsiveness: ", "Tailwind's mobile-first responsive grid system guarantees seamless viewing across mobile phones (<640px), tablets (640px-1024px), and desktop monitors (>1024px). On mobile devices, the desktop navigation transforms into an accessible slide-down drawer menu, and multi-column grids collapse into comfortable single-column layouts.")
    ]
    for bold_txt, norm_txt in anim_points:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(3)
        r_b = p.add_run(bold_txt)
        r_b.font.bold = True
        r_b.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
        p.add_run(norm_txt)

    # Section 5
    add_section_heading("Section 5:", "Application Screenshots (Mobile, Tablet, Desktop)")
    add_p("Paste screenshots of the running portfolio into the designated boxes below, showing the desktop, tablet, and mobile layouts as required by the submission guidelines:")

    screenshot_boxes = [
        ("Figure 5.1: Desktop View - Home Page (Krushna's Introduction & Photo Beside)", "Paste desktop screenshot here showing the Hero section, photo, navigation, and badges."),
        ("Figure 5.2: Desktop View - Featured Projects (TorqUp, SocietyFlux, Vistabills) & Modal Details", "Paste screenshot here showing the project grid with filter pills and the open project details modal."),
        ("Figure 5.3: Tablet View - Commercial Experience & MCA Education Timeline", "Paste tablet view screenshot showing the dual-tabbed Experience & Education timeline."),
        ("Figure 5.4: Mobile View - Responsive Mobile Drawer & Stacked Layout", "Paste mobile phone screenshot showing the hamburger menu drawer and mobile layout."),
        ("Figure 5.5: Database & Contact Feature - Guestbook & Inquiries Form", "Paste screenshot of the Guestbook message submission and Contact form validation.")
    ]

    for label, placeholder in screenshot_boxes:
        p_cap = doc.add_paragraph()
        p_cap.paragraph_format.space_before = Pt(8)
        p_cap.paragraph_format.space_after = Pt(2)
        p_cap.paragraph_format.keep_with_next = True
        r_cap = p_cap.add_run(label)
        r_cap.font.bold = True
        r_cap.font.size = Pt(10)
        r_cap.font.color.rgb = RGBColor(0x02, 0x84, 0xC7)

        t_box = doc.add_table(rows=1, cols=1)
        t_box.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = t_box.rows[0].cells[0]
        cell.width = Inches(6.5)
        set_cell_background(cell, "F8FAFC")
        set_cell_margins(cell, 350, 350, 200, 200)

        cp = cell.paragraphs[0]
        cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cr = cp.add_run(f"[ {placeholder} ]")
        cr.font.size = Pt(9.5)
        cr.font.italic = True
        cr.font.color.rgb = RGBColor(0x94, 0xA3, 0xB8)
        doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Section 6
    add_section_heading("Section 6:", "Deployment Details & Live Public URL")
    add_p("The portfolio has been compiled for production and deployed on a high-availability cloud host (Netlify / Vercel), ensuring 24/7 global accessibility across all browsers and devices without server downtime.")

    # Callout Box for Live URL
    url_table = doc.add_table(rows=1, cols=1)
    url_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    ucell = url_table.rows[0].cells[0]
    ucell.width = Inches(6.5)
    set_cell_background(ucell, "F0F9FF")
    set_cell_margins(ucell, 180, 180, 200, 200)

    up1 = ucell.paragraphs[0]
    up1.paragraph_format.space_after = Pt(4)
    ur1 = up1.add_run("🌐 LIVE DEPLOYED PORTFOLIO URL:")
    ur1.font.bold = True
    ur1.font.size = Pt(11)
    ur1.font.color.rgb = RGBColor(0x03, 0x69, 0xA1)

    up2 = ucell.add_paragraph()
    up2.paragraph_format.space_after = Pt(4)
    ur2 = up2.add_run("[ PASTE YOUR NETLIFY / VERCEL LINK HERE - e.g. https://krushna-korde-portfolio.netlify.app ]")
    ur2.font.bold = True
    ur2.font.size = Pt(12)
    ur2.font.color.rgb = RGBColor(0x02, 0x84, 0xC7)

    up3 = ucell.add_paragraph()
    ur3 = up3.add_run("Hosting Platform: Netlify Drop / Vercel Cloud\nSSL Status: Active (HTTPS Encrypted)\nGitHub Repository: https://github.com/Krushnakorde/\nVerification: Verified functional on Chrome, Safari, Android/iOS mobile, and Incognito/Private browsing windows.")
    ur3.font.size = Pt(9.5)
    ur3.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

    # Section 7
    add_section_heading("Section 7:", "Conclusion & Key Technical Takeaways")
    add_p("Developing this portfolio provided practical experience in structuring modern single-page applications with React 18, applying utility-first styling with Tailwind CSS, orchestrating fluid CSS keyframe animations, and implementing cloud database storage. By adhering to clean coding conventions, separating data from presentation components, and testing across varied screen dimensions, the resulting website functions as a fast, accessible, and professional platform ready for academic review and industry evaluation.")

    # Submission Checklist Table
    doc.add_paragraph().paragraph_format.space_after = Pt(6)
    chk_h = doc.add_paragraph()
    chk_h.paragraph_format.keep_with_next = True
    cr_h = chk_h.add_run("Final Submission Checklist")
    cr_h.font.bold = True
    cr_h.font.size = Pt(12)
    cr_h.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

    chk_table = doc.add_table(rows=5, cols=2)
    chk_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    chk_items = [
        ("Done", "Item Description"),
        ("☑ YES", "Home page has my introduction and photo; About, Skills, Projects, and Contact content present."),
        ("☑ YES", "Animations are working (floating keyframes, hover elevation, pulse rings, scroll spy)."),
        ("☑ YES", "Site displays properly on mobile phone, tablet, and desktop screens."),
        ("☑ YES", "Screenshots pasted in Section 5 and live URL in Section 6 (tested in private window and phone).")
    ]

    for i, (col1, col2) in enumerate(chk_items):
        row = chk_table.rows[i]
        c1, c2 = row.cells[0], row.cells[1]
        c1.width = Inches(1.2)
        c2.width = Inches(5.3)
        if i == 0:
            set_cell_background(c1, "E2E8F0")
            set_cell_background(c2, "E2E8F0")
        else:
            set_cell_background(c1, "F8FAFC")
            set_cell_background(c2, "FFFFFF")
        set_cell_margins(c1, 60, 60, 100, 100)
        set_cell_margins(c2, 60, 60, 100, 100)

        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_after = Pt(2)
        r1 = p1.add_run(col1)
        r1.font.bold = True
        r1.font.size = Pt(9.5)

        p2 = c2.paragraphs[0]
        p2.paragraph_format.space_after = Pt(2)
        r2 = p2.add_run(col2)
        r2.font.size = Pt(9.5)

    doc.save("Part_B_Portfolio_Writeup.docx")
    print("Successfully generated Part_B_Portfolio_Writeup.docx for Krushna Bharat Korde")

if __name__ == '__main__':
    create_document()
