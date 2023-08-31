import { FC } from "react";
import { Subreddit } from "../../models/subreddit.model";
import { useNavigate } from "react-router-dom";

type SubredditCardProps = {
  subreddit: Subreddit;
  children?: React.ReactNode;
  isIndividual?: boolean;
};

export const SubredditCard: FC<SubredditCardProps> = ({
  subreddit,
  isIndividual,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container"
        style={
          isIndividual === false
            ? {
                borderRadius: "10px",
                boxShadow: "5px 5px 5px #d7d7d7",
                opacity: "0.8",
                minHeight: "160px",
                padding: "0.8rem",
                cursor: "pointer",
                margin: "0.4rem",
              }
            : {
                opacity: "0.8",
                minHeight: "160px",
                maxWidth: '400px',
                padding: "0.8rem",
                margin: "1rem",
              }
        }
        onClick={
          isIndividual === true
            ? () => {}
            : () => navigate(`/subreddits/${subreddit?.id}`)
        }
      >
        <div className="name">
          <h4 style={{ fontStyle: "italic" }}>{subreddit?.name}</h4>
        </div>
        <div className="description">
          <div>{subreddit?.description}</div>
        </div>
      </div>
    </>
  );
};
