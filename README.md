🧵 Mini Request Tracing System (Observability Project)
A mini distributed request tracing system inspired by Jaeger and Zipkin, designed to track how requests flow across multiple microservices, measure latency, and capture failures.

📌 Overview
Modern applications are built using microservices, where a single user request passes through multiple backend services. Debugging performance issues or failures in such systems is challenging.
This project demonstrates how distributed tracing works internally by:
Generating a unique Trace ID
Propagating it across services
Measuring execution time
Collecting success and failure traces centrally

🧠 What This Project Does
Creates a Trace ID at the gateway
Passes the Trace ID to downstream services
Measures latency for each service
Simulates real-world service failures
Stores trace data in a central collector
Displays traces in a simple dashboard

🧩 System Architecture
Client
  ↓
Gateway (creates Trace ID)
  ↓
Service A
  ↓
Service B (may fail)
  ↓
Trace Collector
  ↓
Dashboard

📁 Project Structure
request-tracing-system/
│
├── gateway.js          # Entry point (Trace ID generation)
├── serviceA.js         # Microservice A
├── serviceB.js         # Microservice B (failure simulation)
├── collector.js        # Central trace collector
├── dashboard.html      # Trace visualization UI
├── package.json
└── README.md

⚙️ Key Features
Unique Trace ID generation
Trace propagation across microservices
Latency measurement per service
Failure and error tracing
Centralized trace storage
Simple dashboard for visualization
CORS-enabled communication

🛠️ Tech Stack
Node.js
Express.js
Axios
UUID
REST APIs
HTML & JavaScript

▶️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start all services (4 terminals)
node collector.js
node serviceB.js
node serviceA.js
node gateway.js


Ports used:
Gateway: 3000
Service A: 3001
Service B: 3002
Collector: 4000

🧪 How to Test
Open browser and visit:http://localhost:3000/start

A Trace ID will be generated Open dashboard.html using Live Server
Click Load Traces to view collected data

📊 Sample Trace Data
{
  "traceId": "1234-abcd",
  "service": "Service B",
  "status": "FAILED",
  "duration": 210,
  "error": "Internal Server Error"
}

🎯 What This Project Demonstrates
Distributed systems fundamentals
Microservice communication
Observability concepts
Latency analysis
Failure debugging
Backend system design thinking

🗣️ Interview One-Liner
I built a mini request tracing system that tracks request flow, latency, and failures across multiple microservices, similar to Jaeger.

🔮 Future Enhancements
Timeline-based trace visualization
Dockerized microservices
Persistent storage (DB)
Authentication and rate limiting
Cloud deployment

👩‍💻 Author
Srija Irugu
B.Tech CSE (AI & ML)
Aspiring Software Engineer
