import React from "react";

const NameWithHandle = ({ author }) => {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    );
}

export default NameWithHandle