import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Using createAPI from reduxjs toolkit query to allow us to make endpoints to call our backend and grab data from our backend
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
      getKpis: build.query<void, void>({
        query: () => "kpi/kpis/",
        providesTags: ["Kpis"],
      }),
    }),
});

export const { useGetKpisQuery } = api;