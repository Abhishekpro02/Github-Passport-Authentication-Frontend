import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { userNotExists } from "../redux/reducers/auth";
// TODO Implement Logout functionality

const Logout = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/logout`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      dispacth(userNotExists());
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* <img
        src={authUser?.avatarUrl}
        className="w-10 h-10 rounded-full border border-gray-800"
      /> */}

      <div
        className="cursor-pointer  border border-gray-800"
        onClick={handleLogout}
      >
        <MdLogout size={22} />
      </div>
    </>
  );
};

export default Logout;
