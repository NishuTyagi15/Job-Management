import React, { useEffect, useState } from 'react';
import './BodyContainer.scss';
import { Typography, Card, CardContent } from '@mui/material';
// import { Bar } from 'react-chartjs-2';
import { fetchLatestCandidateDetails, fetchJobDetails, fetchJobPostingDetails } from '../../Utility/Action';
import jobBoardImage from '../../Assets/JobBoard.png';
import ApplicationsPieChart from '../PisChart/ApplicationsPieChart';

function BodyContainer() {
  const [tableData, setTableData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [jobPostingData, setJobPostingData] = useState([]);

  const fetchUserTableData = async () => {
    try {
      const tableDataResponse = await fetchLatestCandidateDetails();
      setTableData(tableDataResponse); // Update the result with the response data
    } catch (e) {
      console.log('Error fetching quiz data:', e);
    }
  }

  const fetchJobData = async () => {
    try {
      const jobDataResponse = await fetchJobDetails();
      setJobData(jobDataResponse); // Update the result with the response data
    } catch (e) {
      console.log('Error fetching quiz data:', e);
    }
  }

  const fetchJobPostingData = async () => {
    try {
      const jobPostingResponse = await fetchJobPostingDetails();
      setJobPostingData(jobPostingResponse); // Update the result with the response data
    } catch (e) {
      console.log('Error fetching quiz data:', e);
    }
  }

  useEffect(() => {
    fetchUserTableData();
    fetchJobData();
    fetchJobPostingData();
  }, []);

  return (
    <div className='body-container'>
      <div className='body-back'>
        <h4 className='main-title heading'>Welcome back, Lewis</h4>
        <div className='main-title desc'>Here's whats changed in your talent hunt journey!</div>
        <div className='main-title desc'>You can evaluate candidates, attract job seekers, and redefine the candidate experience for a new era of your workspace from here</div>
        <div className='main-body-container'>
          <div>
            <Card className='main-card-job-details'>
              <CardContent className='job-card'>
                <Typography variant="h6">Total Jobs</Typography>
                <Typography variant="h4">{jobData.totalJobs}</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6">Applicants</Typography>
                <Typography variant="h4">{jobData.totalApplicants}</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">AI Credits</Typography>
                <Typography variant="h4">{jobData.aiCredits}</Typography>
              </CardContent>
            </Card>
          </div>
          <div className='applicants'>
            <Card>
              <CardContent>
                <ApplicationsPieChart totalApplications={jobData.totalApplicants} notRreviewedApplications={jobData.notReviewedApplicants}/>
              </CardContent>
            </Card>
          </div>
          <div className='job-board'>
            <Card className='job-board-card'>
              <CardContent>
                <Typography><img className='job-board-image' alt="private-job-board" src={jobBoardImage}/></Typography>
                <Typography className='title'>Private Job Board</Typography>
                <Typography className='description'>Your private job postings will appear here, accessible to the public via a company-specific URL.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Latest Candidates Table */}
      <div className='candidate-details-container'>
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6">Latest Candidates</Typography>
          <table className="candidate-table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Job Name</th>
                <th>Rating</th>
                <th>Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.candidateName}</td>
                  <td>{candidate.jobName}</td>
                  <td>{candidate.rating}</td>
                  <td>{candidate.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Job Postings Bar Graph */}
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h6">Your Job Postings</Typography>
          {/* <Bar
            data={{
              labels: ['Private Equity-Associate', 'Analyst', 'Manager'],
              datasets: [
                {
                  label: 'Job Postings',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                  data: data.jobStats
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true }
              }
            }}
            height={250}
          /> */}
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default BodyContainer;
