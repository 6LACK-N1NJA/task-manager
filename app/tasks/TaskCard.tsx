import React from "react";
import {PrismaTypes} from "#lib/prisma";
import {CardContent, Card, CardHeader} from '#components/ui/card';
import Link from "next/link";

const TaskCard: React.FC<{task: PrismaTypes.Task}> = ({ task }) => {
    return (
        <Link href={`tasks/${task.id}`}>
            <Card>
                <CardHeader>{task.title}</CardHeader>
                <CardContent>{task.description}</CardContent>
            </Card>
        </Link>
    )
};

export default TaskCard;
