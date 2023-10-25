import { useContext } from "react";
import profile from "../../assets/profile.jpg";
import PostCard from "../../Components/PostCard/PostCard";
import useUserPosts from "../../Hooks/useUserPosts";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../Components/Shared/Loader/Loader";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [data, isLoading, refetch] = useUserPosts(user?.email);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="h-[81vh] flex justify-between md:flex-row md:mx-0 md:gap-6 mt-4">
        <div className="md:basis-[67%] h-full bg-white rounded-lg overflow-y-scroll mr-10">
          <PostCard data={data} isLoading={isLoading} refetch={refetch}/>
          {/*  */}
        </div>  
        <div className="md:basis-[30%] rounded-lg md:block md:px-5 ml-10">
          {user ? (
            <div className="flex flex-col items-center bg-[#FF8989] text-white h-[400px] w-[400px] rounded-lg">
              <div className="flex justify-center">
                <img
                  className="my-6 h-[160px] w-[160px] rounded-full"
                  src={user.photoURL || profile}
                  alt="DP"
                />
              </div>
              <div className="text-center">
                <h3 className="text-3xl mb-3">{user.displayName}</h3>
                <h4 className="text-md">{user.email}</h4>
              </div>
            </div>
          ) : (
            <Loader/>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
