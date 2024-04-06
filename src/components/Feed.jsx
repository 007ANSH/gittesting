import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Feed.css";
function home() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="all">
      <h1 className="head"> Organisation Name</h1>
      {records.map((item, index) => (
        <div id="services">
          <div className="box">
            <h1>{item.name}</h1>
            <div className="services">
              {/* <tr> key={index} */}
              <tr> {item.id} </tr>
              {/* <tr>{item.name}</tr> */}
              <tr> {item.email}</tr>
              <tr> {item.phone}</tr>
              {/* </tr> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default home;

// export default App;
