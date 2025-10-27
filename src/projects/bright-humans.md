---
layout: layouts/project.njk
title: Bright Humans
website: https://www.brighthumans.com/
description: "A sophisticated global marketplace platform connecting students with private tutors for online and in-person lessons, featuring real-time booking, integrated payments, and comprehensive admin management."
logo: "/assets/logos/bright_humans.svg"
main_image: "/assets/screenshots/bright-humans/main.png"
technologies: ["React 19", "React Router 7", "TypeScript", "SQLite", "Drizzle ORM", "Redis", "TailwindCSS", "shadcn/ui", "Stripe", "Resend", "Sharp", "Zod"]
year: 2025
roles: ["Full stack developer", "System architect", "UI/UX designer", "Brand designer"]
company: Independent
blocked_countries: ['UK']
---

## Project Overview

Bright Humans is a production-ready, enterprise-grade online marketplace that revolutionizes private tutoring by seamlessly connecting students with qualified tutors worldwide. Built as a complete full-stack solution, the platform handles everything from tutor discovery and real-time scheduling to secure payments and in-app communication.

## The Challenge

The client envisioned a comprehensive tutoring marketplace that could compete with established platforms while offering a modern, intuitive user experience. The platform needed to handle complex business logic including tiered subscription models, commission-based revenue, role-specific workflows, and real-time interactions—all while maintaining enterprise-level security and scalability.

## My Role & Approach

As the sole developer and architect, I was responsible for every aspect of this project:

- **System Architecture**: Designed a scalable full-stack architecture using React Router 7's SSR capabilities with SQLite/Drizzle ORM for robust data management
- **Brand Identity**: Created the complete brand identity including logo design and visual language
- **User Experience**: Designed and implemented intuitive user interfaces for three distinct user roles (students, tutors, and admins)
- **Technical Implementation**: Built all frontend and backend features from authentication to payment processing
- **Business Logic**: Implemented complex commission calculations, tiered subscription models, and automated financial workflows

![Bright Humans Dashboard](/assets/screenshots/bright-humans/screenshot1.png)

## Key Features Delivered

### Marketplace Core
Built a comprehensive tutor discovery system with advanced search capabilities, real-time suggestions, and location-based filtering. Tutors showcase detailed profiles with specialties, availability calendars, and verified ratings.

### Real-Time Booking System
Engineered a timezone-aware scheduling engine where students propose lesson times and tutors confirm availability. The system tracks bookings through their complete lifecycle: REQUESTED → CONFIRMED → COMPLETED, with automated status updates and notifications.

### Integrated Payment Processing
Implemented secure Stripe checkout with automated commission calculation (10% per lesson) and tiered monthly subscription fees (£0-£10 based on booking volume). Built comprehensive refund management and earnings dashboards for tutors.

![Booking Interface](/assets/screenshots/bright-humans/screenshot3.png)

### In-App Communication
Developed a real-time messaging platform with message status tracking (sent, delivered, seen), conversation persistence, and smart notifications for booking requests and confirmations.

### Multi-Role Admin Panel
Created a powerful admin dashboard for platform oversight including user management, lesson monitoring, financial tracking, revenue analytics, and content moderation tools.

![Tutor Profiles](/assets/screenshots/bright-humans/screenshot4.png)

## Technical Highlights

### Modern Full-Stack Architecture
Leveraged React Router 7's full-stack capabilities for server-side rendering and routing, paired with Redis for session management and real-time features. This architecture delivers fast page loads and excellent SEO while maintaining rich interactivity.

### Robust Data Layer
Implemented Drizzle ORM with SQLite for type-safe database operations, comprehensive migrations, and optimized query performance. The schema supports complex relationships between users, tutors, lessons, messages, and reviews.

### Security First
Built enterprise-grade security including JWT authentication with Google OAuth, role-based access control, SQL injection protection, input validation with Zod schemas, IP tracking for suspicious activity, and content filtering for user-generated content.

### Business Intelligence
Developed analytics dashboards providing insights into user engagement, booking patterns, revenue tracking, and tutor performance metrics—enabling data-driven business decisions.

## Technical Stack

**Frontend**: React 19 with TypeScript for type-safe component development, TailwindCSS 4 for responsive styling, shadcn/ui for accessible UI components

**Backend**: React Router 7 for full-stack SSR, SQLite with Drizzle ORM for data persistence, Redis for caching and sessions

**Integrations**: Stripe for payment processing, Resend for transactional emails, Sharp for image optimization

**Quality**: Biome for code quality, Zod for runtime validation, comprehensive TypeScript type checking

## Results & Impact

Delivered a production-ready marketplace platform that handles the complete tutoring business workflow from discovery to payment. The platform's architecture supports global scaling while maintaining fast performance and intuitive user experiences across all user roles.

The modular architecture and comprehensive admin tools enable the client to efficiently manage the marketplace, process payments, moderate content, and scale operations without technical bottlenecks.

## Key Achievements

- **End-to-End Ownership**: Independently designed, architected, and built the entire platform from concept to production
- **Complex Business Logic**: Successfully implemented tiered subscription models, automated commission calculations, and multi-role workflows
- **Real-Time Features**: Built responsive booking systems and messaging with Redis-backed state management
- **Enterprise Security**: Implemented comprehensive security measures including authentication, authorization, and content moderation
- **Brand Creation**: Designed complete brand identity including logo and visual design system
- **Scalable Architecture**: Architected a system capable of handling global user bases and high transaction volumes

