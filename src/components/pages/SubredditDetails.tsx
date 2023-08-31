import { useParams, Outlet } from "react-router-dom";
import { useSubreddit } from "../../hooks/useSubreddit";
import { SubredditCard } from "../common/SubredditCard";
import { Posts } from "./Posts";
import { GenericLoader } from "../common/Loader";
import { ErrorMsg } from "../common/ErrorMsg";
import { NoData } from "../common/NoData";

export function SubredditDetails() {
  const { subredditId } = useParams();
  const {
    singleSubredditData,
    singleSubredditError,
    singleSubredditIsLoading,
  } = useSubreddit(subredditId + "");

  if (singleSubredditIsLoading) {
    return <GenericLoader componentName="Subreddit Details" />;
  }

  if (singleSubredditError) {
    return <ErrorMsg />;
  }

  if (singleSubredditData.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <div style={{ margin: "0.8rem" }}>
        <div  style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <SubredditCard subreddit={singleSubredditData} isIndividual={true} />
        </div>
        <Posts />
      </div>
    </>
  );
}
