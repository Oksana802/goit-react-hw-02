import s from "./Options.module.css";
import PropTypes from "prop-types";
const Options = ({
  feedback,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => (
  <div className={s.box}>
    {Object.keys(feedback).map((option) => (
      <button key={option} onClick={() => updateFeedback(option)}>
        {option}
      </button>
    ))}
    {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
  </div>
);

Options.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
