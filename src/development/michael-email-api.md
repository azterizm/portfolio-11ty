---
layout: layouts/development.njk
title: Email-to-API MVP — Project Milestones & Scope
description: Milestone-based development plan for an Email-to-API SaaS MVP, including user flow, server requirements, and payment structure.
permalink: /development/michael-email-api/
eleventyExcludeFromCollections: true

client: Michael
project_code: EMAIL-API-MVP-2025
status: active
contract_type: Fixed-price
billing_model: fixed
currency: USD
budget: 420
payment_terms: Milestone-based on Upwork Escrow
timezone: Asia/Karachi

links:
  repo:
  figma:
  staging: # To be provisioned
  production: # To be provisioned
  docs:

contacts:
  - name: Michael
    role: Client / Product Owner
    email: # Via Upwork
    slack: # Via Upwork
  - name: Abdullah Memon
    role: Full Stack Developer
    email: abdielprime@gmail.com # Placeholder
    slack: # Via Upwork

start_date: 2025-11-03
end_date: 2026-01-12 # 10 weeks from start

scope:
  - User registration and billing plan selection (Stripe)
  - Dashboard with unique email address and API key
  - Email ingestion (SendGrid) and parsing (subject tags, body to markdown, attachments)
  - Email acceptance criteria (must be from account holder)
  - Configurable data retention (max 72 hours) with auto-delete
  - Basic virus checking on attachments
  - Dashboard history (list, view, status)
  - User settings (retention, delete data, manage billing)
  - REST API (List, Get, Mark Fetched, Get Attachment)
  - Landing page, public documentation, and analytics

out_of_scope:
  - Native mobile or desktop applications
  - Browser extensions
  - Integrations beyond SendGrid and Stripe
  - Multiple unique email addresses per user (possible Phase 2 feature)

assumptions:
  - Client will provide registered domain name
  - Client will provide Hetzner, Stripe, and SendGrid accounts
  - Primary communication will be via Upwork
  - Client will provide brand name/colors or accept developer's choice

risks:
  - Email parsing complexity with non-standard or malformed email formats
  - Third-party API changes or outages (SendGrid, Stripe)
  - Email deliverability issues (SPF, DKIM, DMARC) requiring DNS propagation time

dependencies:
  - Registered domain name
  - Hetzner account access (or API key)
  - Stripe account (test keys to start, live keys for M5)
  - SendGrid account (Inbound Parse configured)
  - GitHub repository access granted to developer

deliverables:
  - M1 - Deployed server infrastructure and authentication system
  - M2 - Email ingestion and processing pipeline
  - M3 - User dashboard and REST API
  - M4 - Public landing page and developer documentation
  - M5 - Production-hardened and monitored application
  - M6 - Final testing, bug fixes, handoff docs, and bonus landing page
  - M7 - 2-week post-launch support

communication:
  cadence: Weekly Sync Calls (Sat/Sun, 30 min, 11:00-12:00 UTC+5)
  standup_time: Daily Async Update via Upwork
  channels:
    - Upwork (primary)
    - Email (for critical production issues)

