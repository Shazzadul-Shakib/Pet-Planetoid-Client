import { Helmet } from "react-helmet-async";
import PostCard from "../../Components/PostCard/PostCard";

const PetWorld = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Pet world</title>
        </Helmet>
        {/* Pet world post section */}
        <section className=" h-[83vh] flex gap-10 justify-end md:mr-10 mt-4">
          {/* All post appear here */}
          <div className=" md:basis-[55%] h-full bg-white rounded-lg overflow-y-scroll">
            <PostCard/>
            <PostCard/>
          </div>
          {/* create post section here */}
          <div className="hidden basis-[30%] h-full bg-[#FF8989] rounded-lg md:block"></div>
        </section>
      </div>
    );
};

export default PetWorld;