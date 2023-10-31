import { useQuery } from "react-query";

const useCreatePost = () => {
  const { isLoading, data, refetch } = useQuery(
    "posts",
    async () =>
      await fetch(`https://pet-planetoid-server.vercel.app/get-posts`).then(
        (response) => response.json()
      )
  );
  return [data, isLoading, refetch];
};

export default useCreatePost;
