import React from 'react';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button onClick={options.good}>Good</button>
      <button onClick={options.neutral}>Neutral</button>
      <button onClick={options.bad}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
