export class Todo {
    title: string = "Title";
    content?: string = "Content";
    completed: boolean = false;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.completed = false;
    }
}
