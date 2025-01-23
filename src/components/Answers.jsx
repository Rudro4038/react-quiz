import styles from "../style/Answers.module.css";
import Answer from "./Answer";

// eslint-disable-next-line react/prop-types
export default function Answers({ options, putAnswer, idx, qna }) {
  // console.log(options);
  return (
    <>
      <div className={styles.Answers}>
        {
          // eslint-disable-next-line react/prop-types
          options.map((element, index) => (
            <Answer
              key={index}
              title={element.title}
              optionIdx={index}
              idx={idx}
              putAnswer={putAnswer}
              qna={qna}
            />
          ))
        }
      </div>
    </>
  );
}
