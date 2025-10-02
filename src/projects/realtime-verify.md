---
layout: layouts/project.njk
title: Realtime Verify
website: https://realtimeverify.com
description: "Real-time email verification service with multi-stage validation pipeline and async processing."
logo: "/assets/logos/realtime-verify.webp"
main_image: "/assets/screenshots/realtime-verify/screenshot1.png"
technologies: ["React Router v7", "Vite", "Tailwind CSS", "shadcn/ui", "Node.js", "SQLite", "Drizzle ORM", "BullMQ", "Redis", "Polar.sh"]
year: 2025
roles: ["Full stack developer", "Backend architect", "Database designer", "UI/UX designer"]
company: Personal Project
---

Realtime Verify is a comprehensive real-time email verification service built entirely from scratch as a personal project. This advanced platform helps users maintain email deliverability and protect sender reputation through sophisticated multi-stage validation and asynchronous processing architecture.

### What It Does
Realtime Verify processes email lists through a sophisticated multi-stage verification pipeline to ensure maximum accuracy and deliverability. The system is designed to handle both small and large email list verification tasks while maintaining rate limits to avoid blacklisting, making it suitable for businesses of all sizes.

### Verification Pipeline
The system implements a thorough 4-stage verification process:

1. **Syntax Validation** - Basic email format checking to ensure structural correctness
2. **Domain/MX Record Checks** - Verifies domain existence and mail server configuration
3. **Disposable Email Detection** - Flags temporary email services and low-quality domains
4. **SMTP Verification** - Deep mailbox checks to confirm actual deliverability

### Core Architecture
The platform features a modern, file-based routing system with React Router v7, where API routes are prefixed with "api" for clear separation. The asynchronous processing architecture uses BullMQ queues with Redis for background job management, implementing intelligent rate limiting (25 jobs per 5 seconds) to maintain sender reputation.

### Technology Stack
The frontend leverages React Router v7 with Vite for optimal performance, styled with Tailwind CSS and shadcn/ui components for a modern, professional interface. The backend uses Node.js with Drizzle ORM and SQLite for efficient data management. The queue system utilizes BullMQ with Redis for reliable asynchronous processing, while real-time progress tracking is implemented through event emitters.

### Key Components
The system architecture includes several critical components:

- **app/worker.ts** - Background job processor handling verification tasks
- **app/services.server/email-verification/** - Complete verification logic modules
- **app/db.server/schema.ts** - Optimized database schema for email data
- **Redis Queue Management** - Scalable queue system for bulk email processing

### Monetization System
Realtime Verify implements a flexible credit-based monetization system with multiple tiers:

- **Pay-As-You-Go (PAYG)** - Flexible pricing for occasional users
- **Subscription Tiers** - Monthly plans for high-volume users
- **Polar.sh Integration** - Secure payment processing and subscription management

The credit-based system allows users to purchase verification credits or subscribe to monthly plans, with real-time credit tracking and automatic renewal options.

![Screenshot 1](/assets/screenshots/realtime-verify/screenshot1.png)
The main dashboard provides users with an intuitive interface to upload email lists and monitor verification progress in real-time.

![Screenshot 2](/assets/screenshots/realtime-verify/screenshot2.png)
Email verification results display detailed validation status for each email address, including deliverability scores and reason codes.

![Screenshot 3](/assets/screenshots/realtime-verify/screenshot3.png)
The queue management interface shows real-time processing status with detailed progress tracking and estimated completion times.

![Screenshot 4](/assets/screenshots/realtime-verify/screenshot4.png)
Credit management and subscription interface allows users to monitor usage, purchase additional credits, or upgrade their subscription plans.

### Technologies Used
Realtime Verify combines cutting-edge technologies including React Router v7 for modern frontend routing, Vite for lightning-fast builds, Tailwind CSS with shadcn/ui for professional UI components, Node.js for scalable backend services, SQLite with Drizzle ORM for efficient data management, BullMQ with Redis for reliable job processing, and Polar.sh for secure payment processing.

### Key Achievements
As a complete personal project built from scratch, Realtime Verify demonstrates my ability to:

- Design and implement sophisticated email verification algorithms
- Build scalable asynchronous processing systems with queue management
- Create real-time progress tracking with event-driven architecture
- Develop responsive, professional user interfaces
- Implement flexible monetization systems with payment integration
- Engineer robust rate limiting and reputation protection mechanisms

This project showcases my expertise in full-stack development, system architecture design, and building production-ready SaaS applications that address critical business needs in email marketing and deliverability management.