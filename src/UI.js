import { TaskManager } from "./TaskManager.js";
import { Task } from "./Task.js";

export class UI {
    constructor() {
        this.taskManager = new TaskManager();
        this.isPendingView = false;
        this.init();
    };

    init() {
        this.bindEvents();
        this.renderTasks(this.taskManager.getTasks());
    };

    bindEvents() {
        document.querySelector(".newtask-btn").addEventListener("click", () => this.showForm());
        document.querySelector(".form-container").addEventListener("submit", (e) => this.handleFormSubmit(e));
        document.querySelector(".cancel-btn").addEventListener("click", () => this.closeForm());
        document.querySelectorAll(".priority-btn").forEach(btn => btn.addEventListener("click", () => this.setPriority(btn)));
        document.querySelectorAll(".options-btns").forEach(btn => btn.addEventListener("click", () => this.filterTasksByCategory(btn)));
        document.querySelector(".pending-task").addEventListener("click", () => this.showPendingTasks());
        document.querySelector(".today-task").addEventListener("click", () => this.showAllTasks());
        document.querySelector(".custom-btn").addEventListener("click", () => this.showCustomMessage());
        document.querySelectorAll(".header-btns").forEach(btn => btn.addEventListener("click", () => this.setActiveHeaderButton(btn)));
    };

    showForm() {
        document.querySelector(".form-container").style.display = "block";
        document.querySelector(".newtask-btn").style.display = "none";
        this.emptyForm();
    };

    closeForm() {
        document.querySelector(".form-container").style.display = "none";
        document.querySelector(".newtask-btn").style.display = "flex";
    };

    emptyForm() {
        document.querySelector("#title").value = "";
        document.querySelector("#description").value = "";
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        document.querySelector("#duedate").value = `${year}-${month}-${day}`;
    };

    handleFormSubmit(e) {
        e.preventDefault();
        const title = document.querySelector("#title").value.trim();
        if (title.length > 0) {
            const task = new Task(
                document.querySelector("#title").value,
                document.querySelector("#description").value,
                document.querySelector("#duedate").value,
                document.querySelector(".current-priority").textContent,
                document.querySelector("#category").value
            );
            this.taskManager.addTask(task);
            this.renderTasks(this.taskManager.getTasks());
            this.updateCategory();
            this.closeForm();
        };
    };

    setPriority(btn) {
        document.querySelectorAll(".priority-btn").forEach(otherBtn => otherBtn.classList.remove("current-priority"));
        btn.classList.add("current-priority");
    };

    filterTasksByCategory(btn) {
        document.querySelectorAll(".options-btns").forEach(otherBtn => otherBtn.classList.remove("active-btn"));
        btn.classList.add("active-btn");
        const category = btn.value;

        let tasks;
        if (this.isPendingView) {
            tasks = category === "all"
                ? this.taskManager.getPendingTasks()
                : this.taskManager.getTasksByCategory(category).filter(task => !task.isComplete);
        } else {
            tasks = category === "all"
                ? this.taskManager.getTasks()
                : this.taskManager.getTasksByCategory(category);
        };

        this.renderTasks(tasks);
    };

    updateCategory() {
        const category = document.querySelector("#category").value;
        document.querySelectorAll(".options-btns").forEach(btn => {
            btn.classList.remove("active-btn");
            if (btn.value === category) {
                btn.classList.add("active-btn");
            };
        });
    };

    renderTasks(tasks) {
        const ul = document.querySelector("ul");
        ul.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = "task-box";
            li.style.backgroundColor = this.getPriorityColor(task.priority);
            li.innerHTML = `
                <input type="checkbox" id="todo-${index}" ${task.isComplete ? 'checked' : ''} />
                <label class="custom-checkbox" for="todo-${index}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                </label>
                <label for="todo-${index}" class="task-text">
                    <p class="taskbox-category">${task.category}</p>
                    <p class="taskbox-title todo-title">${task.title}</p>
                    <p class="taskbox-description todo-description">${task.description}</p>
                </label>
                <button class="delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </button>
            `;
            ul.appendChild(li);

            const deleteBtn = li.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", () => {
                this.taskManager.deleteTask(index);
                this.renderTasks(this.taskManager.getTasks());
            });

            const checkBox = li.querySelector("input");
            checkBox.addEventListener("change", () => {
                this.taskManager.toggleTaskCompletion(index);
                this.renderTasks(this.taskManager.getTasks());
            });
        });
    };

    getPriorityColor(priority) {
        switch (priority) {
            case "Low":
                return "#B2DFB2"; 
            case "Medium":
                return "#FFD699"; 
            case "High":
                return "#FFCACA";
            default:
                return "#FFFFFF"; 
        };
    };

    showPendingTasks() {
        this.isPendingView = true; 
        const previewContainer = document.querySelector(".toppreview-container");
        previewContainer.style.display = "none"; 
        const mainElement = document.querySelector("main");
        mainElement.style.paddingTop = "2rem";
        const pendingTasks = this.taskManager.getPendingTasks();
        this.renderTasks(pendingTasks);
    };

    showAllTasks() {
        this.isPendingView = false; 
        const previewContainer = document.querySelector(".toppreview-container");
        previewContainer.style.display = "flex"; 
        const mainElement = document.querySelector("main");
        mainElement.style.paddingTop = "0rem"; 
        this.renderTasks(this.taskManager.getTasks());
    };

    showCustomMessage() {
        setTimeout(() => {
            alert("Sorry, the feature is under construction and the Developer is very lazy.");
        }, 200);
    };

    setActiveHeaderButton(btn) {
        document.querySelectorAll(".header-btns").forEach(otherBtn => otherBtn.classList.remove("headerbtn-line"));
        btn.classList.add("headerbtn-line");
    };
};
