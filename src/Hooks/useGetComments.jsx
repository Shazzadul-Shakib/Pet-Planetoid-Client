import { useQuery } from "react-query";

const useGetComments = (post) => {
  const { isLoading, data, refetch } = useQuery(
    ["myComments", post._id],
    async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/get-comments?postId=${post._id}`
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
  console.log(initializedData);

  return [initializedData, isLoading, refetch];
};

export default useGetComments;

