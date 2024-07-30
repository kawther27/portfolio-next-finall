// components/ProtectedRouteClient.js
"use client";

"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const ProtectedRouteClient = ({ children }) => {
  const user = useSelector(state => state.auth.currentUser);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <Spinner />;
  }

  return children;
};

export default ProtectedRouteClient;

