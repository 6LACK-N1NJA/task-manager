import prisma, {PrismaTypes} from "#lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest,
                          res: NextApiResponse) {
    const tasks: PrismaTypes.Task[] = await prisma.task.findMany({
        include: {
            project: {
                select: {
                    title: true
                }
            }
        }
    });
    res.status(200).json(tasks)
    return tasks;
}