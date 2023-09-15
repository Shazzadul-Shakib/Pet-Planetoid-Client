import { useQuery } from "react-query";

const useCreatePost = () => {
  const { isLoading, data, refetch } = useQuery(
    "posts",
    async () =>
      await fetch(`http://localhost:5000/posts`).then((response) =>
        response.json()
      )
  );
  return [data, isLoading, refetch];
};

export default useCreatePost;
