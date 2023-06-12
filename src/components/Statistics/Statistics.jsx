export const Statistics = props => {
  const { good, neutral, bad, total, positive } = props;
  return (
    <section>
      <h3>Statistics</h3>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {Math.round(positive)}%</p>
        </div>
      )}
    </section>
  );
};
