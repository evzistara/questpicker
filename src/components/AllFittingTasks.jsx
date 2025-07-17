function AllFittingTasks({ tasks }) {


  return (
  <div className="border-2 border-gray-300 p-2 mx-4 md:p-10 rounded-lg flex flex-col gap-4  md:w-xl md:mx-auto my-10">
<h2 className="text-2xl block mx-auto font-bold">All fitting tasks:</h2>
{tasks.map((tasks, index) => (
    <div key={index} className="mb-4">
        <p className=""><span className="font-semibold">No:</span> {index+1}</p>
<p className=""><span className="font-semibold">Difficulty:</span> {tasks.difficulty}</p>
<p className=""><span className="font-semibold">Name:</span> {tasks.task}</p>
<p className=""><span className="font-semibold">Category:</span> {tasks.category}</p>
<p className=""><span className="font-semibold">Time consumption:</span> {tasks.time_consumption}</p>
 </div>))}
  </div>
)
}

export default AllFittingTasks;