import { Div, StatisticsTitle } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const totalPositive = Math.round((good / total) * 100);
  return (
    <Div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{totalPositive}%</p>
    </Div>
  );
};
