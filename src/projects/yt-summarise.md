---
layout: layouts/project.njk
title: YouTube Summary AI
description: "A comprehensive AI-powered tool for summarizing YouTube videos into key points, timestamps, and full summaries, with sharing capabilities and a credit-based subscription payment system."
logo: "https://ytsummarise.com/logo.png"
main_image: "/assets/screenshots/yt-summarise/main.png"
technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Stripe API", "OpenAI API", "youtube-dlp", "Alpine.js", "Tailwind CSS"]
year: 2024
roles: ["Full stack developer", "AI Integration Specialist", "Payment System Architect", "UX/UI Designer"]
website: "https://ytsummarise.com"
company: Jake Cheung
---

The YouTube Summary AI is an innovative, full-stack application designed to transform lengthy YouTube videos into concise, actionable summaries. Leveraging advanced AI models, it extracts key points, generates timestamps, and provides comprehensive summaries, significantly enhancing content consumption efficiency. The platform also integrates robust features for sharing summaries and a flexible credit-based subscription system via Stripe, offering a seamless user experience for content creators and consumers alike.

## Project Goal

The primary goal was to develop an intelligent and user-friendly platform that automates the summarization of YouTube video content. This includes accurately distilling video narratives into key takeaways, generating precise timestamps for easy navigation, and providing an overall summary. A crucial aspect was to implement a secure and scalable payment gateway using Stripe for a credit-based consumption model, alongside enabling users to easily share generated summaries, thereby fostering community engagement and knowledge dissemination.

## Key Challenges

Developing the YouTube Summary AI presented several intricate challenges:
-   **Accurate AI Summarization**: Integrating and fine-tuning OpenAI's large language models to consistently produce high-quality, coherent, and contextually relevant summaries, key points, and timestamps from diverse video content.
-   **Robust Video Processing**: Handling the complexities of fetching and processing YouTube video data, including audio extraction and transcription, across various video lengths and formats, while optimizing for speed and resource efficiency.
-   **Scalable Credit System & Payments**: Designing and implementing a robust credit-based usage system tightly coupled with Stripe for secure payment processing, managing user credit balances, and handling subscription lifecycle events.
-   **Real-time Progress Feedback**: Providing users with real-time updates on the video summarization process, from downloading and transcribing to final summary generation, to enhance user experience and manage expectations for potentially long-running tasks.

## Project Status

The YouTube Summary AI has been successfully developed as a fully functional, production-ready application. It reliably processes YouTube videos to generate accurate summaries, key points, and timestamps, offering a streamlined content consumption experience. The integrated Stripe payment system and sharing features are fully operational, providing a comprehensive solution for efficient video content analysis and distribution.

![Screenshot 1](/assets/screenshots/yt-summarise/screenshot1.png) 
![Screenshot 2](/assets/screenshots/yt-summarise/screenshot2.png) 
![Screenshot 3](/assets/screenshots/yt-summarise/screenshot3.png) 

## Technologies Used

*   **Backend Framework**: Node.js, Express.js
*   **Language**: TypeScript
*   **Database & ORM**: PostgreSQL, Prisma ORM
*   **AI Integration**: OpenAI API (for summarization and transcription)
*   **Video Processing**: `youtube-dlp` (for video/audio extraction)
*   **Payment Gateway**: Stripe API
*   **Frontend Framework**: Alpine.js
*   **Styling**: Tailwind CSS
*   **Authentication**: Passport.js 
*   **Email Service**: Resend 
*   **Error Handling**: Custom error classes 

