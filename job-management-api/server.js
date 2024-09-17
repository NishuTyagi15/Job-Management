const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { summary, candidates, jobPosting } = require('./data/mockData');

app.get('/api/dashboard/summary', (req, res) => {
    res.json(summary); 
  });
  
  app.get('/api/candidates/latest', (req, res) => {
    res.json(candidates);
  });
  
  app.get('/api/jobs/postings', (req, res) => {
    res.json(jobPosting); 
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
