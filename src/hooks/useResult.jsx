import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

// change
// change 2
const useResult = (ID) => {
  const [results, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //   console.log(ID);

  useEffect(() => {
    const fetchResult = async () => {
      const db = getDatabase();
      const resultRef = ref(db, `answers/${ID}/questions`);
      const resultQuery = query(resultRef, orderByKey());
      //   console.log(resultQuery);

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(resultQuery);
        setLoading(false);
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          // console.log(videos);
          setResult((prevVideos) => {
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
    };

    fetchResult();
  }, []);

  return { results, error, loading };
};

export default useResult;
