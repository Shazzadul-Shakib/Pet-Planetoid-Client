import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Home</title>
        </Helmet>

        <h1>This is home page</h1>
      </div>
    );
};

export default Home;