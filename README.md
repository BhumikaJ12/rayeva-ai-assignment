# 🌱 **Rayeva AI Backend Assignment**

<u>AI-powered backend system for sustainable product categorization and proposal generation.</u>

---

## 📌 **Project Overview**

This project implements a **Node.js + Express backend** that integrates with the **OpenAI API** to generate intelligent outputs for sustainable product businesses.

The system can:

* Automatically **categorize eco-friendly products**
* Generate **SEO tags and sustainability filters**
* Create **business proposals based on client needs and budget**
* Store **AI prompts and results in MongoDB**

---

## ⚙️ **Tech Stack**

### **Backend**

* **Node.js**
* **Express.js**

### **Database**

* **MongoDB Atlas**
* **Mongoose**

### **AI Integration**

* **OpenAI API**

### **Development Tools**

* Nodemon
* dotenv
* Git & GitHub

---

## 📂 **Project Structure**

```bash
rayeva-ai-assignment
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── prompts
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

# 🏗 **System Architecture**

The backend follows a **clean modular architecture** that separates AI logic from business logic.

```
Client Request
      │
      ▼
API Routes (Express)
      │
      ▼
Controllers
      │
      ▼
Prompt Generator
      │
      ▼
AI Service (OpenAI API)
      │
      ▼
Structured JSON Response
      │
      ▼
MongoDB Database Storage
      │
      ▼
API Response to Client
```

### **Architecture Components**

**Routes**

* Handle incoming API requests
* Forward requests to controllers

**Controllers**

* Manage request and response flow
* Connect AI services with database operations

**Prompts**

* Generate structured prompts for the AI model
* Ensure consistent JSON outputs

**AI Service**

* Communicates with the OpenAI API
* Returns generated responses

**Database (MongoDB)**

Stores:

* Products
* Proposals
* Prompt logs

This separation ensures:

* **Maintainability**
* **Scalability**
* **Clear AI-business logic separation**

---

## 🚀 **Installation & Setup**

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/BhumikaJ12/rayeva-ai-assignment.git
cd rayeva-ai-assignment/backend
```

---

### **2️⃣ Install dependencies**

```bash
npm install
```

---

### **3️⃣ Create `.env` file**

Inside the **backend folder**, create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### **4️⃣ Run the server**

```bash
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

# 🧠 **AI Features**

## **1️⃣ AI Product Category Generator**

This API analyzes product details and generates:

* Primary Category
* Sub Category
* SEO Tags
* Sustainability Filters

Example output:

```json
{
  "primary_category": "Personal Care",
  "sub_category": "Oral Care",
  "seo_tags": [
    "bamboo toothbrush",
    "eco friendly toothbrush",
    "sustainable oral care"
  ],
  "sustainability_filters": [
    "plastic-free",
    "compostable",
    "vegan"
  ]
}
```

---

## **2️⃣ AI Business Proposal Generator**

This feature generates **product recommendations based on client needs and budget**.

Example input:

```json
{
  "client_type": "Eco-friendly Hotel",
  "budget": 5000,
  "goal": "Replace single-use plastics"
}
```

Example output includes:

* Recommended products
* Quantity suggestions
* Budget summary
* Sustainability impact explanation

---

# ♻️ **Architecture for Additional Modules**

The assignment requires implementing two modules and outlining the architecture for the remaining modules.

---

## Module 3 — AI Impact Reporting Generator

This module would generate environmental impact reports for completed orders.

### Proposed Architecture

```
Order Data (products + quantities)
        │
        ▼
Impact Calculation Logic
(plastic saved, carbon avoided)
        │
        ▼
AI Summarization
        │
        ▼
Human-readable impact report
        │
        ▼
Stored with order in MongoDB
```

### Example Output

```json
{
  "plastic_saved_kg": 12,
  "carbon_avoided_kg": 72,
  "impact_statement": "This order helped prevent 12kg of plastic waste and avoided approximately 72kg of carbon emissions."
}
```

---

## Module 4 — AI WhatsApp Support Bot

This module would provide AI-powered customer support through WhatsApp.

### Proposed Architecture

```
Customer Message (WhatsApp)
        │
        ▼
Twilio WhatsApp API
        │
        ▼
Backend Webhook
        │
        ▼
AI Intent Detection
        │
        ├── Order Status → Query MongoDB
        ├── Return Policy → FAQ Response
        └── Refund Issue → Escalate to Support
        │
        ▼
Response sent to WhatsApp
        │
        ▼
Conversation logged in database
```

This system would allow businesses to automate customer support while maintaining human escalation for complex cases.

# 📡 **API Endpoints**

## **Generate Product Category**

```
POST /api/ai/category
```

Example request:

```bash
curl -X POST http://localhost:5000/api/ai/category \
-H "Content-Type: application/json" \
-d '{
"name":"Bamboo Toothbrush",
"description":"Eco friendly toothbrush made from bamboo"
}'
```

---

## **Generate Business Proposal**

```
POST /api/ai/proposal
```

Example request:

```bash
curl -X POST http://localhost:5000/api/ai/proposal \
-H "Content-Type: application/json" \
-d '{
"client_type":"Eco-friendly Hotel",
"budget":5000,
"goal":"Replace single-use plastics"
}'
```

---

# 🗄 **Database**

The project uses **MongoDB Atlas**.

Collections created:

* **products** → stores product data
* **promptlogs** → stores AI prompts and responses
* **proposals** → stores generated business proposals

---

# 🎥 **Demo**

A demo video explaining:

* Project structure
* API functionality
* MongoDB integration
* AI responses

will be provided with the assignment submission.

---

# 👩‍💻 **Author**

**Bhumika**

AI Backend Assignment – Rayeva

---

# ⭐ **Thank You**
