import React from "react";
import prisma, { PrismaTypes } from "#lib/prisma";
import TaskCard from "../projects/[slug]/TaskCard";
import { Button } from "#components/ui/button";
import Link from "next/link";
import { DataTable } from "#components/DataTable";
import { columns } from "./columns";

async function Tasks(): Promise<JSX.Element> {
    const { tasks }: PrismaTypes.Task[] = await fetch('/tasks', { method: 'GET'});
    return (
            <>
                <div className="flex justify-between">
                    <h2 className="bg-orange-500">Your tasks</h2>
                    <Button>
                        <Link href='/tasks/new'>
                            Add task
                        </Link>
                    </Button>
                </div>
                <DataTable columns={columns} data={tasks} />
                {/*<div className="xl:rt-r-display-flex">*/}
                {/*    {tasks?.map((task) =>*/}
                {/*        <TaskCard task={task} key={task.id}/>*/}
                {/*    )}*/}
                {/*</div>*/}
            </>
    )
}

export default Tasks;
