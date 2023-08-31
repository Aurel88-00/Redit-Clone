import { useParams, Outlet } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { Comments } from "./Comments";
import { GenericLoader } from "../common/Loader";
import { ErrorMsg } from "../common/ErrorMsg";
import { NoData } from "../common/NoData";

export function PostDetails() {
  const { subredditId, postId } = useParams();

  const { singlePostData, singlePostError, singlePostIsLoading } = usePost(
    subredditId + "",
    postId + ""
  );

  const renderPost = () => {
    if (singlePostIsLoading) {
      return <GenericLoader componentName="Post" />;
    }
    if (singlePostError) {
      return <ErrorMsg />;
    }
    if (singlePostData.length === 0) {
      return <NoData />;
    }

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="post-container"
            style={{
              opacity: "0.8",
              minHeight: "160px",
              padding: "0.8rem",
              cursor: "pointer",
              margin: "0.4rem",
              maxWidth: "400px",
            }}
          >
            <div>
              <div className="post-title" style={{ fontStyle: 'italic'}}>
                <h4>{singlePostData?.title}</h4>
              </div>
              <div
                className="post-tags"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "0.4rem",
                }}
              >
                {singlePostData?.tags?.map((tag: string, index: number) => {
                  return (
                    <h5 key={tag[index]} style={{ margin: "0.2rem" }}>
                      {tag}
                    </h5>
                  );
                })}
              </div>
              <div className="post-body">{singlePostData?.body}</div>
            </div>
          </div>
        </div>
        <Comments comments={singlePostData?.comments} />
      </>
    );
  };
  return renderPost();
}
