import PropTypes from "prop-types";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
  <div>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total Feedback: {totalFeedback}</p>
    <p>Positive Feedback: {positiveFeedback}%</p>
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
