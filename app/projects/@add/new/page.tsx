import {Button} from "#components/ui/button";
import prisma from "#lib/prisma";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default function New() {
    async function create(formData: FormData) {
        'use server'
        await prisma.project.create({
            data: {
                title: formData.get('title'),
                description: formData.get('description'),
            }
        });
        revalidatePath('/tasks');
        redirect('/tasks');
    }
    return (
        <form action={create}>
            <h1>New Project</h1>
            <label htmlFor="title">Project name</label>
            <input name="title" type="text"/>
            <label htmlFor="description">Description</label>
            <input name="description" type="text"/>
            <Button type="submit">Create</Button>
        </form>
    )
}