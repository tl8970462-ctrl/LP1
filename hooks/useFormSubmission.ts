'use client';

import { useState } from 'react';
import { isValidEmail } from '@/lib/validation';

export const useFormSubmission = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      setSuccess(true);
      setEmail('');
      setLoading(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 500);
  };

  return {
    email,
    setEmail,
    loading,
    error,
    success,
    handleSubmit,
  };
};
