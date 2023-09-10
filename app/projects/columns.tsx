'use client'

import { ColumnDef } from "@tanstack/table-core";
import { PrismaTypes } from "#lib/prisma";

export const columns: ColumnDef<PrismaTypes.Project>[] = [
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorFn: ({ tasks }) => tasks?.length || 'N/A',
        header: 'Tasks count',
    },
    {
        accessorFn: ({ createdBy }) => createdBy ? `${createdBy?.firstName} ${createdBy?.lastName}` : 'Not assigned',
        header: 'User',
    },
];
