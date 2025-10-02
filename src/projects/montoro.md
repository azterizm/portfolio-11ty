---
layout: layouts/project.njk
title: Montoro
description: "Functioning as a \"digital second brain,\" Montoro allows users to upload documents, text, and other media to build a personal knowledge base."
logo: "/assets/logos/montoro.png"
main_image: "/assets/screenshots/montoro/main.png"
technologies: [ "React Router v7", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Drizzle ORM", "ChromaDB", "Redis", "Zod", "Remeda", "date-fns" ]
year: 2024
roles: ["Full stack developer", "Researcher", "UI/UX designer", "Technical writer", "Presenter"]
project_link: "https://github.com/azterizm/montoro-public"
company: IMSA Hyderabad
---

Montoro is an AI-powered personal knowledge management platform, conceived as a "digital second brain" to combat information overload. It provides a centralized, intelligent system for users to effortlessly organize, store, and retrieve their valuable knowledge from diverse sources. By integrating advanced AI capabilities, Montoro transforms fragmented information into an accessible and powerful personal asset.

## Project Goal

The primary objective was to develop a secure, full-stack web application that allows users to build a comprehensive knowledge base from various inputs (text, ZIP files, YouTube videos) and interact with it via an intelligent chatbot. The core aim was to leverage Retrieval-Augmented Generation (RAG) to provide accurate, contextually relevant answers with proper citations, enhancing personal productivity and learning.

## Key Challenges

Developing Montoro presented several technical challenges:
-   **Implementing the RAG Pipeline**: Successfully integrating text chunking, embedding generation, vector storage with ChromaDB, and the final Large Language Model (LLM) query for coherent and cited answers.
-   **Real-Time Communication**: Establishing a robust Server-Sent Events (SSE) system for real-time progress updates on long-running processes, ensuring reliability across development and production environments.
-   **Asynchronous Processing**: Designing scalable background services for diverse data ingestion types while meticulously managing and communicating document processing statuses to the user.

## Project Status

Montoro has been successfully developed as a functional and robust proof-of-concept, meeting all the objectives outlined for a final year capstone project. It stands as a testament to the effective integration of modern web development practices with cutting-edge AI.


![Screenshot 6](/assets/screenshots/montoro/screenshot6.webp)
![Screenshot 1](/assets/screenshots/montoro/screenshot1.png)
![Screenshot 2](/assets/screenshots/montoro/screenshot2.png)


## Technologies Used

*   **Framework**: React Router v7 
*   **Language**: TypeScript
*   **UI/Styling**: React, shadcn/ui, Tailwind CSS, Framer Motion
*   **Databases**: Drizzle ORM (SQLite), ChromaDB (Vector Database), Redis (Cache/Rate Limiting)
*   **AI**: OpenAI API (`gpt-4o-mini`), custom RAG pipeline
*   **Utilities**: Zod, Remeda, date-fns

