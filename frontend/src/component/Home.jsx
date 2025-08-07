import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [allAdd, setAllAdd] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllAdds")
      .then((res) => setAllAdd(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className=" flex flex-col md:flex-row  flex-wrap gap-7 p-7">
        {allAdd.map((items, key) => (
          <Card items={items} key={key} />
        ))}
      </div>
    </>
  );
};

export default Home;
