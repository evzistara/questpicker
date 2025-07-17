import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./index.css";
import { useState } from "react";
import quests from "./questLog.js";
import AllFittingTasks from "./components/AllFittingTasks.jsx";

function App() {
  const [randomTask, setRandomTask] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

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
      setFilteredTasks([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    setRandomTask(filtered[randomIndex]);
    setFilteredTasks(filtered);
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
      <AllFittingTasks tasks={filteredTasks} />
    </>
  );
}

export default App;
