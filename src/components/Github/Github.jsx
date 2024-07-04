// import React from 'react'

import { useEffect, useState } from "react";

function Github() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/akhlaqueahmad119")
      .then((data) => data.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <div className=" bg-gray-600 text-center m-4 text-white p-4 text-3xl">
      Github User Name : {userData.name}
    </div>
  );
}

export default Github;
