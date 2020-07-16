import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  function leaveFeedback(e) {
    // onLeaveFeedback(e.target.name);

    // =============

    const newObj = {
      ...options,
      [e.target.name]: options[e.target.name] + 1,
    };

    onLeaveFeedback(newObj);
  }

  return (
    <div>
      <div>
        <button type="button" onClick={leaveFeedback} name="good">
          Good
        </button>
        <button type="button" onClick={leaveFeedback} name="neutral">
          Neutral
        </button>
        <button type="button" onClick={leaveFeedback} name="bad">
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
