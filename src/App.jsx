import { Route, Routes } from "react-router-dom";
import AllRepos from "./pages/AllRepos";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:username/repos" element={<AllRepos />} />
      </Route>
    </Routes>
  );
};

export default App;