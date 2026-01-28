const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());           // Allows dashboard to fetch data
app.use(bodyParser.json());

let traces = [];

// Collect trace data
app.post("/collect", (req, res) => {
  const trace = {
    traceId: req.body.traceId,
    service: req.body.service,
    duration: req.body.duration,
    status: req.body.status || "SUCCESS",
    error: req.body.error || null,
    timestamp: new Date().toISOString()
  };

  traces.push(trace);
  res.send({ status: "trace stored" });
});

// Return all traces
app.get("/traces", (req, res) => {
  res.json(traces);
});

// (Optional) clear traces – useful during testing
app.delete("/traces", (req, res) => {
  traces = [];
  res.send({ status: "all traces cleared" });
});

app.listen(4000, () => {
  console.log("Trace Collector running on port 4000");
});
