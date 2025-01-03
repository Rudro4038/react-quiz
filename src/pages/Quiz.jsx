import { useEffect, useReducer, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import ProgressBar from "../components/ProgressBar";
import useQuiz from "../hooks/useQuiz";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "question":
      action.value.forEach((questions) => {
        questions.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      //console.log(action.value);
      action.value[action.idx].options[action.optionIdx].checked =
        !action.value[action.idx].options[action.optionIdx].checked;
      return action.value;
    default:
      return state;
  }
};

export default function Quiz() {
  const [idx, setIdx] = useState(0);

  const ID = useParams().youtubeID;
  const { quizs, loading, error } = useQuiz(ID);
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "question",
      value: quizs,
    });
    // console.log(qna);
  }, [quizs, qna]);

  const putAnswer = (idx, optionIdx) => {
    // console.log("ok");
    dispatch({
      type: "answer",
      value: qna,
      idx: idx,
      optionIdx: optionIdx,
    });
    // console.log(qna);
    // TODO: Save answer to the database or backend
    // TODO: Update progress bar
    // TODO: Check if the user answered correctly
    // TODO: If correct, move to the next question
    // TODO: If incorrect, show the correct answer and move to the next question
    // TODO: If all questions answered correctly, show a success message
    // TODO: If all questions answered incorrectly, show a failure message
    // TODO: If the user skips a question, move to the next question without answering it
    // TODO: If the user closes the quiz, save the final progress bar score to the database or backend
  };

  const navigate = useNavigate();
  function handleRightButton() {
    if (idx === quizs.length - 1) {
      console.log("result");
      console.log(qna);
      navigate(`/results/${ID}`, { replace: true, state: { qna } });

      return;
    }
    setIdx((prevIdx) => prevIdx + 1);
  }

  function handleLeftButton() {
    if (idx === 0) {
      alert("This is first question.");
      return;
    }
    setIdx((prevIdx) => prevIdx - 1);
  }

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error occurred</h1>}
      {!loading && qna && qna.length === 0 && <h1>No questions found</h1>}
      {!loading && qna && qna.length > 0 && (
        <>
          <h1>{qna[idx].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            key={idx}
            options={qna[idx].options}
            putAnswer={putAnswer}
            idx={idx}
            qna={qna}
          />
        </>
      )}
      <ProgressBar
        handleRightButton={handleRightButton}
        handleLeftButton={handleLeftButton}
        parcentage={(idx + 1) * (100 / quizs.length)}
      />
      {qna && qna.length && <MiniPlayer ID={ID} title={qna[idx].title} />}
    </div>
  );
}
