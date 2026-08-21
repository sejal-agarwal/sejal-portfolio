---
title: Building Otter
publishedAt: 2026-06-01
date: June 2026
description: Designing a RAG study workspace for students and useful, privacy-conscious insights for instructors.
tags:
  - AI
  - Engineering
  - Education
---

Otter is a study workspace that helps students ask questions grounded in their course material. Alongside the student experience, it gives instructors a view into anonymized, aggregated usage patterns.

## Building for two audiences

The project combines a Next.js interface with PostgreSQL-backed data and REST APIs. A key design challenge is making the student and instructor experiences useful without exposing individual student conversations.

I’m continuing to iterate on the retrieval experience, reusable interface components, and the way weekly insights are summarized for instructors. You can [view Otter on GitHub](https://github.com/sejal-agarwal/otter).
