let template = document.querySelector(".template");
let count = 0;
document
  .querySelector(".new-task")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let textarea = this.querySelector("textarea");

    if (textarea.value !== "") {
      let task = template.cloneNode(true);
      count++;
      task.setAttribute("data-order", count);
      task.classList.remove("template");
      task.querySelector("pre").textContent = textarea.value;
      localStorage.setItem(`task[${count}]`, textarea.value);
      localStorage.setItem("task-count", count);

      /*
      Notikums kad uzdevums ir izpildīts
      */
      task.addEventListener("click", function () {
        if (!this.classList.contains("editable")) {
          this.classList.toggle("done");
        }
      });

      /*
      Notikums pie klikšķa uz option
      */
      task.querySelector(".option").addEventListener("click", function (event) {
        event.stopPropagation();
        task.querySelector(".options").classList.toggle("active");
      });

      /*
      Notikums pie klikšķa uz edit
      */
      task.querySelector(".edit").addEventListener("click", function (event) {
        event.stopPropagation();
        if (!task.classList.contains("done")) {
          task.querySelector("pre").setAttribute("contenteditable", true);
          task.classList.add("editable");
          task.querySelector(".options").classList.remove("active");
        }
      });

      /*
      Notikums pie klikšķa uz save
      */
      task.querySelector(".save").addEventListener("click", function (event) {
        event.stopPropagation();
        task.classList.remove("editable");
        task.querySelector("pre").removeAttribute("contenteditable");
      });

      /*
      Notikums pie klikšķa uz remove
      */
      task.querySelector(".remove").addEventListener("click", function (event) {
        event.stopPropagation();
        task.remove();
      });

      document.querySelector(".task-list").append(task);

      textarea.value = "";
    }
  });
