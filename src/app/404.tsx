// pages/404.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return <h1>404 - Page Not Found. Redirecting to Homepage...</h1>;
}