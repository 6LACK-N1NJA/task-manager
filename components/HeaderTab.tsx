'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

type PropsType = {
    path: string,
    name: string,
}

const HeaderTab = ({ path, name }: PropsType) => {
    const pathname = usePathname();
    return <Link href={path} className="bold" data-active={pathname === path}>
            {name}
    </Link>
}

export default HeaderTab;
