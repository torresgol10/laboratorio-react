import React from "react";
import { Link } from "react-router-dom";

export default function RowTable({ member }) {
    return (
        <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.id}`}>{member.login}</Link>
        </>

    )
}