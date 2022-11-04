import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-cneter">
        <h1>Hello Welcome</h1> <br />
        {user && user.email}       
      <h2>Disclaimer!</h2>
        <h3>This is as far as you can go. Beyond this point you won't understand unless you have your own idea.</h3>
        </div>
      <div>
        <Button className="g-logout" variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;