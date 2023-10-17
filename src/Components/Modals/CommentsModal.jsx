import { RxCrossCircled } from "react-icons/rx";

const CommentsModal = ({post,onclose}) => {
    const outsideClick=(e)=>{
        if(e.target.id=== 'container'){
         onclose();   
        }
    }

    return (
      <div
        onClick={outsideClick}
        id="container"
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg overflow-hidden"
      >
        <div className="bg-white p-6 mx-3 md:mx-0 md:w-1/3 rounded-md ">
          <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              {/* <AiFillHeart className=" text-2xl text-[#FF8989]" /> */}
              <span className="text-md text-gray-600">0 Comments</span>
            </div>
            <RxCrossCircled
              onClick={onclose}
              className=" text-3xl text-gray-500"
            />
          </div>
          <hr className="border-t-2 mb-4" />
        </div>
      </div>
    );
};

export default CommentsModal;