# Briella Eyecare Website - Product Requirements Document (PRD)

## Project Overview

**Product Name:** Briella Eyecare Website  
**Type:** Professional optometry clinic website  
**Tech Stack:** Next.js (App Router), Tailwind CSS, Lucide-React  
**Deployment:** Vercel (free tier)  
**Timeline:** Build feature-by-feature with testing  

---

## Brand Identity

### Color System (Exact Values)
```javascript
// tailwind.config.js
colors: {
  primary: '#2E0F6E',      // Deep Indigo - Headings, Footer, "briella" text
  secondary: '#2563EB',    // Medical Blue - Links, "EYECARE" text
  accent: '#44B846',       // Fresh Green - Buttons, CTAs, eye symbol
  background: '#FFFFFF',   // White
  surface: '#F3F4F6',     // Light Gray
}
```

### Logo
- File: `briella_logo.jpg` (provided)
- Location in project: `/public/logo.jpg`
- Usage: Navbar (all pages), Footer

---

## Site Structure

```
Home (/)
├── Services (/services)
├── About Us (/about)
├── Contact (/contact)
└── Blog (/blog)
```

---

## Contact Information (Global Constants)

```javascript
// Store in a config file
export const CONTACT_INFO = {
  address: "31, Akenzua Road, off Airport Road, Bénin, Nigeria",
  phone: "0803 218 4887",
  whatsapp: "2348032184887", // International format
  email: "uwamarinlinda@gmail.com",
  hours: "9am - 5pm, Monday to Saturday",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61563135386765",
    instagram: "https://www.instagram.com/briella.eyecare.ng"
  }
}
```

---

## FEATURE 1: Global Navigation Bar

**Location:** Top of every page, sticky on scroll  
**Priority:** Critical (needed for all pages)

### UI Specifications

**Desktop (≥768px):**
- Height: 80px
- Background: White (`#FFFFFF`)
- Box shadow: `0 2px 4px rgba(0,0,0,0.1)` (appears on scroll)
- Max width: 1280px centered
- Padding: 0 24px

**Layout Structure:**
```
[Logo]        [Home] [Services] [About] [Contact]        [Call Us Button]
```

**Logo:**
- Image: `/public/logo.jpg`
- Height: 48px (auto width to maintain aspect ratio)
- On click: Navigate to `/`
- Alt text: "Briella Eyecare Logo"

