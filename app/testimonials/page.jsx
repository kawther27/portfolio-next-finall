// pages/testimonials.js
import ProtectedRoute from '../components/ProtectedRoute';
import TestimonialsClient from './TestimonialsClient';

const TestimonialsPage = () => (
  <ProtectedRoute>
    <TestimonialsClient />
  </ProtectedRoute>
);

export default TestimonialsPage;

