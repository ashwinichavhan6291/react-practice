import React from 'react';
import PropTypes from 'prop-types';

function Demo({ name, course }) {
  return (
    <>
      <h3>My Name is {name} and I am doing {course}</h3>
    </>
  );
}

Demo.propTypes = {
  name: PropTypes.string.isRequired, 
  course: PropTypes.string.isRequired
};

export default Demo;
