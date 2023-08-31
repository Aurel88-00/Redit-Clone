import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://64e9dddebf99bdcc8e670ab1.mockapi.io/api/v1",
});

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: ( params : {subredditId: string | any , page?: number , limit?:number , sortBy?: string} ) =>
        `/subreddits/${params.subredditId}/posts?page=${params.page}&limit=${params.limit}&sortBy=${params.sortBy}`,
      providesTags: ["Posts"],
    }),
    fetchPostById: builder.query({
      query: (payload: { subredditId: string; postId: string }) =>
        `/subreddits/${payload.subredditId}/posts/${payload.postId}`,
    }),
    
  }),
});

export const { useFetchPostByIdQuery, useFetchPostsQuery , useLazyFetchPostsQuery} = postApi;
