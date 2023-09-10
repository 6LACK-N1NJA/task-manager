import React from "react";

export default function Layout(props: {
    children: React.ReactNode
    add: React.ReactNode
}) {
    return (
        <>
            {props.children}
            {props.add}
        </>
    )
}
