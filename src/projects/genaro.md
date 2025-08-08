---
layout: layouts/project.njk
title: Genaro
description: "Genaro is a comprehensive studio management platform connecting fitness studios, wellness centers, and educational facilities with their members through streamlined booking, payment, and class management."
logo: "/assets/logos/genaro.png"
main_image: "/assets/screenshots/genaro/main.jpeg"
technologies: ["React", "React Router", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Drizzle ORM", "Zod", "Remeda", "date-fns", "Stripe API", "Zoom API"]
year: 2025
roles: ["Full stack developer", "System architect", "Payment integration specialist", "UI/UX designer"]
website: https://www.spresti.com/
---

Genaro is a robust, full-stack studio management platform designed to seamlessly connect fitness studios, wellness centers, and educational facilities with their members. It offers a comprehensive suite of tools for streamlined booking, secure payment processing, and efficient class management, enhancing operational efficiency for studios and providing a superior, integrated experience for members.

## Project Goal

The primary goal was to create an intuitive and integrated platform that empowers studio owners to effectively manage their operations, from class scheduling and instructor assignment to comprehensive financial reporting and targeted member engagement. Concurrently, it aimed to provide members with a convenient web and mobile experience for discovering, booking, and attending classes, including automated reminders and access to recorded sessions, while simplifying the payment journey through secure integrations. A core aspect of this goal was to provide distinct, secure panels for different user roles—Admin, Staff, and Instructors—ensuring tailored functionality and high-level management capabilities with appropriate authentication and authorization.

## Discovery and Problem Solving

Initial analysis revealed several critical areas requiring robust and scalable solutions to meet the demanding operational needs of modern studios:

-   **Complex Workflow Orchestration**: Managing dynamic waitlists, multi-channel notifications, and granular role-based access for diverse user types (owners, staff, instructors, members) presented significant complexity. This was addressed by designing a flexible database schema using **Drizzle ORM** (`classesEventsTable`, `classEventBookingsTable`, `classEventInstructorsTable`) that precisely modeled intricate relationships. Backend services (`schedule.server.ts`) were developed with transactional integrity, and comprehensive authorization helpers (`auth.server.ts`, specifically `requireUserMember`) ensured that only users with the correct roles could access or modify data, preventing unauthorized actions across different management panels.

-   **Secure Payment & Subscription Handling**: Building a robust and secure integration with Stripe for both one-time payments and recurring membership subscriptions, including the intricacies of managing refunds and discounts, was paramount. The solution involved deep integration with the **Stripe API**, leveraging its secure elements for payment processing and webhooks for reliable transaction confirmation, all managed within a secure backend environment.

-   **Real-time API Integrations**: Seamlessly integrating with third-party services like Zoom for automatic live class hosting, meeting generation, and managing secure access to recorded sessions required careful design. The system was engineered to programmatically interact with the **Zoom API** upon class creation or updates, ensuring that meeting links were automatically generated and securely provided only to booked attendees.

-   **Scalable Data Management**: Designing a performant and flexible database schema to efficiently handle high volumes of bookings, memberships, complex class schedules, and user data, ensuring scalability for a growing user base, was a foundational challenge. **Drizzle ORM** was instrumental in creating an optimized and extendable schema. Transactional operations were heavily utilized to maintain data consistency and integrity under concurrent access, contributing to the platform's ability to handle large traffic efficiently while remaining fast and responsive.

## Continuous Feature Development

Beyond addressing initial core challenges, Genaro has continuously evolved through a structured milestone-based development approach, pursuing a comprehensive suite of features:

-   **Membership System**: Implementing a full membership lifecycle, including plan creation, online and manual payment processing via Stripe, and linking memberships directly to class access control. This empowers studios to offer flexible subscription models and ensures seamless member eligibility checks.
-   **Instructor Tools**: Enhancing the instructor experience with automated Zoom integration for online classes, a robust waiting list system that automatically manages spots when cancellations occur, and comprehensive dashboards showing attendee lists and attendance tracking.
-   **Business Presence Management**: Providing studios with embeddable widgets (e.g., schedule, lead capture) to integrate Genaro's functionality directly into their existing websites, along with services for full website development and custom domain setup.
-   **Advanced Features**: Introducing a centralized notification system (email and in-app) for timely alerts (reminders, cancellations), an integrated marketing email system for targeted communication, and detailed financial and attendance reporting with charts for high-level management oversight. Mobile applications for both members and instructors were also developed to extend accessibility and functionality.

## Project Status

Genaro has been successfully developed as a fully functional and highly scalable platform, effectively addressing the complex operational and engagement needs of modern studio management. It stands as a production-ready solution, offering a comprehensive and reliable system for studios to digitalize and optimize their operations efficiently. The entire website is built with robust security measures, including role-based access control and secure payment integrations, ensuring data integrity and user privacy. Designed for performance, the backend is optimized to handle large traffic volumes, providing a fast and responsive user experience across all management panels and member interfaces.

![Screenshot 1](/assets/screenshots/genaro/screenshot1.png) 
![Screenshot 2](/assets/screenshots/genaro/screenshot2.jpeg) 
![Screenshot 3](/assets/screenshots/genaro/screenshot3.png) 

## Technologies Used

*   **Frontend Framework**: React, React Router
*   **Language**: TypeScript
*   **UI/Styling**: Tailwind CSS, Shadcn UI, Framer Motion
*   **Backend & ORM**: Drizzle ORM
*   **Payment Gateway**: Stripe API
*   **Video Conferencing Integration**: Zoom API
*   **Data Validation**: Zod
*   **Functional Programming Utilities**: Remeda
*   **Date Manipulation**: date-fns

