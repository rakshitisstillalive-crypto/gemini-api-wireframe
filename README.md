# Farmer's AI Assistant

You are an expert Full-Stack Web Developer, UI/UX Designer, and Agricultural AI System Architect.
Your task is to build/code a clean, fully responsive, secure, and modern web application named "Farmer's AI".

📄 1. BRANDING & DESIGN SYSTEM (UI/UX)
Company Name: Farmer’s AI

Logo: Circular logo frame featuring the company logo/icon.

Color Palette:

Primary: Emerald Green & Fresh Mint (#059669, #10B981)

Secondary: Pure White & Off-White (#FFFFFF, #F9FAFB)

Accents: Modern Green-to-Teal Gradients (linear-gradient(135deg, #10B981 0%, #059669 100%))

Buttons: Well-defined, subtle border radii, crisp borders, hover transitions, and clean typography.

Typography: Modern, highly legible sans-serif fonts (e.g., Inter, Plus Jakarta Sans, or Outfit).

Theme Controls:

Mode Switcher: Light Mode, Dark Mode, and System/Normal UI Mode.

Responsiveness: 100% mobile, tablet, and desktop responsive with adaptive navigation menus.

🔐 2. AUTHENTICATION & GUEST ACCESS
Guest Analysis: Users can upload photos and get complete AI analysis without logging in.

History & Dashboard: A login/signup wall is triggered only when users attempt to save analysis history or access past reports.

Login Interface:

OAuth 2.0 Integration: Login with Google, Login with Microsoft.

Email/Password Authentication: Sign in / Sign up with existing ID.

Clean modal/card design matching the overall aesthetic.

🧬 3. AGRICULTURAL AI AGENT & ANALYSIS ENGINE
The backend/AI engine acts as an elite Agricultural & Biological AI Agent, hyper-tuned on biology, agronomy, botany, and soil science to process image uploads.

Analysis Module A: Plant / Crop / Fruit / Vegetable / Seed Upload
When an image of a plant, crop, fruit, vegetable, or seed is uploaded, generate an Interactive Dashboard & Downloadable PDF/PDF Report covering:

Identity: Identification, Latin/Botanical Name, and the Scientist who discovered/classified it.

Health Status: Overall health rating & current condition (Healthy, Stressed, Infected).

Nutrient Deficiency & Remediation: Detected deficiencies (N, P, K, Micronutrients) + exact organic/chemical corrective measures.

Detected Issues & Solutions: Pests, diseases, blights, or fungi identified + actionable treatments.

Prevention Strategy: Proactive steps to avoid future issues.

Best Irrigation System: Optimal watering method (e.g., Drip, Sprinkler, Sub-surface) and scheduling.

Best Soil Type: Ideal soil profiles (e.g., Loamy, Sandy Clay) for optimal yield.

Genetic & GMO Traits: Known genetic characteristics, cultivar traits, and (for seeds) GMO status indicators.

Microbiological Safety Percentage: Safety rating for consumption/handling.

Fruit/Vegetable Specific Metrics:

Sugar Content (Brix %): Estimated Brix value.

Acidity (pH Level): Expected pH range.

Seed Specific Metrics:

Germination Percentage (%)

Physical Purity (%)

Moisture Content (%)

Recommendations & Status Summary: Final expert recommendations.

Analysis Module B: Soil Image Upload
When a soil photo is uploaded, analyze and display:

Soil Health Status & Texture: Textural class (Loam, Clay, Silt, Sand) & structural health.

pH Level & Moisture Balance: Acidic, Neutral, or Alkaline ratings.

Nutrient Deficiency & Fertilizer Recommendations: Detailed N-P-K breakdown + targeted remedies.

Physical Purity & Structure.

Best Crops for this Soil: Recommended crops/plants based on soil traits.

Best Irrigation System: Ideal watering setup for this soil type.

Identity & Classification: Soil taxonomy/classification & scientific context.

Detected Issues, Prevention & Final Recommendations.

📥 4. DOWNLOADABLE REPORT GENERATOR
Include a "Download Detailed PDF Report" button on every completed analysis screen.

The report must compile all analyzed points into a professional, printable agri-report layout including timestamp, logo, image preview, and detailed metric breakdown.

📖 5. USER MANUAL & DOCUMENTATION
Manual Section: Dedicated page explaining how the Farmer's AI image recognition system works.

Multi-Language Download Modal:

Include a "Download Manual" button.

Clicking the button opens a language selector modal.

Supported Languages: English, Hinglish, Hindi, Spanish, French, German, Punjabi, Marathi, Tamil, Telugu, and all major global languages.

🌐 6. NAVIGATION & PAGE STRUCTURE
1. Product (Dropdown / Slide-out Panels)
Each product feature links to an intro modal/slide detailing its functionality:

Crop Health Analyzer

Soil Diagnostics

Brix & pH Assessor

Seed Quality Tester

2. Company (Slide-out / Page Sections)
Careers: Job openings in Agri-Tech & AI.

About Us: Mission to empower farmers globally.

Research: Whitepapers on biological AI vision models.

Press Kit: Downloadable brand assets & news releases.

3. Support (Contact & API Docs)
Contact Support:

Email: rakshitisstillalive@gmail.com

Phone: +91 8178722739

Location: New Delhi, India

API Documentation: Public API endpoints, request/response formats, authentication headers, and rate limits.

4. Footer & Social Links
Instagram: Farmer's AI Instagram

Discord: Farmer's AI Community Discord

YouTube: Farmer's AI YouTube Channel

🔒 7. SECURITY, SEO & LEGAL COMPLIANCE
SEO: Dynamic meta titles, open-graph tags, optimized alt text for images, structured data schema for Agri-Tech tools.

Forms: Working validation for contact and newsletter signup forms with anti-spam protection.

Legal: Dedicated Privacy Policy and Terms of Service pages.

Security: Secure OAuth endpoints, sanitized image uploads, HTTPS enforcement.

Instructions for Code Generation
Please generate the clean HTML, CSS (Tailwind CSS preferred), JavaScript (React/Next.js or Vanilla JS), and API backend hooks to build this complete application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0f9febec-343a-4758-9c96-b641be63dc53).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
