import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

export default function useQuiz(ID) {
  const [quizs, setQuizs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data from API or local storage
  useEffect(() => {
    async function fetchQuiz() {
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${ID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          // console.log(videos);
          setQuizs((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          console.log("No data available");
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuiz();
  }, []);

  return { quizs, loading, error };
}
