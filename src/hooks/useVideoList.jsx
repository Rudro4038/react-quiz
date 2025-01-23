import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  startAt,
  limitToFirst,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Fetch video list from API
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          // console.log(videos);
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          console.log("No data available");
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page]);

  return { loading, error, videos, hasMore };
};

export default useVideoList;
