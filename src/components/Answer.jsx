/* eslint-disable react/prop-types */
import styles from "../style/Answer.module.css";
import { useState } from "react";

export default function Answer({
  title,
  optionIdx,
  putAnswer,
  idx,
  qna,
  results,
}) {
  const [isChecked, setIsChecked] = useState(
    qna[idx].options[optionIdx].checked
  );

  console.log(results);

  const handleClick = (event) => {
    //alert(`The correct answer is ${answerKey}`);
    event.preventDefault();
    if (results) return;
    // console.log(`ok`);
    putAnswer(idx, optionIdx); // put the answer to the state for the quiz
    setIsChecked((prev) => !prev);
  };

  var color = null;
  if (results) {
    if (results[idx].options[optionIdx].correct)
      color = { backgroundColor: "var(--successGreen)" };
    else if (qna[idx].options[optionIdx].checked)
      color = { backgroundColor: "var(--dangerRed)" };
  }

  return (
    <>
      <label className={styles.answer} style={color} onClick={handleClick}>
        <input type="checkbox" checked={isChecked} readOnly />
        {title}
      </label>
    </>
  );
}

// export default function Answer({ title }) {
//   return (
//     <button className={styles.answer} id="option1">
//       <input type="checkbox" />
//       {title}
//     </button>
//   );
// }
