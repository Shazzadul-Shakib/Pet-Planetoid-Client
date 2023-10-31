import { useQuery } from "react-query";

const useGetComments = (post) => {
  const { isLoading, data, refetch } = useQuery(
    ["myComments", post._id],
    async () => {
      try {
        const response = await fetch(
          `https://pet-planetoid-server.vercel.app/get-comments?postId=${post._id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const comments = await response.json();

        return comments;
      } catch (error) {
        throw error;
      }
    }
  );
  const initializedData = data || [];
  return [initializedData, isLoading, refetch];
};

export default useGetComments;
