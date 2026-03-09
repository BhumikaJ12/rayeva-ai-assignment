Rayeva AI Systems Assignment:

Overview

This project implements AI-powered backend modules for a sustainable commerce platform.
The goal is to reduce manual catalog work, generate B2B proposals, and integrate AI into real business workflows.

Two modules are fully implemented with production-style architecture.

Tech Stack

Backend:

Node.js
Express
MongoDB (Atlas)
OpenAI API

Architecture:

Controller → Service → Prompt → AI → Database

Implemented Modules

Module 1 — AI Auto Category & Tag Generator

This module automatically categorizes sustainable products.

Input:

Product Name
Product Description

AI generates:

Primary category
Sub category
5–10 SEO tags
Sustainability filters

Example output:

{
 "primary_category": "Personal Care",
 "sub_category": "Oral Care",
 "seo_tags": ["bamboo toothbrush","eco toothbrush"],
 "sustainability_filters": ["plastic-free","compostable"]
}

Features:

Structured JSON output
Stored in MongoDB
Prompt + response logging

Module 2 — AI B2B Proposal Generator

This module generates sustainable procurement proposals for business clients.

Input:

Client Type
Budget
Goal

AI generates:

Recommended sustainable products
Budget allocation
Cost breakdown
Environmental impact summary

Example output:

{
 "recommended_products": [...],
 "budget_summary":{
  "total_cost": 2625,
  "remaining_budget": 2375
 },
 "impact_summary":"..."
}

Features:

Budget-aware AI recommendations
Stored proposal history
Prompt logging

Architecture:

System design follows separation of AI and business logic.

Client Request
     ↓
API Route
     ↓
Controller
     ↓
Prompt Generator
     ↓
AI Service (OpenAI)
     ↓
Structured JSON Response
     ↓
Database Storage
     ↓
Response to Client
Prompt Engineering Strategy

Prompts are designed to enforce structured JSON outputs.

Key strategies:

Explicit JSON schema
Clear constraints (budget limits)
Domain-specific instructions
Low temperature for deterministic outputs

Example prompt structure:

Return STRICT JSON in this format:
{
 "recommended_products":[...],
 "budget_summary":{},
 "impact_summary":""
}
Database Collections

MongoDB stores:

products
proposals
promptlogs

promptlogs capture:

module
prompt
response
timestamp
Architecture Design for Remaining Modules

Module 3 — AI Impact Reporting Generator

Proposed architecture:

Order data
   ↓
Impact calculation engine
   ↓
AI summarization
   ↓
Impact report stored with order

Metrics calculated:

Plastic saved
Carbon emissions avoided
Local sourcing impact

Module 4 — AI WhatsApp Support Bot

Proposed architecture:

WhatsApp message
   ↓
Twilio webhook
   ↓
Intent detection using AI
   ↓
Database queries for order data
   ↓
Automated or human response

Capabilities:

Order status queries
Return policy questions
Refund escalation
Conversation logging
Running the Project

Install dependencies:

npm install

Start server:

npm run dev
Example API Requests
Category Generator

POST

/api/ai/category

Body:

{
 "name": "Bamboo Toothbrush",
 "description": "Eco friendly toothbrush"
}

B2B Proposal Generator

POST

/api/ai/proposal

Body:

{
 "client_type": "Eco-friendly Hotel",
 "budget": 5000,
 "goal": "Replace single-use plastics"
}