import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 text-white bg-[#24292F] rounded-md">
      <h1 className="text-xl font-bold">Technical Abhi</h1>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className=" hover:text-lime-400"
          style={({ isActive }) => (isActive ? { color: "#4feb34" } : null)}
        >
          Home
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/profile"
              className=" hover:text-lime-400"
              style={({ isActive }) => (isActive ? { color: "#4feb34" } : null)}
            >
              Profile
            </NavLink>
            <NavLink
              to="/repos"
              className=" hover:text-lime-400"
              style={({ isActive }) => (isActive ? { color: "#4feb34" } : null)}
            >
              Repos
            </NavLink>
            <Logout />
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className=" hover:text-lime-400"
              style={({ isActive }) => (isActive ? { color: "#4feb34" } : null)}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
