import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constant";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/v1/` }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserRepos: builder.query({
      query: () => ({
        url: "repos",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
  }),
});

export default api;
export const { useGetUserReposQuery } = api;
