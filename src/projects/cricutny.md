---
layout: layouts/project.njk
title: Cricutny
website: https://www.cricutny.com/
description: "An e-commerce platform for purchasing handmade products, featuring an admin and staff dashboard for seamless management."
logo: "/assets/logos/cricutny.svg"
main_image: "/assets/screenshots/cricutny/cricutny1.png"
technologies: ["RemixJS", "PrismaJS (MySQL)", "GSAP", "TailwindCSS", "Playwright", "KonvaJS", "QuillJS", "Stripe", "Lottie", "SharpJS", "SwiperJS", "SWR", "Redis"]
year: 2024
roles: ["Full stack developer", "UI/UX designer"]
company: odesign
---
Cricutny underwent a comprehensive rebuilding effort, transforming an outdated and vulnerable platform into a robust, secure, and highly performant e-commerce solution. The initial version of Cricutny was plagued by critical issues, including severe performance bottlenecks, pervasive UI glitches, a compromised and inefficient admin dashboard, and glaring security vulnerabilities. These problems were systematically identified through rigorous testing, user feedback analysis, and deep dives into the existing codebase, which revealed an antiquated technology stack at its core.

Our approach involved a complete redesign and re-architecture from the ground up, prioritizing a secure and high-performance framework capable of handling significant traffic with exceptional speed. The new Cricutny leverages a modern tech stack, incorporating multiple layers of security at every level of the application, from user authentication to data handling and payment processing. This meticulous attention to detail ensures a resilient and trustworthy experience for all users.

A key aspect of this transformation was the implementation of distinct, authenticated panels tailored for various roles: **Staff, Admin, and Owner**. Each panel comes with its own set of permissions and capabilities, ensuring that high-level management and operational tasks can be performed securely and efficiently. For instance, the Admin panel offers comprehensive control over the entire platform, while Staff members have specific privileges for managing products and customer interactions. Robust authentication mechanisms are in place across all these panels, safeguarding sensitive operations and data.

![Screenshot 1](/assets/screenshots/cricutny/cricutny1.png)

The revamped user interface of Cricutny boasts a polished and engaging aesthetic, complemented by smooth animations that significantly enhance usability. The design is fully responsive, delivering a seamless and visually appealing experience across all devices, particularly on the homepage. This overhaul has not only increased user engagement but also broadened the platform's reach. The website is also optimized for search engines, ensuring high visibility on Google while maintaining the instantaneous page transitions characteristic of a Single Page Application (SPA).

User experience was further enhanced by introducing a rich set of features:
*   **Interactive Design Customization**: Users can now connect directly with designers and customize their purchases, making each transaction more personal.
*   **Activity Tracking**: Every user's activity is meticulously tracked and saved, allowing for easy revisiting of past actions and purchases.
*   **Shared Subscription Model**: A unique shared subscription model enables users to share a single subscription with up to three others via a unique code, boosting conversions and value.

Beyond user interaction, we developed comprehensive backend systems:
*   **Intelligent Email Campaigns**: We built a sophisticated email campaign system to foster engagement. This includes a welcome email (sent after sign-up), followed by a 6-week email campaign for free users. We implemented logic to track email opens using hidden `<img>` tags pointing to API endpoints and monitor bounces via Nodemailer's error callbacks. This system intelligently sends follow-up emails (after 3, 14, or 45 days if previous emails weren't opened) and pauses weekly campaigns for 14 days if any email is opened. It also prevents sending emails to consistently failing or "disposal" addresses, ensuring effective communication. We utilize Resend's native scheduling to manage email delivery without external cron jobs.
*   **Dynamic Product & Content Management**: Staff users can now add free and paid products, upload multiple download file types with labels, manage categories/subcategories, and control product visibility (e.g., selecting items to stay at the top). We implemented a "Star Poster" system allowing for highly customizable designs, including dynamic element positioning (e.g., moving spheres with input changes) and integration with Places API for location data. The platform can process high-definition assets for personalized gifts, with plans for customizable text positioning.
*   **Robust Payment & Subscription Handling**: Integrated with Stripe, the platform handles subscriptions, cancellations (including "is cancelling" status for premium users), and refreshes data to confirm active users. Campaign-specific pricing models are supported, allowing for dynamic price adjustments based on discount codes and campaign start times.
*   **Earning Panel**: A new earning system allows users to earn coins by inviting others (1.6 coins per invited person who joins membership) and for successful requests (1 coin). Future plans include enabling users to redeem coins for bank withdrawals, monthly memberships, or even physical products like Cricut machines.
*   **Security Features**: Beyond robust authentication, we implemented measures such as tracking login attempts with IP addresses in the admin's audience section, disabling direct IP address access, and ensuring secure form logins. Specific webhook errors were resolved by precisely allowlisting Stripe's IP addresses in Cloudflare Firewall rules, demonstrating a proactive approach to security.

The platform's performance has been optimized for speed and scalability, ensuring it can handle a large influx of users and transactions smoothly. This involved careful database optimization (e.g., combining email campaign data into a single model for efficient triggering) and front-end optimizations (e.g., fixed screen on iOS, increased slider button sizes).

Now live with a rapidly growing user base, Cricutny stands as a testament to solving complex technical challenges to deliver a feature-rich, secure, and user-friendly platform. Discover the new experience at [https://www.cricutny.com](https://www.cricutny.com) and see firsthand how Cricutny is redefining the world of digital design.
