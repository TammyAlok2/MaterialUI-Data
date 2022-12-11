import React, { useEffect, useState } from "react";
import Tables from "../Component/Tables";

function Homepage() {
  const [rows, setRows] = useState([]);
  console.log("🚀 ~ file: Homepage.js:6 ~ Homepage ~ rows", rows);

  const url = "https://reqres.in/api/users";
  useEffect(() => {
    async function getData() {
      try {
        let parsedObj = await fetch(url)
          .then((response) => response.json())
          .then((data) => setRows(data.data))
          .catch((error) => console.log(error));
        return parsedObj;
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Tables rows={rows} />
    </div>
  );
}

export default Homepage;
