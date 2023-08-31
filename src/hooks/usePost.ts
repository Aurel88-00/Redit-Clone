import { useFetchPostByIdQuery } from "../state/services/postApi";

export const usePost = (subredditId: string, postId: string) => {
  const {
    data: singlePostData,
    error: singlePostError,
    isLoading: singlePostIsLoading,
  } = useFetchPostByIdQuery({ subredditId, postId });

  return { singlePostData, singlePostError, singlePostIsLoading };
};
