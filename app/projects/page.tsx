import React from "react";
import prisma from "#lib/prisma";
import { Button } from "#components/ui/button";
import Link from "next/link";
import { DataTable } from "#components/DataTable";
import { columns } from "./columns";

async function Tasks(): Promise<JSX.Element> {
    const projects = await prisma.project.findMany({
        include: {
            tasks: {
                select: {
                    id: true
                }
            }
        }
    });
    return (
        <>
            <div className="flex justify-between">
                <h2>Projects</h2>
                <Button>
                    <Link href='/projects/new'>
                        Add project
                    </Link>
                </Button>
            </div>
            <DataTable columns={columns} data={projects} />
        </>
    )
}

export default Tasks;
