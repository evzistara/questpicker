import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./index.css";
import { useState } from "react";
import quests from "./questLog.js";

function App() {
  const [randomTask, setRandomTask] = useState("");

 const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

function getFilteredTask() {
    const filtered = quests.filter((task) => {
      return (
        (difficulty === "" || task.difficulty === difficulty) &&
        (category === "" || task.category === category) &&
        (time === "" || task.time_consumption.toString() === time)
      );
    });

    if (filtered.length === 0) {
      setRandomTask({ task: "No matching task found!" });
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    setRandomTask(filtered[randomIndex]);
  }

 

  function getRandomQuest(){
    const randomIndex = Math.floor(Math.random() * quests.length);
    setRandomTask(quests[randomIndex]);
  }


  return (
    <>
      <Header />
      <TaskForm onClick={getRandomQuest} 
       difficulty={difficulty}
        setDifficulty={setDifficulty}
        category={category}
        setCategory={setCategory}
        time={time}
        setTime={setTime}
        onFilteredClick={getFilteredTask} />
      <Task randomTask={randomTask} />
    </>
  );
}

export default App;
