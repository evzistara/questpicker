# 🧭 Quest Picker

A task picker I made to help me choose from my 365 tasks that I am completing over the next year. It includes both small and big tasks - whether it's tidying desk, walking my dog, doing yoga, or pushing forward on my programming journey.

![Printscreen of Quest picker webpage](./public/questpicker.png)

## ✨ Features

- 🎲 **Random Quest Generator**  
  'Get random task' gets you a completely random task from the 365 options. This is in case I don't care what kind of task I get I just want help in deciding.

- 🎯 **Filtered Quest Generator**  
  Choosing a task based on:
  - Difficulty (`Daily Surviving`, `Normal`, `Challenging`, `Extra Challenging`)
  - Category (like `IT`, `Chores`, `Self Care`, `Dog`, and more)
  - Time Consumption (1 to 5 scale)
  This one helps if I have some more specific topic in mind and want to be able to customize my task to a degree.

- 📋 **Live Task Display**  
  See the selected task, along with all its informations (difficulty, category, and estimated time).

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **JavaScript**

## 🧠 How It Works

- Tasks are stored in `questLog.js` as an array of objects.
- The `App.jsx` manages state and handles both:
  - Pure random task picking
  - Filtered task picking based on form inputs
- `TaskForm.jsx` handles user selections.
- `Task.jsx` displays the task details.

## 💡 Future Ideas

- Add the ability to complete and track tasks
- Store progress in local storage


