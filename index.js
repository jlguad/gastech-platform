'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://YOUR-BACKEND-URL.com/')  // Replace with your backend API URL
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Error connecting to API'));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Gas Tech Match</h1>
      <p>{status}</p>
    </main>
  );
}
