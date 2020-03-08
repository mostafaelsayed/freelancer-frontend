export class Project {
    name: string;
    description: string;
    id: number;

    constructor(name: string, description: string, id: number) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}