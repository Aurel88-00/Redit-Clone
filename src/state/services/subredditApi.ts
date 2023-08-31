import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://64e9dddebf99bdcc8e670ab1.mockapi.io/api/v1",
});

export const subredditApi = createApi({
  reducerPath: "subredditApi",
  baseQuery,
  tagTypes: ["Subreddits"],
  endpoints: (builder) => ({
    fetchSubreddits: builder.query({
      query: (params : { page?: number , limit?:number , sortBy?: string}) =>
        `/subreddits?page=${params.page}&limit=${params.limit}&sortBy=${params.sortBy}`,
      providesTags: ["Subreddits"],
    }),
    fetchSubredditById: builder.query({
      query: (id: string) => `/subreddits/${id}`,
    }),
  }),
});

export const { useFetchSubredditByIdQuery, useFetchSubredditsQuery, useLazyFetchSubredditsQuery } =
  subredditApi;
