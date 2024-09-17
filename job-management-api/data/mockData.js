const summary = {
    "totalJobs": 25,
    "totalApplicants": 3250,
    "notReviewedApplicants": 810,
    "aiCredits": 55000 
  }

const candidates = [
    {
      "candidateName": "Alice Johnson",
      "jobName": "Software Engineer - Backend",
      "rating": 8.5,
      "appliedDate": "2024-09-15"
    },
    {
      "candidateName": "Bob Smith",
      "jobName": "Data Scientist",
      "rating": 7.2,
      "appliedDate": "2024-09-12"
    },
    {
      "candidateName": "Charlie Brown",
      "jobName": "Product Manager",
      "rating": 9.0,
      "appliedDate": "2024-09-10"
    },
    {
      "candidateName": "David Lee",
      "jobName": "UX/UI Designer",
      "rating": 6.8,
      "appliedDate": "2024-09-05"
    },
    {
      "candidateName": "Eva Garcia",
      "jobName": "Marketing Specialist",
      "rating": 7.5,
      "appliedDate": "2024-08-30"
    }
  ];

const jobPosting = [
    {
        "jobTitle": "Private Equity - Associate",
        "metrics": [
            { "label": "Applied", "value": 80 },
            { "label": "Phone Screen", "value": 45 },
            { "label": "On-site", "value": 20 },
            { "label": "Offer", "value": 5 }
        ]
    },
    {
        "jobTitle": "Software Engineer - Backend",
        "metrics": [
            { "label": "Applied", "value": 150 },
            { "label": "Phone Screen", "value": 90 },
            { "label": "On-site", "value": 30 },
            { "label": "Offer", "value": 10 }
        ]
    },
    {
        "jobTitle": "Data Scientist",
        "metrics": [
            { "label": "Applied", "value": 60 },
            { "label": "Phone Screen", "value": 35 },
            { "label": "On-site", "value": 15 },
            { "label": "Offer", "value": 3 }
        ]
    },
];

module.exports = {
    summary,
    candidates,
    jobPosting
};
