import React from 'react';
import JobForm from '../components/JobForm';
import axios from 'axios';

const apiPath = 'https://fair-gold-termite-sock.cyclic.app/api/v1/'

function CreateJob(props) {
    const handleCreateJob = async (file) => {
        const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${apiPath}jobs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    //   setUploadStatus('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
    //   setUploadStatus('File upload failed.');
    }
      };
    return (
        <div className="items-center justify-center flex flex-col mx-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Create a New Job Posting</h2>
        <JobForm onSubmit={handleCreateJob} />
      </div>
    );
}

export default CreateJob;