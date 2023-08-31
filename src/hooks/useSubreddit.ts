import { useFetchSubredditByIdQuery } from "../state/services/subredditApi";

export const useSubreddit = (id: string) => {
  const {
    data: singleSubredditData,
    error: singleSubredditError,
    isLoading: singleSubredditIsLoading,
  } = useFetchSubredditByIdQuery(id);

  return {
    singleSubredditData,
    singleSubredditError,
    singleSubredditIsLoading,
  };
};
