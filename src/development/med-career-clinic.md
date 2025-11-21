---
layout: layouts/development.njk
title: "MedCareerClinic"
description: "Plan for an AI-powered medical career interview practice platform, from visual architecture to production launch."
permalink: /development/med-career-clinic/
eleventyExcludeFromCollections: true

client: "Kiran"
project_code: MCC-V1-2025
status: planned
contract_type: Fixed-price
billing_model: fixed
currency: USD
budget: 3200
payment_terms: Milestone-based

links:
  repo: https://github.com/marr00n/MedCareerClinic
  figma:
  staging:
  production:
  docs:

contacts:
  - name: Kiran
    role: Client / Product Owner
    email: mr.kirannarula@gmail.com
    slack:
  - name: Abdullah Memon
    role: Full Stack Developer
    email: abdielprime@gmail.com
    slack:

timeline: 3-4 weeks (up to 6 weeks)

scope:
  - High-fidelity UI/UX design (Shadcn)
  - Backend with Drizzle ORM and SQLite
  - Gemini 2.5 Flash API integration for AI coaching
  - Admin dashboard for system prompt and content management
  - Candidate interview simulation (Exam and Practice modes)
  - Stripe integration for subscription billing

out_of_scope:
  - Native mobile applications
  - Advanced analytics dashboard
  - Voice and text-to-speech integration

assumptions:
  - Client will provide necessary API keys (Google AI, Stripe).
  - Client is available for weekly reviews and feedback.
  - The core logic for "JSON Enforcement" is feasible with Gemini 2.5 Flash.

risks:
  - AI model (Gemini 2.5) may not consistently return structured JSON, requiring robust error handling.
  - Delays in client feedback could impact the 5-week timeline.

dependencies:
  - Client approval of Figma designs before development starts.
  - Access to a Google Cloud project with Gemini API enabled.
  - Stripe account for payment gateway integration.

deliverables:
  - Clickable Figma prototype
  - Deployed staging environment with authentication
  - Functioning API endpoint for AI-driven interview assessment
  - Admin dashboard for dynamic control of AI prompts and questions
  - Complete user-facing interview simulation interface
  - Production-ready application with payment processing

communication:
  cadence: Weekly syncs (TBD)
  standup_time: Daily async updates (TBD)
  channels:
    - Email
    - Upwork

milestones:
  - title: "Milestone 1: Visual Architecture & Data Foundation"
    timeline: Week 1
    due_date:
    invoice_amount: 600
    status: planned
    acceptance_criteria:
      - "Key screens (Dashboard, Interview Room, Landing Page) designed in Figma."
      - "Database schema implemented with Drizzle ORM and SQLite."
      - "Secure authentication (Login/Signup) is functional on staging."
    deliverables:
      - "A clickable Figma prototype."
      - "Deployed staging environment with working auth and DB."
  - title: "Milestone 2: The AI Intelligence Layer (Gemini 2.5)"
    timeline: Week 2
    due_date:
    invoice_amount: 700
    status: planned
    acceptance_criteria:
      - "API successfully communicates with Gemini 2.5 Flash."
      - "AI output is consistently parsed into structured JSON (Score, Strengths, Weaknesses)."
      - "All AI interactions are logged for compliance."
    deliverables:
      - "A functioning API endpoint that returns a valid, scored JSON assessment."
  - title: "Milestone 3: The 'God Mode' (Admin Control & Prompt Engineering)"
    timeline: Week 3
    due_date:
    invoice_amount: 600
    status: planned
    acceptance_criteria:
      - "Admin can create, edit, and manage system prompts."
      - "Admin can CRUD interview questions."
      - "Admin can view AI interaction logs."
    deliverables:
      - "An Admin Dashboard for managing AI behavior and content."
  - title: "Milestone 4: The Candidate Experience & Simulation Logic"
    timeline: "Week 4 – 4.5"
    due_date:
    invoice_amount: 900
    status: planned
    acceptance_criteria:
      - "Exam Mode with timer and aggregated report is functional."
      - "Practice Mode with immediate feedback is functional."
      - "Interview feedback is displayed in a polished report card."
    deliverables:
      - "A complete user loop for taking interviews in both modes."
  - title: "Milestone 5: Monetization, Polish & Production Launch"
    timeline: Week 5
    due_date:
    invoice_amount: 400
    status: planned
    acceptance_criteria:
      - "Stripe subscription gating is working correctly."
      - "Application is optimized for production deployment."
      - "Final code is handed over."
    deliverables:
      - "Live application with payment processing."
      - "Finalized public-facing pages (Landing, TOS, Privacy)."
      - "Full ownership of the codebase transferred."
---
## Goal
The primary goal is to develop and launch a version 1.0 platform, MedCareerClinic, to provide AI-powered career coaching and interview preparation specifically for medical professionals. The platform will feature dynamic AI control for admins and two distinct user-facing simulation modes.

## Tech Stack
-   **Frontend:** React, Shadcn, Tailwind CSS, Framer Motion
-   **Routing:** React Router v7
-   **Backend/DB:** Drizzle ORM, SQLite
-   **AI:** Gemini 2.5 Flash
-   **Payments:** Stripe

## Milestone Summary

| Milestone | Focus | Deliverable | Budget |
| :--- | :--- | :--- | :--- |
| **1** | **Design & Foundation** | Figma, Auth, DB Setup | **$600** |
| **2** | **AI Logic (Backend)** | Gemini 2.5 Integration, JSON Parsing | **$700** |
| **3** | **Admin Control** | **Prompt Editor**, Question Manager | **$600** |
| **4** | **User Experience** | Exam Logic, Framer Motion UI | **$900** |
| **5** | **Launch** | Stripe, Production Deploy | **$400** |
| **Total** | **V1 Full Stack** | **Complete Application** | **$3,200** |
