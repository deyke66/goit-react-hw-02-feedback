import style from './FeedbackOptions.module.css'

export const FeedbackOptions = props => {
  const { onLeaveFeedback } = props;
  return (
    <section>
      <h2>Please leave feedback</h2>
      <div>
              <button className={style.btn} type="button" id="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button className={style.btn} type="button" id="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className={style.btn} type="button" id="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </section>
  );
};
