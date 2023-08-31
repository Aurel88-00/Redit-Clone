import { FC } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../models/comment.model";

type CommentsProps = {
  comments: Comment[];
  children?: React.ReactNode;
};

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          margin: "0.5rem",
        }}
      >
        <div
          className="comment-container"
          style={{
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #5296dd",
            opacity: "0.8",
            minHeight: "220px",
            maxWidth: "200px",
            padding: "1rem",
            cursor: "pointer",
            margin: "0.4rem",
          }}
        >
          {comments?.map((comment: Comment) => (
            <>
              <div className="comment-user" style={{ fontStyle: 'italic'}}>
                <h4>{comment?.user}</h4>
              </div>
              <div className="comment-body">
                <div>{comment?.body}</div>
              </div>
              <div
                className="lower-section"
                style={{
                  display: "flex",
                  margin: "0.5rem",
                  justifyContent: " flex-end",
                }}
              >
                <div
                  className="upvotes"
                  style={{ margin: " 0 0.3rem", color: "#ff6314" }}
                >
                  upvotes: {comment?.upvotes}
                </div>
                <div className="shares" style={{ color: "#d7d7d7" }}>
                  shares: {comment?.shares}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
