import axios from "axios";

export const fetchLatestCandidateDetails = async () => {
    const response = await axios.get('https://job-management-api.onrender.com/api/candidates/latest');
    console.log("nish response.data", response)
    return response.data;
}

export const fetchJobDetails = async () => {
    const response = await axios.get('https://job-management-api.onrender.com/api/dashboard/summary');
    console.log("nish response.data", response.data)
    return response.data;
}

export const fetchJobPostingDetails = async () => {
    const response = await axios.get('https://job-management-api.onrender.com/api/jobs/postings');
    console.log("nish response.data11", response.data)
    return response.data;
}