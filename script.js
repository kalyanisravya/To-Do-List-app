const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emojiDisplay = document.getElementById("emojiDisplay");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    updateEmoji();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  updateEmoji();
}
function updateEmoji() {
  const tasks = document.querySelectorAll("li");
  const doneTasks = document.querySelectorAll("li.done");

  const emojiDisplay = document.getElementById("emojiDisplay");
  const moodMessage = document.getElementById("moodMessage");

  const total = tasks.length;
  const done = doneTasks.length;
  const percent = (done / total) * 100;

  if (total === 0) {
    emojiDisplay.textContent = "😐";
    moodMessage.textContent = "Hey, are you okay? Just take the first step — you got this!";
  } else if (percent === 100 && total > 0) {
    emojiDisplay.textContent = "🎉";
    moodMessage.textContent = "You did it! I’m so proud of you — absolutely nailed it!";
  } else if (percent >= 50) {
    emojiDisplay.textContent = "😄";
    moodMessage.textContent = "You’re almost there! Don’t give up now — finish strong!";
  } else if (percent > 0) {
    emojiDisplay.textContent = "😊";
    moodMessage.textContent = "Nice start! You're doing okay — keep moving forward!";
  } else {
    emojiDisplay.textContent = "😐";
    moodMessage.textContent = "Hey, are you okay? Just take the first step — you got this!";
  }
}

