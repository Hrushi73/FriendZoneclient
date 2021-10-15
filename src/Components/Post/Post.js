import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

//components
import Navbar from "../Navbar/Navbar";
import CroppedImageUpload from "../CroppedImageUPload/CroppedImageUpload";

function Post() {
  const SERVER = process.env.SERVER;
  const [userData, setUserData] = useState({});
  const History = useHistory();

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await axios.get(`${SERVER}/Profile`);
        setUserData(res.data);
      }
      fetchData();
    } catch (err) {
      History.push("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <CroppedImageUpload />
      </div>
    </div>
  );
}

export default Post;
