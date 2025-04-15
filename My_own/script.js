const push = ["Incline Bench Press", "Overhead Shoulder Press", "Dumbbell Lateral Raises", "Tricep Dips", "Cable Chest Fly"];
const pull = ["Lat Pulldown", "Barbell Rows", "Face Pulls", "Bicep Curls", "Hammer Curls"];
const legs = ["Squats", "Romanian Deadlifts", "Leg Press", "Lunges", "Calf Raises"];

function generateWorkout(type) {
  let workoutList = [];

  if (type === "push") workoutList = push;
  else if (type === "pull") workoutList = pull;
  else if (type === "legs") workoutList = legs;

  let selected = [];
  while (selected.length < 3) {
    const random = workoutList[Math.floor(Math.random() * workoutList.length)];
    if (!selected.includes(random)) selected.push(random);
  }

  document.getElementById("workoutDisplay").innerHTML = `
    <strong>${type.toUpperCase()} Day:</strong><br>
    • ${selected[0]}<br>
    • ${selected[1]}<br>
    • ${selected[2]}
  `;
}
