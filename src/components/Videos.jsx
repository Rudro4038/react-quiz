import useVideoList from "../hooks/useVideoList";
import styles from "../style/Videos.module.css";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function Videos() {
  const [page, setPage] = useState(0);

  const { loading, error, videos, hasMore } = useVideoList(page);

  // console.log(videos.length);
  // console.log(videos);

  //console.log(videos[0].youtubeID);
  // for (var x in videos) console.log(videos[x].youtubeID);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className={styles.videos}
          style={{ sidebar: "none" }}
          dataLength={videos.length} //This is important field to render the next data
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </InfiniteScroll>
      )}

      {videos.lenght == 0 && !loading && <div className="error">No videos</div>}
      {error && <div className="error">There is an error.</div>}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}
