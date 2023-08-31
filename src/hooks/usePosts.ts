import {
  useFetchPostsQuery,
  useLazyFetchPostsQuery,
} from "../state/services/postApi";

export const usePosts = () => {
  const [
    fetchPosts,
    { data: postData, error: postError, isLoading: postIsLoading },
  ] = useLazyFetchPostsQuery();

  return { fetchPosts, postData, postError, postIsLoading };
};
