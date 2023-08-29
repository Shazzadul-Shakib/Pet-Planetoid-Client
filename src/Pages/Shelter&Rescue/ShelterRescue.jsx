import { Helmet } from "react-helmet-async";

const ShelterRescue = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Shelter&Rescue</title>
        </Helmet>
        <h1>This is shelter & rescue page</h1>
      </div>
    );
};

export default ShelterRescue;