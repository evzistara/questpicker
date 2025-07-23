function AllFittingTasks({ tasks }) {


  return (
  <div className="border-2 border-gray-300 p-2 mx-4 md:p-10 rounded-lg flex flex-col gap-4  md:w-xl md:mx-auto my-10">
<h2 className="text-2xl block mx-auto font-bold">All fitting tasks:</h2>
{tasks.map((task, index) => (
    <div key={index} className="mb-4">
        <p className=""><span className="font-semibold">No:</span> {index+1}</p>
<p className=""><span className="font-semibold">Difficulty:</span> {task.Difficulty}</p>
<p className=""><span className="font-semibold">Name:</span> {task.Task}</p>
<p className=""><span className="font-semibold">Category:</span> {task.Category}</p>
<p className=""><span className="font-semibold">Time consumption:</span> {task.Time}</p>
 </div>))}
  </div>
)
}

export default AllFittingTasks;