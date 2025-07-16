function Task({ randomTask }) {
  return (
  <div className="border-2 border-gray-300 p-2 mx-4 md:p-10 rounded-lg flex flex-col gap-4  md:w-xl md:mx-auto my-10">
<h2 className="text-2xl block mx-auto font-bold">Today's task is:</h2>
<p className=""><span className="font-semibold">Difficulty:</span> {randomTask.difficulty}</p>
<p className=""><span className="font-semibold">Name:</span> {randomTask.task}</p>
<p className=""><span className="font-semibold">Category:</span> {randomTask.category}</p>
<p className=""><span className="font-semibold">Time consumption:</span> {randomTask.time_consumption}</p>
  </div>
)
}

export default Task;
