import React, { useEffect, useState } from 'react';
import './BodyContainer.scss';
import { Typography, Card, CardContent, IconButton } from '@mui/material';
import { fetchJobDetails } from '../../Utility/Action';
import jobBoardImage from '../../Assets/JobBoard.png';
import ApplicationsPieChart from '../PisChart/ApplicationsPieChart';
import { BusinessCenterOutlined, PeopleAltOutlined, LocalActivityOutlined } from '@mui/icons-material';
import LatestCandidatesSection from '../LatestCandidate/LatestCandidateTable';
import JobMetricsChart from '../JobMetricsBarGraph/JobMetricsChart';

function BodyContainer() {
  const [jobData, setJobData] = useState([]);

  const fetchJobData = async () => {
    try {
      const jobDataResponse = await fetchJobDetails();
      setJobData(jobDataResponse); // Update the result with the response data
    } catch (e) {
      console.log('Error fetching quiz data:', e);
    }
  }

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div className='body-container'>
      <div className='body-back'>
        <h4 className='main-title heading'>Welcome back, Lewis</h4>
        <div className='main-title desc'>Here's whats changed in your talent hunt journey!</div>
        <div className='main-title desc'>You can evaluate candidates, attract job seekers, and redefine the candidate experience for a new era of your workspace from here</div>
        <div className='main-body-container'>
          <div className='jobs-status'>
            <Card className='main-card-job-details main'>
              <div>
                <div className='jobs-count-main'>
                  <IconButton className='icon-Button'><BusinessCenterOutlined /></IconButton>
                  <h1 className='count'>{jobData.totalJobs}</h1>
                </div>
                <div className='total-jobs'>Total Jobs</div>
              </div>
              <div>
                <div className='jobs-count-main'>
                  <IconButton className='icon-Button people-icon'><PeopleAltOutlined /></IconButton>
                  <h1 className='count'>{jobData.totalApplicants}</h1>
                </div>
                <div className='total-jobs'>Applicants</div>
              </div>
            </Card>
            <Card className='main-card-job-details'>
              <div>
                <div className='jobs-count-main'>
                  <IconButton className='icon-Button ai-credit-icon'><LocalActivityOutlined /></IconButton>
                  <h1 className='count'>{jobData.aiCredits}</h1>
                </div>
                <div className='total-jobs'>AI Credits</div>
              </div>
            </Card>
          </div>
          <div className='applicants'>
            <Card className='main-card-job-details pie'>
              <CardContent>
                <ApplicationsPieChart totalApplications={jobData.totalApplicants} notRreviewedApplications={jobData.notReviewedApplicants} />
              </CardContent>
            </Card>
          </div>
          <div className='job-board'>
            <Card className='job-board-card'>
              <CardContent>
                <Typography><img className='job-board-image' alt="private-job-board" src={jobBoardImage} /></Typography>
                <Typography className='title'>Private Job Board</Typography>
                <Typography className='description'>Your private job postings will appear here, accessible to the public via a company-specific URL.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className='candidate-details-container'>
        <Card className='table-chart'>
          <CardContent>
            <Typography className='latest-candidate'>Latest Candidates</Typography>
            <LatestCandidatesSection/>
          </CardContent>
        </Card>

        {/* Job Postings Bar Graph */}
        <Card className='table-chart bar-graph'>
          <CardContent>
            <Typography className='latest-candidate'>Your Job Postings</Typography>
            <JobMetricsChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BodyContainer;
