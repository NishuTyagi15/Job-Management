import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'; // Assuming you're using Material-UI's DataGrid

function LatestCandidatesSection() {
    const [candidatesData, setCandidatesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/candidates/latest')
            .then(response => {
                setCandidatesData(response.data);
            })
            .catch(error => {
                console.error('Error fetching candidates data:', error);
                // Handle error gracefully
            });
    }, []);

    const columns = [
        { field: 'candidateName', headerName: 'Candidate Name', width: 200 },
        { field: 'jobName', headerName: 'Applied Job', width: 300 },
        { field: 'rating', headerName: 'Rating', width: 100, type: 'number' },
        { 
            field: 'appliedDate', 
            headerName: 'Applied Date', 
            width: 150, 
            type: 'date',
            valueGetter: (params) => new Date(params.row.appliedDate) 
        }
    ];

    return (
        <div className="latest-candidates-section">
            <h2>Latest Candidates</h2>

            {candidatesData.length > 0 ? (
                <div style={{ height: 400, width: '100%' }}> 
                    <DataGrid
                        rows={candidatesData}
                        columns={columns}
                        pageSize={5} // Adjust as needed
                        rowsPerPageOptions={[5, 10, 20]}
                    />
                </div>
            ) : (
                <p>Loading candidates data...</p>
            )}
        </div>
    );
}

export default LatestCandidatesSection;