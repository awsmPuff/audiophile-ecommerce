import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Back() {
    const navigate = useNavigate()
  return (
    <p className="back" onClick={() => navigate(-1)}>
      Go Back
    </p>
  );
}
