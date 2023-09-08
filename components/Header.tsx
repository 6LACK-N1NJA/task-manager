import React from "react";
import Link from "next/link";
import Image from 'next/image'
import HeaderTab from "./HeaderTab";

const Header: React.FC = () => {
  let left = (
    <div className="flex space-x-10">
        <Link href="/" style={{ color: 'tangerine'}}>
            <Image width={20} height={20} src='/wheel.svg'/>
        </Link>
        <HeaderTab path="/projects" name="Projects"/>
        <HeaderTab path="/tasks" name="Tasks"/>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
