'use client'

import { ColumnDef } from "@tanstack/table-core";
import { PrismaTypes } from "#lib/prisma";

export const columns: ColumnDef<PrismaTypes.Task>[] = [
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorFn: ({ createdBy }) => createdBy ? `${createdBy?.firstName} ${createdBy?.lastName}` : 'Not assigned',
        header: 'User',
    },
    {
        accessorKey: 'createdAt',
        header: 'Created at'
    },
    {
        accessorFn: ({ project }) => project?.title || 'Not assigned',
        header: 'Project',
    },
];
