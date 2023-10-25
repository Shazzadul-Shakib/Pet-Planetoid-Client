import profile from "../../assets/profile.jpg";
import PostCard from "../../Components/PostCard/PostCard";
import useUserPosts from "../../Hooks/useUserPosts";
import Loader from "../../Components/Shared/Loader/Loader";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { email } = useParams();
  const [data, isLoading, refetch] = useUserPosts(email);

  const uniqueData = new Set(data.map((item) => item.userName));
  
  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="h-[81vh] flex justify-between md:flex-row md:mx-0 md:gap-6 mt-4">
        <div className="md:basis-[67%] h-full bg-white rounded-lg overflow-y-scroll mr-10">
          <PostCard data={data} isLoading={isLoading} refetch={refetch} />
        </div>
        {/* Profile card section */}
        <div className="md:basis-[30%] rounded-lg md:block md:px-5 ml-10">
          <div className="flex flex-col items-center bg-[#FF8989] text-white h-[400px] w-[400px] rounded-lg">
            {Array.from(uniqueData).map((userName) => {
              const user = data.find((item) => item.userName === userName);
              return (
                <div key={userName}>
                  <div className="flex justify-center">
                    <img
                      className="my-6 h-[160px] w-[160px] rounded-full"
                      src={user.userPhotoURL || profile}
                      alt="DP"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl mb-3">{userName}</h3>
                    <h4 className="text-md">{email}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
