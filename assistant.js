/**
 * A constructor function for a personal assistant.
 * @param {string} name - The name of the assistant.
 */
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = ["Answer emails", "Schedule meeting", "Finish JS assignment"];
  this.mood = "productive"; // Initial mood
}

/**
 * Introduces the assistant and reports the number of tasks.
 */
PersonalAssistant.prototype.introduce = function() {
  console.log(`Hi! I'm ${this.name}, your assistant.`);
  console.log(`You have ${this.tasks.length} tasks left.`);
};

/**
 * Adds a new task to the assistant's task list.
 * @param {string} task - The task to be added.
 */
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Added task: "${task}"`);
  console.log(`Now you have ${this.tasks.length} tasks left.`);
};

/**
 * Completes the first task in the list, removes it, and updates the mood.
 */
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completedTask = this.tasks.shift(); // Removes the first task
    console.log(`Completing task: ${completedTask}`);
    console.log(`Now you have ${this.tasks.length} tasks left.`);
    this.mood = "accomplished"; // Update mood after completing a task
  } else {
    console.log("No tasks to complete!");
    this.mood = "relaxed";
  }
};

/**
 * Reports the assistant's current mood.
 */
PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

// --- Simulation of a Day ---

// 1. Create an instance of the PersonalAssistant
let jarvis = new PersonalAssistant("Jarvis");

// 2. Introduce the assistant and show initial state
jarvis.introduce();
jarvis.reportMood();
console.log("--------------------");

// 3. Complete a task
jarvis.completeTask();
console.log("--------------------");


// 4. Report the mood after completing a task
jarvis.reportMood();
console.log("--------------------");

// 5. Add a new task
jarvis.addTask("Buy groceries");
console.log("--------------------");

// 6. Complete another task
jarvis.completeTask();
jarvis.reportMood();
