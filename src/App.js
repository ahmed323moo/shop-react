import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./routes/Navigation/Navigation";
import Auth from "./routes/Auth/Auth";
// import SignIn from "./components/routes/Authentication/Authentication";
const Shop = () => {
  return <h1>I am on the shop page</h1>;
};

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
