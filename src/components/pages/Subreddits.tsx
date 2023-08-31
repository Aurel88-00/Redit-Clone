import { useEffect, useState } from "react";
import { useSubreddits } from "../../hooks/useSubreddits";
import { Subreddit } from "../../models/subreddit.model";
import { SubredditCard } from "../common/SubredditCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { GenericLoader } from "../common/Loader";
import { ErrorMsg } from "../common/ErrorMsg";
import { NoData } from "../common/NoData";

export function Subreddits() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("name");
  const { fetchSubreddits, subRedditData, subRedditLoading, subRedditError } =
    useSubreddits();

  useEffect(() => {
    fetchSubreddits({ page, limit, sortBy });
  }, [page, limit, sortBy]);

  const renderSubreddits = () => {
    if (subRedditLoading) {
      return <GenericLoader  componentName="Subreddits"/>;
    }
    if (subRedditError) {
      return <ErrorMsg/>;
    }
    if (subRedditData?.length === 0) {
      return <NoData/>;
    }

    return (
      <>
        <div style={{
          margin: '0.8rem'
        }}>
        <InfiniteScroll
          dataLength={subRedditData?.length | 10}
          next={() => setLimit(limit + 10)}
          hasMore={true}
          loader={<div style={{display: 'none'}}>Subreddits loading...</div>}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px',
          }}
        >
          {subRedditData?.map((subreddit: Subreddit) => {
            return <SubredditCard key={subreddit.id} subreddit={subreddit} isIndividual={false} />;
          })}
        </InfiniteScroll>
        </div>
        
      </>
    );
  };
  return renderSubreddits();
}
