import Answer from "../components/Answer";
import styles from "../style/Result.module.css";

// eslint-disable-next-line react/prop-types
export default function Result({ title, idx, qna, results }) {
  return (
    <>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {title}
      </div>

      <div className={styles.Answers}>
        {
          // eslint-disable-next-line  react/prop-types
          qna[idx].options.map((option, index) => (
            <Answer
              key={index}
              title={option.title}
              idx={idx}
              qna={qna}
              results={results}
              optionIdx={index}
            />
          ))
        }
      </div>
    </>
  );
}
