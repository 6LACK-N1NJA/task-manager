import {Button} from "#components/ui/button";
import prisma from "#lib/prisma";

export default async function New() {
    const projects = await prisma.project.findMany();
    async function create(formData: FormData) {
        'use server'
        // const project = projects.find(({ id }) => id === formData.get('project'))
        await prisma.task.create({
            data: {
                title: formData.get('title'),
                description: formData.get('description'),
                createdAt: new Date(),
                project: {
                    connect: {
                        id: formData.get('project')
                    }
                }
            }
        })
    }

    return (
        <form action={create}>
            <h1>New Task</h1>
            <label htmlFor="title">Task name</label>
            <input name="title" type="text"/>
            <label htmlFor="description">Description</label>
            <input name="description" type="text"/>
            <select name="project" id="project">
                <option value={null}>None</option>
                {projects.map(({ title, id}) =>
                    <option key={id} value={id}>{title}</option>
                )}
            </select>
            <Button type="submit">Create</Button>
        </form>
    )
}