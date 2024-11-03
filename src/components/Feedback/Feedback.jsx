import PropTypes from "prop-types";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
  <div>
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total Feedback: {totalFeedback}</li>
      <li>Positive Feedback: {positiveFeedback}%</li>
    </ul>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
