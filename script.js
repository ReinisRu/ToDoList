document.querySelector(".new-task").addEventListener("submit", function (e) {
  e.preventDefault();
  let textarea = this.querySelector("textarea").value;

  if (textarea) {
    let task = document.createElement("pre");
    task.textContent = textarea;
    console.log(task);
    document.querySelector(".task-list").append(task);

    textarea.value = "";
  }
});
