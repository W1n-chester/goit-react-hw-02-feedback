import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { SectionReviews, TitleReviews } from './Section.styled';
export const Section = ({ onFeedback, good, neutral, bad }) => {
  return (
    <SectionReviews>
      <TitleReviews>Please leave feedback</TitleReviews>
      <FeedbackOptions onFeedback={onFeedback} />
      {good + neutral + bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <NotificationMessage />
      )}
    </SectionReviews>
  );
};
Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
