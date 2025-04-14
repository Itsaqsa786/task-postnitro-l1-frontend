# Software Engineer - L1: Frontend

This challenge is designed to evaluate your frontend development skills for the Software Engineer (L1) position at PostNitro. You'll be implementing key sections of our AI-powered carousel creation platform.

All of these pages are live and can be viewed:
- Hero Section: [https://postnitro.ai/](https://postnitro.ai/)
- Plans Section: [https://postnitro.ai/plans](https://postnitro.ai/plans)

## Project Setup

We've already added the following packages:
- [NextJS](https://nextjs.org/): v15.2.4
- [Mantine](https://mantine.dev/): v7.17.4
- [Next Intl](https://next-intl.dev/): v4.0.2
- [Phosphor Icons](https://phosphoricons.com/): v2.1.7

## Getting Started

1. Click on the "Use as template" button and create a new repository
2. Clone the project
3. Run commands:
```sh
yarn install
yarn run dev
```
4. The project should start at http://localhost:3000

## Required Tasks

### Task 1: Navigation & Internationalization

![navigation-bar](/public/navigation-bar.png)

Implement the navigation bar exactly as shown in the header of the provided designs. The navigation bar should include:

**Logo:**
- PostNitro logo (provided in the assets folder)
- Clicking the logo should navigate to the homepage

**Navigation Items:**
1. **Getting Started (Dropdown):**
   - Docs (link to: https://postnitro.ai/docs)
   - Blog (link to: https://postnitro.ai/blog)
   - Affiliates (link to: https://ls.postnitro.ai/affiliates)

2. **Products (Dropdown):**
   - LinkedIn Carousel (link to: /carousels/linkedin)
   - Instagram Carousel (link to: /carousels/instagram)
   - TikTok Carousel (link to: /carousels/tiktok)
   - Twitter Carousel (link to: /carousels/x-twitter)
   - Embed (link to: /products/embed)
   - Extension (link to: /products/extension)

3. **Free Tools (Dropdown):**
   - Twitter Banner Maker (link to: /free-ai-tools/twitter-free-banner-header-image-maker)
   - LinkedIn Banner Maker (link to: /free-ai-tools/linkedin-free-banner-header-image-maker)
   - Instagram Grid Maker (link to: /free-ai-tools/instagram-free-image-splitter-grid-maker)
   - LinkedIn Text Formatter (link to: /free-ai-tools/linkedin-free-text-formatter)
   - LinkedIn Post Generator (link to: /free-ai-tools/linkedin-free-post-generator)

4. **Plans:**
   - Clicking this should navigate to the Plans page (/plans) which is implemented in Task 3
   
1. **Language Switcher:**
   - Implement a language switcher with a flag icon for the current language
   - Flags have been provided as SVG
   - Support the following languages:
     - English (default)
     - Chinese
     - Spanish
     - French
   - All text content throughout the application should be properly translated

2. **Create Image Post Button:**
   - Button with "Create Image Post" text and a BETA badge
   - Sparkle icon on the left
   - Links to /app/post-maker

3. **Create Carousel Button:**
   - Button with "Create Carousel" text
   - Sparkle icon on the left
   - Links to /app/carousel-maker

**Mobile Considerations:**
- Implement a responsive mobile menu that appears when the screen size is small
- Mobile menu should have a hamburger icon that expands to show all menu items
- Create button should remain visible on mobile view

**Internationalization Requirements:**
- Use Next Intl to implement translations for all text content
- Create separate translation files for each supported language
- Ensure that language switching works correctly and persists across page reloads

### Task 2: Hero Section

Implement the hero section as shown in the design:

![hero-section](/public/hero-section.png)

**Main Content:**
- Subtitle: "AI-Powered Carousel Generator for Instagram, LinkedIn & More"
- Title: "PostNitro's AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more. Boost your social media engagement with customizable, brand-aligned content generated in minutes."
- All text should be properly translated using Next Intl

**Visual Elements:**
- User avatars showing platform users (use the provided images)
- 5-star rating display with the text "5.0"
- "Join 32,000+ Creators" text
- "Embedded Into 40+ SMM Platforms" text with platform icons
- All should be positioned exactly as shown in the design

**Call to Action:**
- "Start Creating Free Carousels" button with an arrow icon
- "No Credit Card Required | Free Downloads Every Month" text below the button

**Responsive Design:**
- Ensure that the layout adapts well to mobile devices
- Text should remain readable on all screen sizes
- Visual elements should be properly scaled and positioned

### Task 3: Plans Section

Implement the pricing plans section as shown in the design:

![plans-section](/public/plans-section.png)

**Section Header:**
- Title: "Plans for Your Carousel Creation Needs"
- Subtitle: "From solo creators to agencies, we have a plan that fits your requirements."

**Plan Toggle:**
- Add a toggle between "Monthly" and "Yearly" billing options
- The toggle should work and change the displayed pricing
- "30% OFF ON YEARLY SUBSCRIPTION! - ANNUAL30OFF" promotional text should be shown when yearly is selected

**Plan Cards:**
Four pricing tiers should be displayed:
1. **FREE PLAN ($0/month):**
   - List all features shown in the design
   - "Get Started" button
   
2. **STARTER PLAN ($10/month):**
   - Appropriate features list
   - "Perfect for getting started" text
   - "Get Started" button
   
3. **SOLOPRENEUR PLAN ($10/month with $20/month crossed out):**
   - "Saves you $120 per year" text (for yearly plan)
   - "Perfect for solo creators" text
   - Complete feature list as shown
   - "Get Started" button
   
4. **TEAM PLAN ($25/month with $50/month crossed out):**
   - "Saves you $300 per year" text (for yearly plan)
   - "Perfect for small teams" text
   - Complete feature list as shown
   - "Get Started" button

**Additional Information:**
- "* All prices are subject to applicable taxes." text below each plan
- "If you require additional limits, you can add them as Add-Ons to your subscription." text at the bottom

**Functional Requirements:**
- Toggling between Monthly and Yearly should update all pricing information
- Yearly prices should reflect the annual discount
- Buttons don't need to have actual functionality, but should be properly styled

**Responsive Design:**
- On mobile devices, the plan cards should stack vertically
- All content should remain readable and well-formatted on all screen sizes

## Evaluation Criteria

Your submission will be evaluated based on the following criteria:

1. **Code Quality (40%)**
   - Clean, maintainable code structure
   - Proper use of React and Next.js patterns
   - Correct implementation of Mantine components
   - Type safety and error handling
   - Component organization and reusability
   - State management approach

2. **UI Implementation (30%)**
   - Pixel-perfect implementation of the provided designs
   - Responsive design across different screen sizes
   - Proper handling of interactions (dropdowns, toggles)
   - Attention to detail (spacing, typography, colors)

3. **Internationalization (15%)**
   - Correct implementation of Next Intl
   - Proper organization of translation files
   - Language switching functionality
   - Complete coverage of all translatable content

4. **Technical Best Practices (15%)**
   - Meaningful Git commit messages and history
   - Code comments and documentation
   - Performance considerations
   - Time to complete the task
   - Problem-solving approach

## Submission Guidelines

- You have 3 days to complete this challenge
- Make sure your repository has clear instructions in the README.md for running the project
- Ensure all features work as expected before submission
- Email the link to your repository to [careers@postnitro.ai](mailto:careers@postnitro.ai) when complete
- Include your current salary and salary expectations in the email

## Additional Notes

- The UI should match the provided designs exactly - no creative freedom
- Focus on making the interface responsive for mobile devices
- Feel free to use any additional Mantine components or utilities as needed
- If you have questions, please email [careers@postnitro.ai](mailto:careers@postnitro.ai)

Good luck!