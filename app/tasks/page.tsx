import React from "react";
import prisma, { PrismaTypes } from "#lib/prisma";
import TaskCard from "./TaskCard";
import { Button } from "#components/ui/button";
import Link from "next/link";

async function Tasks(): Promise<JSX.Element> {
    const tasks = JSON.parse(JSON.stringify(await prisma.task.findMany()));
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
                <div className="xl:rt-r-display-flex">
                    {tasks?.map((task) =>
                        <TaskCard task={task} key={task.id}/>
                    )}
                </div>
            </>
    )
}

export default Tasks;
