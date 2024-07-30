export const ADD_TESTIMONIAL = 'ADD_TESTIMONIAL';
export const UPDATE_TESTIMONIAL = 'UPDATE_TESTIMONIAL';

export const addTestimonial = (testimonial) => ({
  type: ADD_TESTIMONIAL,
  payload: testimonial,
});

export const updateTestimonial = (updatedTestimonial) => ({
  type: UPDATE_TESTIMONIAL,
  payload: updatedTestimonial,
});

// Exemple de témoignages par défaut
export const defaultTestimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO at Company",
    quote: "This is a fantastic service that has improved our workflow dramatically!",
    // img: "/images/user1.jpeg" 
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO at Another Company",
    quote: "I highly recommend this to everyone. It's absolutely amazing!",
    // img: "/images/user2.jpeg" 
  },
  {
    id: 3,
    name: "Anna Wilson",
    title: "Developer at Tech Corp",
    quote: "A game-changer for our team. We've seen significant improvements.",
    // img: "/images/user3.jpeg"
  }
];

