import { Helmet } from "react-helmet-async";

const PetWorld = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Pet world</title>
        </Helmet>
        <h1>This pet word page</h1>
      </div>
    );
};

export default PetWorld;