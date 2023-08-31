import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { useState, useEffect } from "react";
import { Post } from "../../models/post.model";
import InfiniteScroll from "react-infinite-scroll-component";
import { GenericLoader } from "../common/Loader";
import { ErrorMsg } from "../common/ErrorMsg";
import { NoData } from "../common/NoData";

export function Posts() {
  const { subredditId } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("title");

  const { fetchPosts, postData, postError, postIsLoading } = usePosts();

  useEffect(() => {
    fetchPosts({ subredditId, page, limit, sortBy });
  }, [subredditId, page, limit, sortBy]);

  const renderPosts = () => {
    if (postIsLoading) {
      return <GenericLoader componentName="Posts" />;
    }
    if (postError) {
      return <ErrorMsg />;
    }
    if (postData?.length === 0) {
      return <NoData />;
    }

    return (
      <>
        <InfiniteScroll
          dataLength={postData?.length || 10}
          hasMore={true}
          next={() => setLimit(limit + 10)}
          loader={<div style={{ display: "none" }}>Posts loading...</div>}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}
        >
          {postData?.map((post: Post) => {
            return (
              <div
                className="post-container"
                style={{
                  borderRadius: "10px",
                  boxShadow: "5px 5px 5px #92bddf",
                  opacity: "0.8",
                  minHeight: "160px",
                  padding: "0.8rem",
                  cursor: "pointer",
                  margin: "0.4rem",
                }}
                onClick={() =>
                  navigate(`/subreddits/${subredditId}/posts/${post?.id}`)
                }
              >
                <div className="post-title" style={{margin: '0.3rem' ,fontStyle:'italic'}}>
                  <h4>{post?.title}</h4>
                </div>
                <div
                  className="post-tags"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin:'0.4rem'
                  }}
                >
                  {post?.tags?.map((tag: string, index: number) => {
                    return <h5 key={tag[index]} style={{margin: '0.2rem'}}>{tag}</h5>;
                  })}
                </div>
                <div className="post-body">{post?.body}</div>
              </div>
            );
          })}
        </InfiniteScroll>
      </>
    );
  };

  return renderPosts();
}
