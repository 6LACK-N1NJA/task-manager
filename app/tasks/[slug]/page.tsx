import React from "react";
import ParamsProps from "../../../types/ParamsProps";

const TaskPage: React.FC<ParamsProps> = ({ params }) => {
    const { slug } = params;
    return (
        <>
            <h3>{`Here will be task with ${slug} id`}</h3>
        </>
    );
};

export default TaskPage;
