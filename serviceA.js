/* const express = require("express");
const axios = require("axios");

const app = express();

app.get("/serviceA", async (req, res) => {
  const traceId = req.headers["x-trace-id"];
  const start = Date.now();

  try {
    await axios.get("http://localhost:3002/serviceB", {
      headers: { "x-trace-id": traceId }
    });

    const duration = Date.now() - start;

    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service A",
      duration,
      status: "SUCCESS"
    });

    res.send("Service A completed");

  } catch (err) {
    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service A",
      duration: Date.now() - start,
      status: "FAILED",
      error: err.message
    });

    res.status(500).send("Service A failed");
  }
});

app.listen(3001, () => {
  console.log("Service A running on port 3001");
}); */
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/serviceA", async (req, res) => {
  const traceId = req.headers["x-trace-id"];
  const start = Date.now();

  try {
    await axios.get("http://localhost:3002/serviceB", {
      headers: { "x-trace-id": traceId }
    });

    const duration = Date.now() - start;

    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service A",
      duration,
      status: "SUCCESS"
    });

    res.send("Service A completed ✅");

  } catch (err) {
    const duration = Date.now() - start;

    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service A",
      duration,
      status: "FAILED",
      error: "Downstream Service B failed"
    });

    res.status(500).send("Service A failed ❌");
  }
});

app.listen(3001, () => {
  console.log("Service A running on port 3001");
});

