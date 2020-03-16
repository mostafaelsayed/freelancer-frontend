export class Project {
    name: string;
    description: string;
    id: number;
    technologies: Array<string>;

    constructor(name: string, description: string, id: number, technologies: Array<string>) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }
}