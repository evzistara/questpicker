function TaskForm({ onClick,  difficulty,
  setDifficulty,
  category,
  setCategory,
  time,
  setTime,
  onFilteredClick }) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-300 p-2 mx-4 md:p-10 rounded-lg flex flex-col gap-4 md:w-xl md:mx-auto my-10"
      >
        <h2 className="text-2xl block mx-auto font-bold">Choose your task</h2>
        <fieldset className="flex justify-between">
          <label htmlFor="difficulty">Choose quests' difficulty:</label>
          <select name="difficulty" id="difficulty"
         value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="min-w-0 py-1.5 pr-3 pl-1 text-base text-gray-900 border border-gray-300 rounded-md shadow-sm">
            <option value="">Any</option>
            <option value="Daily surviving">Daily surviving</option>
            <option value="Normal">Normal</option>
            <option value="Challenging">Challenging</option>
            <option value="Extra challenging">Extra challenging</option>
          </select>
        </fieldset>

        <fieldset className="flex justify-between">
          <label htmlFor="category">Choose category:</label>
          <select name="category" id="category" 
            value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="min-w-0 py-1.5 pr-3 pl-1 text-base text-gray-900 border border-gray-300 rounded-md shadow-sm">
              <option value="">Any</option> 
            <option value="IT">IT</option>
            <option value="Chores">Chores</option>
            <option value="Dog">Dog</option>
            <option value="Finance">Finance</option>
            <option value="Fitness">Fitness</option>
            <option value="Mental health">Mental Health</option>
            <option value="Other">Other</option>
            <option value="Relationships">Relationships</option>
            <option value="Self care">Self Care</option>
            <option value="Self improvement">Self Improvement</option>
          </select>
        </fieldset>

        <fieldset className="flex justify-between">
          <label htmlFor="timeConsumption">Choose time consumption:</label>
          <select name="timeConsumption" id="timeConsumption"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="min-w-0 py-1.5 pr-3 pl-1 text-base text-gray-900 border border-gray-300 rounded-md shadow-sm">
              <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </fieldset>
        <div className="buttons flex flex-col gap-2 md:flex-row justify-around mt-4">
        <button type="button" className=" bg-purple-700 text-white font-bold rounded-sm px-4 py-2" onClick={onFilteredClick}>Generate task</button>
        <button type="button" className=" bg-purple-700 text-white font-bold rounded-sm px-4 py-2" onClick = {onClick}>Generate random task</button>
        </div>
      </form>
    </>
  );
}

export default TaskForm;
