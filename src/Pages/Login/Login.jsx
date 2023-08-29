import { Helmet } from "react-helmet-async";

const Login = () => {
    return (
      <div>
        {/* Helmet to change title over browser */}
        <Helmet>
          <title>Pet Planetoid | Login</title>
        </Helmet>
        <h1>This is login page</h1>
      </div>
    );
};

export default Login;