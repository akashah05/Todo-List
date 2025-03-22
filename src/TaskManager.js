export class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    };

    addTask(task) {
        this.tasks.push(task);
        this.saveTasks();
    };

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
    };

    toggleTaskCompletion(index) {
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
        this.saveTasks();
    };

    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };

    getTasks() {
        return this.tasks;
    };

    getPendingTasks() {
        return this.tasks.filter(task => !task.isComplete);
    };

    getTasksByCategory(category) {
        return this.tasks.filter(task => task.category === category);
    };
};
