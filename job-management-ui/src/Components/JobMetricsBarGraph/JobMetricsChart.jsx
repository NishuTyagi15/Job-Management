import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './JobMetricsChart.scss';
import { fetchJobPostingDetails } from '../../Utility/Action';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const JobMetricsChart = ({ jobMetrics }) => {

    const [jobPostingData, setJobPostingData] = useState([]);
    const labels = ['Applied', 'Phone Screen', 'On-site', 'Offer'];

    const fetchJobPostingData = async () => {
        try {
          const jobPostingResponse = await fetchJobPostingDetails();
          setJobPostingData(jobPostingResponse); // Update the result with the response data
        } catch (e) {
          console.log('Error fetching quiz data:', e);
        }
    }

    useEffect(() => {
        fetchJobPostingData();
    }, []);

    const chartData = {
        labels,
        datasets: jobPostingData.map((job, index) => ({
            label: job.jobTitle,
            data: job.metrics.map(metric => metric.value),
            backgroundColor: [
                '#735ce5', // Customize for each job title
                '#5ad0c9',
                '#49a1f5'
            ][index],
            borderWidth: 1,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Your Job Postings',
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true,
            },
        },
    };

    return (
        <div className="job-metrics-chart">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default JobMetricsChart;
