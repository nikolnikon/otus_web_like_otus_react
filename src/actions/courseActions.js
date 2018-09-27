export const FETCH_COURSES_BEGIN   = 'FETCH_COURSES_BEGIN';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES_BEGIN
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses }
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: { error }
});

export function fetchCourses(url) {
  return dispatch => {
    dispatch(fetchCoursesBegin());
    return fetch(`${url}/api/courses/`)
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchCoursesSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchCoursesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
