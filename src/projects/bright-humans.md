---
layout: layouts/project.njk
title: Bright Humans
description: "A global online tutoring platform connecting clients with expert tutors across diverse
subjects, featuring comprehensive booking, secure payments, and real-time communication capabilities."
logo: "https://brighthumans.com/logo.svg"
main_image: "/assets/screenshots/bright-humans/main.png"
technologies: ["React", "React Router", "TypeScript", "Tailwind CSS", "Shadcn UI", "Zod", "Drizzle ORM",
"SQLite", "Node.js", "Stripe API", "Resend API", "Google OAuth", "date-fns", "Framer Motion", "Remeda"]
year: 2025
roles: ["Full stack developer", "Platform Architect", "Payment System Integrator", "Communication System
Designer", "UX/UI Implementer"]
website: "https://brighthumans.com"
company: Bright Humans
---

Bright Humans is a state-of-the-art online tutoring platform established in 2025, designed to
revolutionize the way students connect with private tutors. The platform facilitates both online and
in-person sessions across an expansive range of subjects, from academic disciplines like mathematics and
languages to creative arts, cooking, music, professional development, and sports. It streamlines the
entire tutoring process, from discovering expert tutors and seamless communication to booking sessions,
secure payment processing, and a structured compensation model for tutors based on bookings and monthly
fees.

## Project Goal

The primary objective was to build a comprehensive, user-centric platform that efficiently connects
clients with qualified expert tutors. This involves creating intuitive search and communication tools, a
robust booking system, and a secure payment infrastructure. A key goal was to offer a diverse subject
catalog, ensuring accessibility for a wide array of learning needs, while also implementing a
sustainable financial model that supports tutors through commissions and tiered fees.

## Key Challenges

Developing Bright Humans involved navigating several complex challenges:
-   **Dynamic Search and Matching**: Implementing an intelligent search and filtering system to
effectively match clients with the most suitable expert tutors based on subjects, availability, and
preferences.
-   **Secure and Flexible Payment System**: Designing and integrating a robust payment gateway (Stripe)
to handle secure transactions, manage commissions for the platform, and implement a tiered monthly fee
structure for tutors.
-   **Real-time Communication and Scheduling**: Developing a reliable real-time messaging system and a
flexible session booking and availability management system to ensure smooth coordination between
clients and experts.
-   **Scalability and Performance**: Ensuring the platform's architecture can support a growing global
user base and maintain high performance for all core functionalities, including user authentication and
notifications.

## Project Status

Bright Humans has been successfully developed as a fully functional and scalable platform. Core features
such as user authentication, profile management, tutor search, messaging, session booking, and
integrated payment processing are implemented and operational. The platform provides a seamless and
engaging experience for both clients seeking knowledge and experts sharing their skills.

![Screenshot 1](/assets/screenshots/bright-humans/screenshot1.png) 
![Screenshot 3](/assets/screenshots/bright-humans/screenshot3.png) 
![Screenshot 4](/assets/screenshots/bright-humans/screenshot4.png) 

## Technologies Used

*   **Frontend**: React, React Router, TypeScript, Tailwind CSS, Shadcn UI
*   **Backend**: Node.js, Drizzle ORM (with SQLite), TypeScript
*   **Data Validation**: Zod
*   **Styling & Animation**: Framer Motion
*   **Date Management**: date-fns
*   **Utility Library**: Remeda
*   **Payment Gateway**: Stripe API
*   **Email Service**: Resend API
*   **Authentication**: Google OAuth, Session-based authentication
*   **Deployment**: Docker

## Our Approach & Solution Delivery

The project was structured into several key milestones, each building upon the last to deliver a comprehensive solution.

### **Phase 1: Laying the Foundation (Milestone 1: User Foundation & Tutor Showcase)**

*   **Problem:** A need for a secure and structured entry point for both students and tutors, and a way for tutors to present their offerings.
*   **Solution:** We developed a robust user authentication system, including secure registration, login/logout, and session management with password hashing. Basic student profiles were implemented, alongside a detailed tutor profile creation and publishing system. Tutors could create comprehensive profiles with their bio, subjects, hourly rates, and preferred video calling platforms, and manage their profile's visibility. This phase established the secure base for all subsequent interactions.

### **Phase 2: Connecting Learners & Educators (Milestone 2: Tutor Discovery & Initial Communication)**

*   **Problem:** Students needed an effective way to find suitable tutors and communicate with them securely within the platform.
*   **Solution:** We built an intuitive tutor search and listing functionality, allowing students to filter tutors by subject. Detailed tutor profiles were made viewable to prospective students. Crucially, a real-time, in-platform messaging system was developed, ensuring instant communication between students and tutors. A significant enhancement was the integration of **chat content censorship**, automatically redacting sensitive personal information (like phone numbers and emails) and inappropriate language, thereby ensuring a safe and professional communication environment. UI/UX was refined for optimal search, browsing, and messaging experiences, with clear indicators for new messages.

### **Phase 3: Streamlining Bookings & Secure Payments (Milestone 3 & 4: Lesson Booking & Student Payment Processing, Lesson Coordination & Tutor Payouts)**

*   **Problem:** Manual booking processes, insecure payment handling, and complex tutor payout management.
*   **Solution:** A streamlined lesson booking flow was implemented, incorporating tutor availability management. For secure financial transactions, we integrated **Stripe Connect**, enabling students to make payments directly and allowing tutors to securely onboard their bank accounts for automated payouts. Meeting details (links, IDs, passwords) could be input by tutors and were automatically sent to the student's chat. Tutors gained the ability to manually mark lessons as "Completed," triggering automated payouts with a 10% platform commission deduction. A basic booking history dashboard provided transparency for both students and tutors.

### **Phase 4: Implementing Sustainable Revenue (Milestone 5: Automated Tiered Monthly Fee for Tutors)**

*   **Problem:** Establishing a consistent and fair recurring revenue model.
*   **Solution:** A system was developed to accurately track monthly *paid and completed* bookings for each tutor. This data powered a **tiered monthly fee logic** (e.g., 0-5 bookings = £0; 6-10 bookings = £X; 11+ bookings = £Y), which was then automated via Stripe for recurring billing at the end of each month. This ensured a predictable revenue stream while incentivizing tutor activity, with tutors receiving notifications regarding their fee tier and charges.

### **Phase 5: Building Trust & Social Proof (Milestone 6: Basic Tutor Reviews & Ratings)**

*   **Problem:** Students lacked a reliable mechanism to evaluate tutor quality and build trust.
*   **Solution:** We implemented a comprehensive review and rating system. Students could leave star ratings (1-5) and short written reviews for tutors *after* a lesson was marked "Completed." These reviews are prominently displayed on the tutor's public profile, along with an automatically calculated average star rating, significantly enhancing tutor credibility and aiding student decision-making.

## Addressing Specific Challenges & Continuous Refinements

Throughout the development lifecycle, we engaged in continuous problem discovery and refinement, often driven by direct user feedback and operational needs:

*   **Timezone Discrepancy:** A critical issue reported by a user regarding session time display (e.g., "8:07" showing as "9:07") was meticulously investigated and resolved. The system was updated to correctly handle timezones, ensuring accurate time representation for the recipient, while the person proposing the time saw it without conversion for clarity.
*   **Session Cancellation & Refunds:** A "Cancel Session" button was introduced with a robust backend process. While initially handled manually by emailing `info@brighthumans.com` for refund processing, the system was designed to include a `refunded_money` boolean attribute. A secure, expiring hash link is generated in the email to automatically update this status in the database, ensuring that the holding amount for a session remains in place and is not credited to the expert if cancelled before the meeting start. Confirmation messages notify users about the refund processing status.
*   **User Experience Streamlining:**
    *   The "chat send" button was dynamically controlled, greying out when no message was present.
    *   The tutor's hourly rate was relocated to the prominent "overview" section for improved visibility.
    *   The complexity of "client profile customization" was removed to simplify the user journey.
    *   The concept of multiple subjects was streamlined to "one hourly rate" for tutors, simplifying their offerings.
    *   All elements of the expert (tutor) profile customization were consolidated into a single, intuitive interface.
    *   Minor yet impactful fixes included making the camera icon clickable for profile picture uploads, making the experience section optional, defaulting English as an added language, and resolving "NaN" error messages for default hourly rates.
    *   The "preferred platform selection" was removed for simplicity.
    *   "Book meeting right away" was concisely changed to "Book Now," with input retention upon back navigation.
    *   Terminology was standardized across the platform: "lesson" became "session," and "seeker" became "client."
*   **Real-time Communication & Conflict Prevention:**
    *   A streamlined "book flow" was developed where both booking and chat actions trigger initial messages.
    *   Server-Sent Events (SSE) were implemented to enable real-time refetches and notifications for both recipients upon event triggers, ensuring immediate communication updates.
    *   A critical feature was added to prevent double-bookings: the system now checks for existing tutor meetings at the proposed time and notifies both student and tutor of any conflict.
    *   A comprehensive notification system was developed to keep users informed about important updates.
*   **Post-Lesson Functionality & Reporting:**
    *   A functional "report" button for students was integrated, displaying reported messages on the `/lesson` page for administrative review.
    *   Tutor earnings are now automatically updated each time a session's status becomes "COMPLETED."
    *   The "in-person" or platform selection was removed from meeting information to simplify the process.

## Robust Architecture & Security

The Bright Humans platform was meticulously crafted using modern web technologies, ensuring a robust, secure, and performant application. The frontend leverages **React** for dynamic user interfaces, with **Zod** for data validation, **TailwindCSS** and **Shadcn** for a sleek, consistent, and highly customizable design system. **Framer Motion** was utilized for fluid animations, enhancing the user experience, while **Remeda** and **Date-fns** provided essential utility and date manipulation functionalities.

For the backend and database, **Drizzle ORM** was chosen for its type-safe and performant query building, adhering to best practices by exclusively using built-in functions and avoiding deprecated `sql` expressions or explicit indexing via the third argument of `sqliteTable`.

**Security was a top priority** throughout the development. The platform implements a comprehensive authentication and authorization system, enabling **different panels and access levels for various roles**, including staff, admin, and owner, all protected by secure authentication. This role-based access control (RBAC) ensures data integrity and prevents unauthorized access to sensitive information or functionalities. Rigorous input validation is applied across all user inputs and communications.

The architecture was designed for **high scalability and speed**, capable of handling a large volume of concurrent users and significant traffic without compromising performance. Optimizations were made for fast page loads, real-time communication through SSE, and efficient data processing, contributing to a fluid and responsive user experience.

## Conclusion

The Bright Humans project successfully transformed a vision into a fully functional, secure, and scalable global online tutoring platform. By systematically tackling complex requirements, integrating robust third-party services like Stripe, and diligently addressing user feedback, we delivered a platform that not only meets but exceeds the demands of modern online education. The solution stands as a testament to effective problem discovery, iterative feature development, and a commitment to delivering a high-quality, secure, and efficient experience for students and tutors worldwide.

