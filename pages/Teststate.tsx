import React from 'react'
import { useState } from "react";

type Props = {}

//referlink : https://stackoverflow.com/questions/70541210/nextjs-typescript-the-component-does-not-update-when-setstate-called

export default function Teststate({}: Props) {

 const initList = ["a", "b", "c"];
  const [list, setList] = useState<Array<String>>(initList);
//   const handleClick = () => {
//       var listTemp = list;
//       listTemp.push("z");
//       setList(listTemp);
//   }

const handleClick = () => {
  setList(list => [...list, "z"]); 
}


  return (
    //<div>Teststate  div มีได้แค่ 1

    <div>
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
      <button onClick={handleClick}>
          Button
      </button>
    </div>

    //</div>
  )
}