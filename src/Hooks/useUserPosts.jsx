import { useQuery } from "react-query";

const useUserPosts = (email) => {
  const { isLoading, data, refetch } = useQuery(
    ["userPosts", email],
    async () => {
      try {
        const response = await fetch(
          `https://pet-planetoid-server.vercel.app/get-posts?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user posts");
        }
        const posts = await response.json();

        return posts;
      } catch (error) {
        throw error;
      }
    }
  );
  const initializedData = data || [];

  return [initializedData, isLoading, refetch];
};

export default useUserPosts;