**Navigation Links:**
- Font size: 16px
- Font weight: 500 (medium)
- Color: Default `#374151` (gray-700)
- Spacing: 32px between each link
- Hover state: Color changes to `secondary` (#2563EB)
- Active page: Color `primary` (#2E0F6E) with 2px bottom border

**Links:**
1. "Home" → `/`
2. "Services" → `/services`
3. "About" → `/about`
4. "Contact" → `/contact`

**Call Us Button:**
- Text: "Call Us"
- Background: `accent` (#44B846)
- Text color: White
- Border radius: 8px
- Padding: 12px 24px
- Font weight: 600 (semibold)
- On click: Navigate to `/contact`
- Hover: Background darkens to `#3A9D3B`
- Transition: 200ms ease

**Mobile (< 768px):**
- Height: 64px
- Hamburger menu icon (Lucide `Menu` icon) on right
- Logo on left (height: 40px)
- Mobile menu slides in from right
- Menu items stack vertically with 16px spacing
- "Call Us" button full-width at bottom of menu

**Sticky Behavior:**
- Position: `sticky` with `top: 0`
- Z-index: 50
- Shadow appears when scrolled past 10px

### Test Criteria
- [ ] Logo navigates to home on click
- [ ] All nav links navigate to correct pages
- [ ] Active page shows correct styling
- [ ] Hover states work on all links and button
- [ ] Mobile menu opens/closes correctly
- [ ] Sticky behavior works on scroll
- [ ] Call Us button navigates to contact page

---

## FEATURE 2: Hero Section (Homepage Only)

**Location:** Top of homepage, immediately below navbar  
**Priority:** Critical

### UI Specifications

**Layout:**
- Full width section
- Background: White (`#FFFFFF`)
- Padding: 80px 24px (desktop), 60px 16px (mobile)
- Max content width: 800px centered

**Content Structure:**
```
[Headline]
[Subheadline]
[Book Appointment Button]
```

**Headline:**
- Text: "See the World Clearly"
- Font size: 56px (desktop), 36px (mobile)
- Font weight: 700 (bold)
- Color: `primary` (#2E0F6E)
- Line height: 1.2
- Text align: Center
- Margin bottom: 16px

**Subheadline:**
- Text: "An accredited private healthcare facility that offers quality eye care services."
- Font size: 20px (desktop), 18px (mobile)
- Font weight: 400 (regular)
- Color: `#6B7280` (gray-500)
- Line height: 1.6
- Text align: Center
- Margin bottom: 32px

**Book Appointment Button:**
- Text: "Book Appointment"
- Background: `accent` (#44B846)
- Text color: White
- Border radius: 8px
- Padding: 16px 48px
- Font size: 18px
- Font weight: 600
- Display: Centered
- Icon: Lucide `MessageCircle` icon on left of text
- On click: Opens WhatsApp with pre-filled message
- WhatsApp URL: `https://wa.me/2348032184887?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Briella%20Eyecare.`
- Hover: Background darkens to `#3A9D3B`, slight scale (1.05)
- Transition: 300ms ease

### Test Criteria
- [ ] Headline and subheadline display correctly
- [ ] Button opens WhatsApp with correct number and message
- [ ] Button hover animation works
- [ ] Responsive layout works on mobile
- [ ] Text is readable and properly aligned

---

## FEATURE 3: Services Preview Section (Homepage Only)

**Location:** Below Hero section on homepage  
**Priority:** High

### UI Specifications

**Section Layout:**
- Full width section
- Background: `surface` (#F3F4F6)
- Padding: 80px 24px (desktop), 60px 16px (mobile)
- Max content width: 1280px centered

**Section Header:**
- Heading: "Our Services"
- Font size: 40px (desktop), 32px (mobile)
- Font weight: 700
- Color: `primary` (#2E0F6E)
- Text align: Center
- Margin bottom: 16px

**Subheading:**
- Text: "Comprehensive eye care for your whole family"
- Font size: 18px
- Color: `#6B7280` (gray-500)
- Text align: Center
- Margin bottom: 48px

**Services Grid:**
- Layout: 3 columns (desktop), 1 column (mobile)
- Gap: 32px between cards
- Cards: Equal height

**Top 3 Services to Display:**
1. Comprehensive Eye Examinations
2. Sales of Eyeglasses and Contact Lenses
3. Pediatric Optometry

**Service Card Design:**
- Background: White
- Border radius: 12px
- Padding: 32px
- Box shadow: `0 4px 6px rgba(0,0,0,0.1)`
- Hover: Shadow increases to `0 8px 12px rgba(0,0,0,0.15)`, slight lift
- Transition: 300ms ease
- Click: No action (informational only)

**Card Content Structure:**
```
[Icon - centered]
[Service Title - centered]
[Service Description - centered]
```

**Icon:**
- Lucide icons:
  - Comprehensive Eye Examinations: `Eye` icon
  - Sales of Eyeglasses: `Glasses` icon
  - Pediatric Optometry: `Baby` icon
- Size: 48px
- Color: `accent` (#44B846)
- Margin bottom: 16px

**Service Title:**
- Font size: 22px
- Font weight: 600
- Color: `primary` (#2E0F6E)
- Margin bottom: 12px
- Text align: Center

**Service Description:**
- Font size: 16px
- Font weight: 400
- Color: `#6B7280` (gray-500)
- Line height: 1.6
- Text align: Center

**Service Descriptions (from user):**
1. **Comprehensive Eye Examinations:** "A complete assessment of vision and eye health, screening for systemic diseases and visual acuity issues."
2. **Sales of Eyeglasses and Contact Lenses:** "The dispensing and retail service where patients can select frames, order lenses, and purchase contact lens supplies."
3. **Pediatric Optometry:** "Specialized eye care focused on the visual development and eye health of infants and children."

**View All Link:**
- Below grid
- Text: "View All Services →"
- Font size: 18px
- Color: `secondary` (#2563EB)
- On click: Navigate to `/services`
- Hover: Underline
- Text align: Center

### Test Criteria
- [ ] Section displays with correct background
- [ ] 3 service cards display in grid (desktop) / stack (mobile)
- [ ] Icons render correctly
- [ ] Hover effect works on cards
- [ ] "View All Services" link navigates to /services
- [ ] Responsive layout works correctly

---

## FEATURE 4: Global Footer

**Location:** Bottom of every page  
**Priority:** Critical

### UI Specifications

**Layout:**
- Full width section
- Background: `primary` (#2E0F6E)
- Text color: White
- Padding: 60px 24px 24px (desktop), 40px 16px 16px (mobile)

**Footer Grid (Desktop):**
```
[Column 1: Contact Info]  [Column 2: Quick Links]  [Column 3: Hours & Social]
```

**Column 1 - Contact Information:**
- Heading: "Contact Us"
- Font size: 20px, bold
- Margin bottom: 16px

- Address icon (Lucide `MapPin`) + text
- Phone icon (Lucide `Phone`) + "0803 218 4887" (clickable tel: link)
- Email icon (Lucide `Mail`) + "uwamarinlinda@gmail.com" (clickable mailto: link)
- Line height: 1.8
- Icon size: 20px
- Icons color: `accent` (#44B846)
- Spacing: 12px between items

**Column 2 - Quick Links:**
- Heading: "Quick Links"
- Font size: 20px, bold
- Margin bottom: 16px

Links (vertical stack):
- Home → `/`
- Services → `/services`
- About Us → `/about`
- Contact → `/contact`
- Blog → `/blog`

- Font size: 16px
- Color: White with 80% opacity
- Hover: Full opacity + underline
- Spacing: 8px between links

**Column 3 - Hours & Social Media:**
- Heading: "Operating Hours"
- Font size: 20px, bold
- Margin bottom: 16px

- Clock icon (Lucide `Clock`) + "9am - 5pm"
- Text: "Monday to Saturday"
- Margin bottom: 24px

**Social Media Icons:**
- Heading: "Follow Us"
- Margin bottom: 12px

Icons (horizontal row):
- Facebook (Lucide `Facebook`) → "https://www.facebook.com/profile.php?id=61563135386765"
- Instagram (Lucide `Instagram`) → "https://www.instagram.com/briella.eyecare.ng"

- Icon size: 32px
- Background: White with 10% opacity
- Border radius: 50% (circle)
- Padding: 8px
- Hover: Background becomes `accent` (#44B846)
- Spacing: 12px between icons
- Opens in new tab

**Mobile Layout:**
- Stack columns vertically
- Same content, single column

**Bottom Bar:**
- Border top: 1px solid white with 20% opacity
- Padding top: 24px
- Margin top: 40px
- Text: "© 2025 Briella Eyecare. All rights reserved."
- Font size: 14px
- Text align: Center
- Opacity: 70%

### Test Criteria
- [ ] Footer displays on all pages
- [ ] Contact info is correct and clickable
- [ ] All quick links navigate correctly
- [ ] Social media icons open correct pages in new tabs
- [ ] Social icons hover effect works
- [ ] Mobile layout stacks properly
- [ ] Copyright year is dynamic (uses current year)

---

## FEATURE 5: WhatsApp Floating Button

**Location:** Fixed bottom-right corner of all pages  
**Priority:** High

### UI Specifications

**Button Design:**
- Shape: Circle
- Size: 60px diameter
- Background: `accent` (#44B846)
- Icon: Lucide `MessageCircle` in white
- Icon size: 28px
- Position: Fixed
- Bottom: 24px
- Right: 24px
- Z-index: 100
- Box shadow: `0 4px 12px rgba(68, 184, 70, 0.4)`
- Hover: Scale 1.1, shadow increases
- Animation: Subtle pulse every 3 seconds

**Behavior:**
- On click: Opens WhatsApp chat
- WhatsApp URL: `https://wa.me/2348032184887?text=Hello%2C%20I%20have%20a%20question%20about%20Briella%20Eyecare.`
- Opens in new tab
- Always visible (doesn't hide on scroll)

**Mobile:**
- Size: 56px diameter
- Bottom: 16px
- Right: 16px

### Test Criteria
- [ ] Button appears on all pages
- [ ] Button opens WhatsApp with correct number
- [ ] Pre-filled message is correct
- [ ] Hover animation works
- [ ] Pulse animation works
- [ ] Responsive sizing works

---

## FEATURE 6: Services Page (Full Listing)

**Location:** `/services` route  
**Priority:** High

### UI Specifications

**Page Header:**
- Background: `surface` (#F3F4F6)
- Padding: 60px 24px
- Max width: 1280px centered

- Heading: "Our Services"
- Font size: 48px (desktop), 36px (mobile)
- Font weight: 700
- Color: `primary` (#2E0F6E)
- Text align: Center
- Margin bottom: 16px

- Subheading: "Comprehensive eye care solutions for every need"
- Font size: 20px
- Color: `#6B7280`
- Text align: Center

**Services Grid:**
- Background: White
- Padding: 80px 24px
- Layout: 2 columns (desktop), 1 column (mobile)
- Gap: 32px
- Max width: 1280px centered

**All 7 Services:**

1. **Comprehensive Eye Examinations**
   - Icon: `Eye`
   - Description: "A complete assessment of vision and eye health, screening for systemic diseases and visual acuity issues."

2. **Refraction**
   - Icon: `Focus`
   - Description: "The specific test used to determine the exact lens power needed to correct nearsightedness, farsightedness, or astigmatism."

3. **Prescription Services**
   - Icon: `FileText`
   - Description: "The issuance of a formal medical prescription for corrective lenses based on the findings of the refraction test."

4. **Sales of Eyeglasses and Contact Lenses**
   - Icon: `Glasses`
   - Description: "The dispensing and retail service where patients can select frames, order lenses, and purchase contact lens supplies."

5. **Disease Diagnosis & Management**
   - Icon: `Activity`
   - Description: "The medical identification and treatment of ocular conditions such as glaucoma, cataracts, infections, and dry eye syndrome."

6. **Pediatric Optometry**
   - Icon: `Baby`
   - Description: "Specialized eye care focused on the visual development and eye health of infants and children."

7. **Vision Therapy**
   - Icon: `Target`
   - Description: "A customized program of exercises designed to retrain the brain and eyes to work together more effectively."

**Service Card Design:**
- Background: White
- Border: 1px solid `#E5E7EB` (gray-200)
- Border radius: 12px
- Padding: 40px
- Layout: Icon left, content right (desktop) / stacked (mobile)
- Hover: Border color changes to `accent`, slight shadow
- Transition: 200ms ease

**Card Content:**
- Icon size: 56px
- Icon color: `accent` (#44B846)
- Title font size: 24px
- Title font weight: 600
- Title color: `primary`
- Title margin bottom: 12px
- Description font size: 16px
- Description color: `#6B7280`
- Description line height: 1.6

**CTA Section (Bottom of Page):**
- Background: `surface` (#F3F4F6)
- Padding: 60px 24px
- Text align: Center

- Heading: "Ready to book your appointment?"
- Font size: 32px
- Color: `primary`
- Margin bottom: 24px

- Button: "Contact Us"
- Background: `accent`
- Text: White
- Padding: 16px 48px
- Border radius: 8px
- On click: Navigate to `/contact`
- Hover: Darken background

### Test Criteria
- [ ] Page displays all 7 services
- [ ] Grid layout responsive
- [ ] Icons render correctly
- [ ] Card hover effects work
- [ ] CTA button navigates to contact page
- [ ] Text is readable and properly formatted

---

## FEATURE 7: About Us Page

**Location:** `/about` route  
**Priority:** Medium

### UI Specifications

**Page Header:**
- Same styling as Services page header
- Heading: "About Briella Eyecare"
- Subheading: "Your trusted partner in eye care"

**Content Sections:**

**Section 1 - Our Story:**
- Background: White
- Padding: 80px 24px
- Max width: 800px centered

- Heading: "Our Story"
- Font size: 32px
- Color: `primary`
- Margin bottom: 24px

- Content: **[PLACEHOLDER - User to provide later]**
  - How long operating
  - Professional background/qualifications
- Font size: 18px
- Line height: 1.8
- Color: `#374151` (gray-700)

**Section 2 - Mission Statement:**
- Background: `surface` (#F3F4F6)
- Padding: 60px 24px
- Max width: 1000px centered
- Border left: 4px solid `accent`
- Padding left: 32px (additional)

- Heading: "Our Mission"
- Font size: 28px
- Color: `primary`
- Margin bottom: 16px

- Content: **[PLACEHOLDER - User to provide later]**
- Font size: 20px
- Font style: Italic
- Line height: 1.6
- Color: `#4B5563` (gray-600)

**Section 3 - Team:**
- Background: White
- Padding: 80px 24px
- Max width: 1280px centered

- Heading: "Meet Our Team"
- Font size: 36px
- Color: `primary`
- Text align: Center
- Margin bottom: 48px

- Team Grid: 3 columns (desktop), 1 column (mobile)
- Gap: 32px

**Team Card Design:**
- Photo: Circular, 200px diameter, centered
- Name: Font size 22px, bold, `primary` color
- Role: Font size 16px, `secondary` color
- Bio: Font size 14px, gray, 2-3 lines
- Background: White
- Padding: 24px
- Border radius: 12px
- Box shadow: Subtle

Content: **[PLACEHOLDER - User to provide later]**
- Staff names, roles, photos, bios

**Section 4 - Why Choose Us:**
- Background: `primary` (#2E0F6E)
- Text color: White
- Padding: 80px 24px
- Max width: 1280px centered

- Heading: "Why Choose Briella Eyecare?"
- Font size: 36px
- Text align: Center
- Margin bottom: 48px

- Grid: 2 columns (desktop), 1 column (mobile)
- Gap: 32px

**Feature Cards (4 total):**
Content: **[PLACEHOLDER - User to provide later]**
- What makes clinic different
- Unique selling points

- Icon: 48px, `accent` color
- Title: 20px, bold
- Description: 16px, white with 90% opacity

### Test Criteria
- [ ] Page structure displays correctly
- [ ] Placeholder sections are clearly marked
- [ ] Layout is responsive
- [ ] Color scheme is consistent
- [ ] Ready for content insertion

---

## FEATURE 8: Contact Page

**Location:** `/contact` route  
**Priority:** Critical

### UI Specifications

**Page Header:**
- Same styling as other pages
- Heading: "Contact Us"
- Subheading: "We're here to help with all your eye care needs"

**Two-Column Layout (Desktop) / Stacked (Mobile):**
- Max width: 1280px
- Gap: 48px
- Padding: 80px 24px

**Left Column - Contact Form:**

**Form Container:**
- Background: White
- Border: 1px solid `#E5E7EB`
- Border radius: 12px
- Padding: 40px
- Box shadow: `0 2px 8px rgba(0,0,0,0.05)`

**Form Fields:**

1. **Name Field:**
   - Label: "Full Name"
   - Input type: text
   - Required: Yes
   - Placeholder: "John Doe"
   - Border color: `#D1D5DB` (gray-300)
   - Focus border: `secondary` (#2563EB)

2. **Email Field:**
   - Label: "Email Address"
   - Input type: email
   - Required: Yes
   - Placeholder: "you@example.com"
   - Validation: Email format

3. **Phone Field:**
   - Label: "Phone Number"
   - Input type: tel
   - Required: Yes
   - Placeholder: "0803 218 4887"

4. **Message Field:**
   - Label: "Message"
   - Input type: textarea
   - Required: Yes
   - Rows: 6
   - Placeholder: "How can we help you?"

**Field Styling:**
- Font size: 16px
- Padding: 12px 16px
- Border radius: 8px
- Margin bottom: 20px
- Width: 100%

**Labels:**
- Font size: 14px
- Font weight: 600
- Color: `#374151` (gray-700)
- Margin bottom: 8px

**Submit Button:**
- Text: "Send Message"
- Background: `accent` (#44B846)
- Text color: White
- Width: 100%
- Padding: 16px
- Border radius: 8px
- Font size: 18px
- Font weight: 600
- Hover: Darken background
- Disabled state: Gray background while submitting

**Form Behavior:**
- On submit: Use Formspree or similar service (free tier)
- Success message: "Thank you! We'll get back to you soon."
- Error message: "Something went wrong. Please try again."
- Validation: Show errors below fields

**Right Column - Contact Information:**

**Info Box:**
- Background: `surface` (#F3F4F6)
- Border radius: 12px
- Padding: 40px

**Contact Details:**
Each item with icon + text:

1. **Address:**
   - Icon: Lucide `MapPin`, `accent` color
   - Text: "31, Akenzua Road, off Airport Road, Bénin, Nigeria"
   - Font size: 16px

2. **Phone:**
   - Icon: Lucide `Phone`, `accent` color
   - Text: "0803 218 4887"
   - Clickable: tel:+2348032184887

3. **Email:**
   - Icon: Lucide `Mail`, `accent` color
   - Text: "uwamarinlinda@gmail.com"
   - Clickable: mailto link

4. **Hours:**
   - Icon: Lucide `Clock`, `accent` color
   - Text: "9am - 5pm"
   - Subtext: "Monday to Saturday"

- Spacing: 24px between items
- Line height: 1.6

**Google Maps Embed:**
- Below contact info
- Margin top: 32px
- Height: 300px
- Width: 100%
- Border radius: 8px
- Address: "31, Akenzua Road, off Airport Road, Bénin, Nigeria"
- Use iframe embed from Google Maps
- Border: None
- Allow fullscreen

**Map Embed Code:**
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8697!2d5.6244!3d6.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMTkuMyJOIDXCsDM3JzI3LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890" 
  width="100%" 
  height="300" 
  style="border:0; border-radius:8px;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

### Test Criteria
- [ ] All form fields display and validate correctly
- [ ] Form submits successfully
- [ ] Success/error messages display
- [ ] Contact information is accurate and clickable
- [ ] Google Maps embed loads and shows correct location
- [ ] Layout is responsive
- [ ] Phone and email links work on mobile

---

## FEATURE 9: Blog Page (Placeholder)

**Location:** `/blog` route  
**Priority:** Low (placeholder only)

### UI Specifications

**Page Header:**
- Same styling as other pages
- Heading: "Blog & Resources"
- Subheading: "Eye care tips and clinic updates"

**Content Area:**
- Background: White
- Padding: 120px 24px
- Max width: 800px centered
- Text align: Center

**Placeholder Content:**
- Icon: Lucide `FileText`, 64px, `accent` color
- Heading: "Coming Soon"
- Font size: 36px
- Color: `primary`
- Margin: 24px 0

- Text: "We're preparing helpful articles about eye care and vision health. Check back soon!"
- Font size: 18px
- Color: `#6B7280`
- Line height: 1.6

**Return Link:**
- Text: "← Back to Home"
- Font size: 16px
- Color: `secondary`
- On click: Navigate to `/`
- Hover: Underline

### Test Criteria
- [ ] Page displays placeholder content
- [ ] Layout is centered and clean
- [ ] Back to home link works
- [ ] Consistent with site design

---

## Technical Implementation Details

### Next.js Project Structure

```
briella-eyecare/
├── app/
│   ├── layout.tsx           # Root layout with Navbar + Footer
│   ├── page.tsx             # Homepage
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── blog/
│       └── page.tsx         # Blog placeholder
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── ServicesPreview.tsx  # Homepage services
│   ├── WhatsAppButton.tsx   # Floating button
│   └── ServiceCard.tsx      # Reusable service card
├── lib/
│   └── constants.ts         # Contact info, services data
├── public/
│   └── logo.jpg             # Briella logo
├── tailwind.config.js       # Brand colors configured
└── globals.css              # Global styles
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E0F6E',
        secondary: '#2563EB',
        accent: '#44B846',
        background: '#FFFFFF',
        surface: '#F3F4F6',
      },
    },
  },
  plugins: [],
}
```

### Constants File

```typescript
// lib/constants.ts
export const CONTACT_INFO = {
  address: "31, Akenzua Road, off Airport Road, Bénin, Nigeria",
  phone: "0803 218 4887",
  whatsapp: "2348032184887", // International format for WhatsApp
  email: "uwamarinlinda@gmail.com",
  hours: "9am - 5pm, Monday to Saturday",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61563135386765",
    instagram: "https://www.instagram.com/briella.eyecare.ng"
  }
};

export const SERVICES = [
  {
    id: 1,
    title: "Comprehensive Eye Examinations",
    description: "A complete assessment of vision and eye health, screening for systemic diseases and visual acuity issues.",
    icon: "Eye"
  },
  {
    id: 2,
    title: "Refraction",
    description: "The specific test used to determine the exact lens power needed to correct nearsightedness, farsightedness, or astigmatism.",
    icon: "Focus"
  },
  {
    id: 3,
    title: "Prescription Services",
    description: "The issuance of a formal medical prescription for corrective lenses based on the findings of the refraction test.",
    icon: "FileText"
  },
  {
    id: 4,
    title: "Sales of Eyeglasses and Contact Lenses",
    description: "The dispensing and retail service where patients can select frames, order lenses, and purchase contact lens supplies.",
    icon: "Glasses"
  },
  {
    id: 5,
    title: "Disease Diagnosis & Management",
    description: "The medical identification and treatment of ocular conditions such as glaucoma, cataracts, infections, and dry eye syndrome.",
    icon: "Activity"
  },
  {
    id: 6,
    title: "Pediatric Optometry",
    description: "Specialized eye care focused on the visual development and eye health of infants and children.",
    icon: "Baby"
  },
  {
    id: 7,
    title: "Vision Therapy",
    description: "A customized program of exercises designed to retrain the brain and eyes to work together more effectively.",
    icon: "Target"
  }
];

export const TOP_SERVICES = [1, 4, 6]; // IDs of services to show on homepage
```

---

## Build Order (Feature-by-Feature with Tests)

### Phase 1: Foundation
1. **FEATURE 1:** Navigation Bar
   - Build component
   - Test: All links navigate, sticky behavior, mobile menu
   
2. **FEATURE 4:** Footer
   - Build component
   - Test: Links work, social icons open correctly

3. **FEATURE 5:** WhatsApp Floating Button
   - Build component
   - Test: Opens WhatsApp with correct number and message

### Phase 2: Homepage
4. **FEATURE 2:** Hero Section
   - Build component
   - Test: Button opens WhatsApp, responsive layout

5. **FEATURE 3:** Services Preview
   - Build component
   - Test: 3 services display, link to services page works

### Phase 3: Content Pages
6. **FEATURE 6:** Services Page
   - Build page with all 7 services
   - Test: All services display, CTA button works

7. **FEATURE 7:** About Us Page
   - Build page with placeholders
   - Test: Structure ready for content insertion

8. **FEATURE 8:** Contact Page
   - Build form and info sections
   - Test: Form validates and submits, map loads

9. **FEATURE 9:** Blog Page
   - Build placeholder
   - Test: Placeholder displays, back link works

### Phase 4: Polish & Deploy
10. Final testing across all pages
11. Mobile responsiveness check
12. Deploy to Vercel
13. Test live site

---

## Testing Checklist

After each feature is built:
- [ ] Visual appearance matches specifications
- [ ] All interactions work as specified
- [ ] Mobile responsive behavior correct
- [ ] No console errors
- [ ] Links/buttons navigate correctly
- [ ] Hover states work
- [ ] Text content is correct
- [ ] Colors match brand exactly

After all features complete:
- [ ] Full site navigation works
- [ ] WhatsApp button appears on all pages
- [ ] Footer appears on all pages
- [ ] Navbar sticky behavior works everywhere
- [ ] All external links open in new tabs
- [ ] Form submission works
- [ ] Google Maps loads correctly
- [ ] No broken links
- [ ] Site works on mobile devices
- [ ] Site works on different browsers

---

## Deployment Instructions (Vercel)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Briella Eyecare website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Framework: Next.js (auto-detected)
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)

3. **Get your URL:**
   - Vercel provides: `briella-eyecare.vercel.app`
   - Can add custom domain later

4. **Environment Variables (if needed):**
   - For form submission service (Formspree/etc)
   - Add in Vercel dashboard: Settings > Environment Variables

---

## Notes for Implementation

### Placeholder Content to Fill Later:
1. About Us - Your Story section
2. About Us - Mission Statement
3. About Us - Team photos and bios
4. About Us - Why Choose Us content

### Free Services to Use:
- **Hosting:** Vercel (free tier)
- **Form Handling:** Formspree (free tier, 50 submissions/month)
- **Google Maps:** Free embed (no API key needed for basic embed)
- **Domain:** Use Vercel subdomain free, purchase custom domain later

### Cost: $0 to start
- Everything uses free tiers
- Can add custom domain later (~$12/year)

---

## Success Criteria

Website is complete when:
- [ ] All 9 features built and tested
- [ ] Mobile responsive on all pages
- [ ] All links and buttons functional
- [ ] Contact form successfully submits
- [ ] WhatsApp integration works
- [ ] Google Maps displays correctly
- [ ] Deployed live on Vercel
- [ ] No console errors
- [ ] Logo displays correctly
- [ ] Brand colors accurate throughout
- [ ] Ready for About Us content insertion

---

## Next Steps

**This PRD is now complete and ready to hand off to Google Antigravity for implementation.**

When you're ready to build, you can give this entire PRD to Antigravity along with the logo file and start building feature by feature, testing each one before moving to the next.

**Ready to build! 🚀**