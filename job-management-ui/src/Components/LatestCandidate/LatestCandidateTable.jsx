import React, { useState, useEffect } from 'react';
import { fetchLatestCandidateDetails } from '../../Utility/Action';

function LatestCandidatesSection() {
    const [candidatesData, setCandidatesData] = useState([]);

    const fetchUserTableData = async () => {
        try {
            const tableDataResponse = await fetchLatestCandidateDetails();
            setCandidatesData(tableDataResponse); // Update the result with the response data
        } catch (e) {
            console.log('Error fetching quiz data:', e);
        }
    }

    useEffect(() => {
        fetchUserTableData();
    }, []);

    return (
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
                {candidatesData?.map((candidate, index) => (
                    <tr key={index}>
                        <td>{candidate.candidateName}</td>
                        <td>{candidate.jobName}</td>
                        <td>{candidate.rating}</td>
                        <td>{candidate.appliedDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default LatestCandidatesSection;