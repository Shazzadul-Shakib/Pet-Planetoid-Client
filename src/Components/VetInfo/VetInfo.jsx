
const VetInfo = ({ data }) => {
  console.log(data)
  return (
    <div className="bg-[#FF8989] p-4 rounded-lg text-white">
      <h1 className=" text-2xl my-2">{data.name}</h1>
      <p className="my-2">{data.number}</p>
      <p>{data.address}</p>
    </div>
  );
};

export default VetInfo;