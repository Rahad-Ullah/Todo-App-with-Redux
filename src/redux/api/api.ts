import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: "/task",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => {
        console.log(todo);
        return {
          url: `/task/${todo.id}`,
          method: "PUT",
          body: todo.todo,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = baseApi;
