/* const express = require("express");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.get("/start", async (req, res) => {
  const traceId = uuidv4();

  await axios.get("http://localhost:3001/serviceA", {
    headers: { "x-trace-id": traceId }
  });

  res.send(`Request completed. Trace ID: ${traceId}`);
});

app.listen(3000, () => {
  console.log("Gateway running on port 3000");
}); */
const express = require("express");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.get("/start", async (req, res) => {
  const traceId = uuidv4();

  try {
    await axios.get("http://localhost:3001/serviceA", {
      headers: { "x-trace-id": traceId }
    });

    res.send(`Request SUCCESS ✅ | Trace ID: ${traceId}`);

  } catch (err) {
    console.log("Gateway detected failure ❌");

    res
      .status(500)
      .send(`Request FAILED ❌ | Trace ID: ${traceId}`);
  }
});

app.listen(3000, () => {
  console.log("Gateway running on port 3000");
});

