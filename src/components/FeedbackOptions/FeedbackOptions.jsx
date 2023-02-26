import { Div, FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onGood, onNeutral, onBed }) => {
  return (
    <Div>
      <FeedbackButton type="button" onClick={onGood}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onNeutral}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onBed}>
        Bad
      </FeedbackButton>
    </Div>
  );
};
