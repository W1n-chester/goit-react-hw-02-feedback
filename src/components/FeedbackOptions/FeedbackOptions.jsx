import { Div, FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onFeedback }) => {
  return (
    <Div>
      <FeedbackButton type="button" name="good" onClick={onFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" name="neutral" onClick={onFeedback}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" name="bad" onClick={onFeedback}>
        Bad
      </FeedbackButton>
    </Div>
  );
};
