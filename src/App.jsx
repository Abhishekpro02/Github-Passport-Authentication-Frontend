import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import RepoList from "./pages/RepoPage";
import { userExits, userNotExists } from "./redux/reducers/auth";
import { BASE_URL } from "./utils/constant";

const App = () => {
  const { user, loader } = useSelector((state) => state.auth);
  console.log(user, loader);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const checkUserLoggedIn = async () => {
        const res = await axios.get(`${BASE_URL}/api/v1/profile`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(userExits(res.data.user));
      };
      checkUserLoggedIn();
    } catch (error) {
      console.log(error);
      dispatch(userNotExists());
    }
  }, [dispatch]);
  return (
    <div className="flex">
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/repos" element={<RepoList />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
