export class Task {
    constructor(title, description, duedate, priority, category, isComplete = false) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.category = category;
        this.isComplete = isComplete;
    };
};