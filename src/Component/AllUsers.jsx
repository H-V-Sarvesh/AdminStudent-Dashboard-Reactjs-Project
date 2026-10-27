import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {LineChart, Line, XAxis, YAxis, Legend, Tooltip} from 'recharts'

const AllUsers = () => {
  let lineData = null;

  async function getUsers() {
    let response = await axios.get(
      "https://6ac0d2e6309c92da039c1d46.mockapi.io/dashboard",
    );
    return response.data;
  }
  getUsers();

  let { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(data);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (isError) {
    return <h1>... something went wrong try again later</h1>;
  }

  if (data) {
    let obj = {};

    data.map((e) => {
      if (!obj[e.joinedMonth]) {
        obj[e.joinedMonth] = {
          month: e.joinedMonth,
          count: 0,
        };
      } else {
        obj[e.joinedMonth].count++;
      }
    });
    
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    lineData = Object.values(obj);
    console.log(lineData);

    lineData.sort((a,b)=>{
      return months.indexOf(a.month) - months.indexOf(b.month)
    })

    console.log(obj);
  }

  return <div>
    <LineChart width={999} height={450} data={lineData}>
      <XAxis dataKey={"month"} stroke="red"></XAxis>
      <YAxis stroke="red"></YAxis>
      <Line dataKey={"count"} stroke="magenta"></Line>
      <Legend></Legend>
      <Tooltip></Tooltip>
    </LineChart>
  </div>;
};

export default AllUsers;
