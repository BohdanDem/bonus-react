import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/UsersApiServices";
import UserComponent from "../components/UserComponent";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {

    const users = useLoaderData();

    // const [users, setUsers] = useState([])
    //
    // useEffect(() => {
    //     getAllUsers().then(value => setUsers([...value]))
    // })

    return (
        <div>
            {users.map(user => <UserComponent data={user} key={user.id}/>)}
        </div>
    );
};

export default UsersPage;