milestones:
  - title: Milestone 1 - Foundation & Infrastructure
    due_date: 2025-11-17
    invoice_amount: 65
    status: planned
    acceptance_criteria:
      - Can create account, login, logout
      - Free tier enforced (users see "0/10 emails remaining")
      - Server accessible via HTTPS with custom domain
    deliverables:
      - Server Setup & Deployment Pipeline (Hetzner, Caddy, CI/CD)
      - Authentication System (Register, Login, Reset, Verification)
      - Stripe Integration - Foundation
      - Working auth system + deployed server + database schema
  - title: Milestone 2 - Email Ingestion Pipeline
    due_date: 2025-12-01
    invoice_amount: 90
    status: planned
    acceptance_criteria:
      - Send email to testuser@yourdomain.com -> appears in database within 30 seconds
      - Hashtags extracted correctly - "Invoice (hash)urgent (hash)client-a" -> ["urgent", "client-a"]
      - Attachments saved and retrievable
      - Malformed emails logged but don't crash system
      - Free tier enforcement works (11th email rejected)
    deliverables:
      - SendGrid Inbound Parse integration
      - Email Processing Engine (tag extraction, HTML->MD, attachments)
      - Data Storage with auto-deletion cron job
      - Usage Tracking and quota enforcement
  - title: Milestone 3 - Dashboard & API
    due_date: 2025-12-08
    invoice_amount: 90
    status: planned
    acceptance_criteria:
      - Can view all received emails in dashboard
      - Can copy unique email address with one click
      - API returns correct data when called with valid API key
      - Invalid API key returns 401 Unauthorized
      - Dashboard shows loading states during data fetch
    deliverables:
      - Responsive Dashboard UI (Overview, History, Settings, Billing)
      - External REST API (List, Get, Mark Fetched, Download Attachment)
      - Security Hardening (API keys, CORS, CSP, SQLi/XSS prevention)
  - title: Milestone 4 - Landing Page & Documentation
    due_date: 2025-12-15 # Adjusted for 5-day duration
    invoice_amount: 55
    status: planned
    acceptance_criteria:
      - Landing page loads in <2 seconds
      - Mobile responsive (tested on iPhone & Android)
      - Analytics tracking confirmed working
      - Docs page covers all API endpoints with working examples
      - Pricing page links to Stripe checkout
    deliverables:
      - Public Landing Page (Hero, Features, Pricing, How-it-works)
      - Analytics Integration (GA4 or Plausible)
      - Public Documentation Page (Getting Started, API Reference, FAQ)
      - Design System (dark mode, responsive, accessible)
  - title: Milestone 5 - Production Hardening & Launch Prep
    due_date: 2025-12-22 # Adjusted for 5-day duration
    invoice_amount: 50
    status: planned
    acceptance_criteria:
      - Can process 100 concurrent emails without errors
      - Failed emails trigger notification to user
      - PM2 captures and reports errors
      - All secrets stored securely (not in Git)
    deliverables:
      - Production Configuration (Stripe Live, SendGrid DNS)
      - Monitoring & Logging (Winston/Pino, PM2, UptimeRobot)
      - Security Audit (npm audit, rate limiting)
      - Performance Optimization (DB indexes, caching)
      - Email Failure Resilience (Retry logic, DLQ)
  - title: Milestone 6 - Testing, Bug Fixes, Interview Tool LP & Handoff
    due_date: 2025-12-29 # Adjusted for 5-day duration
    invoice_amount: 40
    status: planned
    acceptance_criteria:
      - Zero critical bugs reported by testers (you and me for now)
      - All documentation complete and accurate
      - Michael can deploy updates independently using provided guide
      - Load test passes - 1,000/day without downtime
      - Michael receives access to all credentials (password manager)
    deliverables:
      - Comprehensive Testing (Integration, E2E, Load)
      - Developer Handoff README.md
      - AI-Driven Interview Practice Tool MVP Landing Page
  - title: Milestone 7 - Post-Launch Support
    due_date: 2026-01-12
    invoice_amount: 30
    status: planned
    acceptance_criteria:
      - No outstanding critical bugs
      - System uptime - >99.5%
      - Michael comfortable managing day-to-day operations
      - All agreed support tasks completed
    deliverables:
      - Critical bug fixes (24h SLA)
      - Performance monitoring and reporting
      - User support assistance (first 20 issues)
      - Minor UI/copy adjustments (max 5 hours)
      - Final Handoff Meeting
---

## 🎯 Goals
-   Provide a simple, reliable, and developer-friendly service to turn emails into structured, API-accessible data.
-   Build a scalable MVP foundation that can be iterated upon.
-   Achieve user activation (first email sent) and establish a funnel for conversion to paid plans.

## 🌊 User Flow
1.  **Sign Up & Billing:** User registers with email/password and selects a billing plan (e.g., Free, Starter) via Stripe.
2.  **Dashboard:** User lands on the dashboard and is given a unique inbound email address (e.g., `michael@yourdomain.com`) and a REST API key.
3.  **Email Ingestion:** User configures their system (or manually) to send an email to their unique address.
4.  **Parsing:** The service receives the email, verifies it's from the account holder, and parses it:
    * **Tags:** Extracts hashtags from the subject (e.g., `Invoice #client-a #urgent` -> `["client-a", "urgent"]`).
    * **Body:** Converts HTML body to Markdown (with plain text fallback).
    * **Attachments:** Saves attachments to secure storage.
5.  **Data Access (Dashboard):** User visits their dashboard history to see a list of received emails (success/failed), view content, and see tags.
6.  **Data Access (API):** User's external service hits `GET /api/v1/emails` with their API key to fetch the structured JSON data.
7.  **Data Management:** User can set a retention period (max 72 hours) after which data is auto-deleted. They can also manually delete all data.

## ⚙️ Server-side Requirements
-   **Email Acceptance:** An email must be:
    1.  Received at a generated unique inbound email address.
    2.  Sent `from` the same email address as the account holder.
-   **Sanitization:** All email content (subject, body) must be sanitized before storage and rendering to prevent XSS.
-   **Processing:** Parse subject for tags, convert body to Markdown, and store attachments.
-   **Storage:** Store email data in SQLite. Store attachments on disk. Enforce retention policy with a cron job.
-   **API Endpoints:**
    * `GET /api/v1/emails`: List emails (paginated).
    * `GET /api/v1/emails/:id`: Get single email (JSON with Markdown content).
    * `POST /api/v1/emails/:id/mark-fetched`: Update email status.
    * `GET /api/v1/attachments/:id`: Download an attachment file.
    * All API endpoints must be authenticated via `X-API-Key` header.
    * All API endpoints must be rate-limited.

