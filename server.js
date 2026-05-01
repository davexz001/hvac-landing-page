const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// receive form data
app.post("/submit", (req, res) => {
  const newLead = req.body;

  fs.readFile("leads.json", (err, data) => {
    let leads = [];

    if (!err && data.length > 0) {
      leads = JSON.parse(data);
    }

    leads.push(newLead);

    fs.writeFile("leads.json", JSON.stringify(leads, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving lead");

      res.send("Lead saved");
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
