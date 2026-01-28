/* const express = require("express");
const axios = require("axios");

const app = express();

app.get("/serviceB", async (req, res) => {
  const traceId = req.headers["x-trace-id"];
  const start = Date.now();

  // simulate work
  setTimeout(async () => {
    const duration = Date.now() - start;

    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service B",
      duration
    });

    res.send("Service B completed");
  }, 300);
});

app.listen(3002, () => {
  console.log("Service B running on port 3002");
});
 */
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/serviceB", async (req, res) => {
  const traceId = req.headers["x-trace-id"];
  const start = Date.now();

  // 40% chance of failure
  const shouldFail = Math.random() < 0.4;

  setTimeout(async () => {
    const duration = Date.now() - start;

    if (shouldFail) {
      await axios.post("http://localhost:4000/collect", {
        traceId,
        service: "Service B",
        duration,
        status: "FAILED",
        error: "Database timeout"
      });

      return res.status(500).send("Service B failed ❌");
    }

    // SUCCESS case
    await axios.post("http://localhost:4000/collect", {
      traceId,
      service: "Service B",
      duration,
      status: "SUCCESS"
    });

    res.send("Service B completed ✅");
  }, 300);
});

app.listen(3002, () => {
  console.log("Service B running on port 3002");
});
