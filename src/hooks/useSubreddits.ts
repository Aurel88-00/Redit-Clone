import { useFetchSubredditsQuery, useLazyFetchSubredditsQuery } from "../state/services/subredditApi";

export const useSubreddits = () => {
  const [fetchSubreddits, {
    data: subRedditData,
    isLoading: subRedditLoading,
    error: subRedditError,
  }] = useLazyFetchSubredditsQuery();

  return { fetchSubreddits, subRedditData, subRedditLoading, subRedditError };
};
