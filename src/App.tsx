import { useEffect, useState } from "react";
import "./App.css";
import DegitsHolder from "./components/DegitHolder";
import DotsHolder from "./components/DotHolder";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function padTo2Digits(num: number): string {
    return num.toString().padStart(2, "0");
  }

  return (
    <>
      <div className="clock">
        <DegitsHolder
          degit={padTo2Digits(currentDate.getHours()).split("")[0]}
        />
        <DegitsHolder
          degit={padTo2Digits(currentDate.getHours()).split("")[1]}
        />
        <DotsHolder />
        <DegitsHolder
          degit={padTo2Digits(currentDate.getMinutes()).split("")[0]}
        />
        <DegitsHolder
          degit={padTo2Digits(currentDate.getMinutes()).split("")[1]}
        />
        <DotsHolder />
        <DegitsHolder
          degit={padTo2Digits(currentDate.getSeconds()).split("")[0]}
        />
        <DegitsHolder
          degit={padTo2Digits(currentDate.getSeconds()).split("")[1]}
        />
      </div>
    </>
  );
}

export default App;
