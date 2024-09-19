import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './JobMetricsChart.scss';
import { fetchJobPostingDetails } from '../../Utility/Action';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const JobMetricsChart = () => {

    const [jobPostingData, setJobPostingData] = useState([]);
    const categories = ['Applied', 'Phone Screen', 'On-site', 'Offer'];  // Category labels

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

    const labels = jobPostingData.map(job => job.jobTitle);  // Job titles as labels

    const chartData = {
        labels, // Display job titles on Y-axis (horizontal chart)
        datasets: categories.map((category, categoryIndex) => ({
            label: category,
            data: jobPostingData.map(job => job.metrics[categoryIndex].value),
            backgroundColor: ['#6a5dd7', '#5db3f1', '#3ed4c8', '#ff9a6f'][categoryIndex],  // Colors for each metric
            borderWidth: 1,
            barThickness: 10,
        })),
    };

    const options = {
        indexAxis: 'y', // Horizontal bar chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 15,
                    font: {
                        size: 12,
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, // Adjust the step size for the X-axis
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 10,
                    },
                },
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