## 🛠️ Tech Stack
* **Infrastructure:** Hetzner VPS
* **Web Server:** Caddy (Reverse Proxy, Automatic SSL)
* **Database:** SQLite (with automated backups via Litestream or similar)
* **Backend:** Node.js / Express 
* **Frontend:** React (via 11ty for docs/landing), Tailwind CSS
* **Caching/Rate Limiting:** Redis
* **Secrets:** .env.vault
* **CI/CD:** Bash
* **Monitoring:** PM2, UptimeRobot
* **Third-Party APIs:** SendGrid (Inbound Parse), Stripe (Billing)

## 🌎 Environments
* Managed via `.env.vault`

## 🧪 QA Plan
* Integration tests for all API endpoints using Jest/Supertest.
* End-to-end test script: (1) Sign up, (2) Send email, (3) Verify in dashboard, (4) Fetch via API.
* Load testing (Milestone 6) using `k6` or `Artillery` to simulate 1,000 emails in 1 hour.
* Manual security testing for common vulnerabilities (SQLi, XSS, insecure auth).
* Responsive testing on common mobile and desktop viewports.

## 📊 Payment Schedule Summary

| Milestone | Deliverable | Amount | Timeline |
|-----------|-------------|--------|----------|
| **1** | Foundation & Infrastructure | $65 | Week 1-2 |
| **2** | Email Ingestion Pipeline | $90 | Week 3-4 |
| **3** | Dashboard & API | $90 | Week 5 |
| **4** | Landing Page & Docs | $55 | Week 6 |
| **5** | Production Hardening | $50 | Week 7 |
| **6** | Testing & Handoff | $40 | Week 8 |
| **7** | Post-Launch Support | $30 | Week 9-10 |
| | **TOTAL** | **$420** | **10 weeks** |

## 💳 Payment Terms

*   **Payment Method:** Upwork Escrow
*   **Invoice Schedule:** Payment released upon milestone acceptance.
*   **Acceptance Window:** Client has 3 business days to review deliverables and provide feedback or acceptance.
*   **Missed Milestones:** If a milestone is not met, a detailed status update and a revised completion date will be provided. No payment will be released until the deliverable meets the agreed-upon acceptance criteria.

## 🚀 Infrastructure Cost Estimate (Client Responsibility)

**Monthly Operational Costs:**

| Service | Tier | Cost/Month | Notes |
|---------|------|------------|-------|
| **Hetzner VPS** | CAX11 | €3.79 (~$4.20) | 2 vCPU, 4GB RAM |
| **SendGrid** | Free | $0 | 100 emails/day |
| **Stripe** | Pay-as-you-go | (2.9% + $0.30) / txn | Scales with revenue |
| **Domain** | Annual / 12 | ~$1.25 | e.g., $15/year |
| **PM2.io** | Free | $0 | Limited Monitoring |
| **UptimeRobot** | Free tier | $0 | 50 monitors |
| | **TOTAL** | **~$5.45 / mo** | (Excluding Stripe fees) |

## 📋 Pre-Project Requirements (Client Action Items)

Before Milestone 1 begins, client must provide:

```

[ ] Domain name registered (e.g., emailtoapi.com)
[ ] Hetzner account created (share access or provide API key)
[ ] Stripe account created (provide test API keys)
[ ] SendGrid account created (provide API key and set up Inbound Parse domain)
[ ] GitHub repository created and developer access granted
[ ] Preferred communication channel (Confirmed: Upwork)

```

## 📈 Success Metrics

**At launch (end of M7), we'll measure:**

* **Technical KPIs:**
    * Server uptime: > 99.5%
    * Email processing success rate: > 98% (for valid emails)
    * API response time (p95): < 200ms
    * Dashboard load time (LCP): < 2s
* **Business KPIs:**
    * Landing page conversion rate (Visitor -> Signup): > 2%
    * User activation rate (Signup -> First Email Sent): > 60%
* **User Experience:**
    * Zero critical (Sev-1) bugs in production
    * < 5% support ticket rate from active users in the first month

## 🔄 Change Request Policy

* **Included in budget:** Minor copy/text changes, bug fixes for delivered features, and clarifications on existing functionality.
* **Requires additional quote:** Any new features not explicitly listed in the milestones or scope (e.g., new API endpoints, third-party integrations, design overhauls).
* **Process:** Client submits a change request via Upwork -> Developer provides a time/cost estimate -> Client approves estimate -> Work begins.

## 🎉 Let's Build Something Amazing!

**Next Steps:**
1.  **Sign-off:** Client reviews and accepts this project plan via Upwork.
2.  **Escrow:** Client funds the first milestone ($65) in Upwork Escrow.
3.  **Requirements:** Client provides all items from the "Pre-Project Requirements" checklist.
4.  **Kickoff:** Development begins!
