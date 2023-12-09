const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdf-sample");
const path = require('path');
const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
    if (err) {
      res.status(500).send("Error creating PDF");
      console.log(err);
    } else {
      res.status(200).send("PDF created successfully");
      console.log("Success");
    }
  });
});

app.get("/fetch-pdf", (req, res) => {
  const filePath = path.join(__dirname, 'Resume.pdf');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("Error sending PDF");
      console.log(err);
    } else {
      console.log("File sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
