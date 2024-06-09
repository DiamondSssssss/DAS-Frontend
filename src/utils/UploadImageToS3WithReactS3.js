import React, { useState } from 'react';
import s3 from './aws-config'; // Import your S3 configuration

const S3_BUCKET = 'your-bucket-name';
const REGION = 'your-region';

const UploadImage = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        setUploading(true);
        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
            ACL: 'public-read' // Adjust according to your needs
        };

        s3.upload(params, (err, data) => {
            setUploading(false);
            if (err) {
                console.log('Error uploading file:', err);
            } else {
                console.log('File uploaded successfully:', data.Location);
                onUploadSuccess(data.Location); // Pass the URL to the parent component or backend
            }
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file || uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default UploadImage;