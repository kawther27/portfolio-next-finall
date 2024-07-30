import { ADD_TESTIMONIAL, UPDATE_TESTIMONIAL, 
    defaultTestimonials } 
    from '../actions/testimonialActions';

const initialState = {
  testimonials: defaultTestimonials
};

const testimonialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TESTIMONIAL:
      return {
        ...state,
        testimonials: [...state.testimonials, action.payload]
      };
    case UPDATE_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.map(testimonial => 
          testimonial.id === action.payload.id ? action.payload : testimonial
        )
      };
    default:
      return state;
  }
};

export default testimonialsReducer;
