// components/ProtectedRoute.js
import dynamic from 'next/dynamic';

const ProtectedRouteClient = dynamic(() => import('./ProtectedRouteClient'), {
  ssr: false,
});

const ProtectedRoute = ({ children }) => {
  return (
    <ProtectedRouteClient>
      {children}
    </ProtectedRouteClient>
  );
};

export default ProtectedRoute;
