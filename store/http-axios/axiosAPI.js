import axios from 'axios';

export const FETCH_TESTIMONIALS_REQUEST = 'FETCH_TESTIMONIALS_REQUEST';
export const FETCH_TESTIMONIALS_SUCCESS = 'FETCH_TESTIMONIALS_SUCCESS';
export const FETCH_TESTIMONIALS_FAILURE = 'FETCH_TESTIMONIALS_FAILURE';

export const ADD_TESTIMONIAL_SUCCESS = 'ADD_TESTIMONIAL_SUCCESS';
export const UPDATE_TESTIMONIAL_SUCCESS = 'UPDATE_TESTIMONIAL_SUCCESS';
export const DELETE_TESTIMONIAL_SUCCESS = 'DELETE_TESTIMONIAL_SUCCESS';

const fetchTestimonialsRequest = () => ({ type: FETCH_TESTIMONIALS_REQUEST });
const fetchTestimonialsSuccess = (testimonials) => ({ type: FETCH_TESTIMONIALS_SUCCESS, payload: testimonials });
const fetchTestimonialsFailure = (error) => ({ type: FETCH_TESTIMONIALS_FAILURE, payload: error });

const addTestimonialSuccess = (testimonial) => ({ type: ADD_TESTIMONIAL_SUCCESS, payload: testimonial });
const updateTestimonialSuccess = (testimonial) => ({ type: UPDATE_TESTIMONIAL_SUCCESS, payload: testimonial });
const deleteTestimonialSuccess = (id) => ({ type: DELETE_TESTIMONIAL_SUCCESS, payload: id });

export const fetchTestimonials = () => async (dispatch) => {
  dispatch(fetchTestimonialsRequest());
  try {
    const response = await axios.get('http://localhost:5000/api/testimonials');
    dispatch(fetchTestimonialsSuccess(response.data));
  } catch (error) {
    dispatch(fetchTestimonialsFailure(error.message));
  }
};

export const addTestimonial = (testimonial) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/testimonials', testimonial);
    dispatch(addTestimonialSuccess(response.data));
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTestimonial = (id, testimonial) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/testimonials/${id}`, testimonial);
    dispatch(updateTestimonialSuccess(response.data));
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
    dispatch(deleteTestimonialSuccess(id));
  } catch (error) {
    console.error(error.message);
  }
};


