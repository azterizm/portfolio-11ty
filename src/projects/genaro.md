---
layout: layouts/project.njk
title: Genaro
website: https://spresti.com
description: "A comprehensive studio management platform for fitness studios, wellness centers, and educational facilities, featuring real-time booking, payment processing, and intelligent class management."
logo: "/assets/logos/genaro.png"
main_image: "/assets/screenshots/genaro/dashboard.jpeg"
technologies: ["React Router v7", "Drizzle ORM (SQLite)", "TypeScript", "Tailwind CSS", "Stripe", "Zoom API", "Firebase", "Capacitor", "Web Push", "Redis"]
year: 2025
roles: ["Full stack developer", "System architect", "UI/UX designer", "Brand designer"]
company: independent
blocked_countries: ['UK']
---

## Project Overview

Genaro is a full-featured studio management platform that bridges the gap between fitness studios, wellness centers, educational facilities and their members. Built from the ground up as a solo venture, this platform handles everything from class scheduling and booking to payment processing and video conferencing integration.

## The Challenge

Studios needed a comprehensive solution that could handle the complexity of modern class management while remaining intuitive for both administrators and members. The platform had to support multiple user roles, real-time availability updates, automated waitlist management, payment processing, video conferencing integration, and mobile accessibility—all while maintaining performance and reliability.

## Technical Implementation

### Architecture & Stack

The application leverages React Router v7's server-side rendering capabilities for optimal performance and SEO. The frontend uses React 19 with TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for smooth animations. The backend is built on React Router's server functions with SQLite and Drizzle ORM for efficient data management.

### Key Features Developed

**Multi-Role Access System**
- Engineered a comprehensive role-based access control system supporting admin, staff, instructor, and member roles
- Each role has tailored dashboards with appropriate permissions and functionality
- Secure JWT-based authentication with encrypted session management

**Intelligent Booking System**
- Real-time availability tracking with automatic capacity management
- Smart waitlist system that automatically promotes members when spots open
- Support for both one-time and recurring class schedules
- Attendance tracking with check-in/check-out functionality

**Payment Processing**
- Complete Stripe integration for subscription management and one-time payments
- Support for multiple membership tiers and pricing models
- Automated payment tracking and financial reporting
- Webhook handling for real-time payment status updates

**Video Conferencing Integration**
- Seamless Zoom API integration for virtual classes
- Automatic meeting creation and access link distribution
- Recording management with secure member access
- Webhook-based status synchronization

**Communication System**
- Email campaign management with dynamic template variables
- Automated booking confirmations and reminders
- Custom notification widgets for different event types
- Multi-channel notifications (email, web push, mobile push)

**Mobile Applications**
- Native iOS and Android apps built with Capacitor
- Push notification support for booking reminders
- Offline functionality for viewing schedules
- Seamless synchronization with web platform

### Performance & Scalability

- Implemented Redis caching for embed widgets to handle high-traffic scenarios
- Optimized database queries using Drizzle ORM's built-in functions
- Rate limiting on API endpoints to prevent abuse
- Progressive Web App capabilities for improved mobile web experience

### Security Measures

- JWT-based authentication with encrypted session storage
- IP-based blacklist system for security
- Disposable email blocking for account creation
- Content security policies and CORS configuration
- Environment-based configuration management

## Design & User Experience

Designed the entire brand identity from scratch, including the logo and visual language. The interface prioritizes clarity and efficiency, with role-specific dashboards that surface the most relevant information. The design system uses Shadcn UI components customized with a cohesive color palette that adapts to light and dark themes.

Key UX considerations:
- Intuitive calendar views for schedule management
- One-click booking and cancellation
- Clear status indicators for class availability
- Responsive design that works seamlessly across devices
- Accessible forms with real-time validation feedback

## Technical Highlights

**Database Architecture**
- Designed a normalized SQLite schema handling complex relationships between users, classes, bookings, and memberships
- Implemented efficient indexing strategies for query optimization
- Migration system for safe schema evolution

**Email Infrastructure**
- Built a flexible email templating system using Resend
- Support for HTML and React-based email templates
- Variable interpolation for personalized communications
- Delivery tracking and bounce handling

**Reporting & Analytics**
- Revenue tracking and financial reports
- Attendance analytics and member engagement metrics
- Exportable data for external analysis
- Real-time dashboard metrics

## Deployment & DevOps

- Dockerized application for consistent deployment
- Environment-based configuration management
- Automated database migrations
- Health check endpoints for monitoring

## Media

![Genaro Dashboard](/assets/screenshots/genaro/dashboard.jpeg)
*Admin dashboard showing key metrics and upcoming classes*


![Instructor Dashboard](/assets/screenshots/genaro/dashboard-2.jpeg)
*Instructor dashboard*

![Landing Page](/assets/screenshots/genaro/landing.jpeg)
*Landing page*

![Onboarding](/assets/screenshots/genaro/onboard.png)
*Onboarding flow*

## Results

Built and delivered a production-ready platform that successfully handles the complete lifecycle of studio management—from member onboarding through booking, payment processing, class attendance, and communication. The platform supports multiple studios through a multi-tenant architecture, each with customized branding and settings.

The solo development approach enabled rapid iteration and consistent implementation across all features, from the initial concept and brand design through architecture, development, testing, and deployment. Every aspect—from database schema design to UI animations—was crafted with attention to detail and user experience in mind.
