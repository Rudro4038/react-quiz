import successImage from "../assets/images/success.png";
import Illustration from "../components/Illustration";
import Result from "../components/Result";
import styles from "../style/Results.module.css";
import useResult from "../hooks/useResult";
import { useParams, useLocation } from "react-router-dom";

export default function Results() {
  const ID = useParams().youtubeID;
  //console.log(ID);
  const { results, loading, error } = useResult(ID);

  console.log(results);

  const location = useLocation();
  const { qna } = location.state || {};
  console.log(qna);

  const totalQuestions = qna?.length;

  // correct the number of questions
  var correctQuestions = 0;
  for (var i = 0; i < totalQuestions && i < results?.length; i++) {
    correctQuestions++;
    for (var j = 0; j < qna[i].options.length; j++) {
      if (qna[i].options[j].checked && results[i].options[j].correct) {
        console.log("checked");
      } else if (qna[i].options[j].checked | results[i].options[j].correct) {
        correctQuestions--;
        break;
      }
    }
  }

  // not attemped number of questions
  var notAttemptQuestions = 0;
  for (let i = 0; i < totalQuestions; i++) {
    notAttemptQuestions++;
    for (let j = 0; j < qna[i].options.length; j++) {
      if (qna[i].options[j].checked) {
        notAttemptQuestions--;
        break;
      }
    }
  }

  const wrongQuestions =
    totalQuestions - correctQuestions - notAttemptQuestions;

  console.log(totalQuestions);
  console.log(correctQuestions);
  console.log(notAttemptQuestions);
  console.log(wrongQuestions);

  return (
    <>
      {loading && <div className={styles.loading}>Loading...</div>}
      {error && <div className={styles.error}>An error occured</div>}

      {results?.length > 0 && (
        <>
          <div className={styles.container}>
            <div className={styles.Left}>
              <h2>
                Your score is <br /> {loading ? "..." : correctQuestions * 5}{" "}
                out of {totalQuestions * 5}.
              </h2>
            </div>
            <div className={styles.Right}>
              <Illustration Image={successImage} />
            </div>
          </div>
          <h2 className={styles.h2}>Question Analysis</h2>
          <h4 className={styles.h4}>
            You answered {totalQuestions - notAttemptQuestions} question out of
            {" " + totalQuestions} question.
          </h4>
          <hr className={styles.hr} />
          {qna.map((question, index) => (
            <Result
              key={index}
              title={question.title}
              idx={index}
              qna={qna}
              results={results}
            />
          ))}
        </>
      )}
    </>
  );
}
