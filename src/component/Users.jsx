import { key } from 'localforage';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    
    // console.log(users);
    const delectHandler = (id) =>{
        console.log('delectHandler: '+ id );
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
            // headers: 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('successfully delect');

                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h3>No of User {users.length}</h3>
            {
                users.map(user=><p 
                    key={user._id}> 
                    Email: {user.email} 
                    <Link to={`/update/${user._id}`}><button>update</button></Link>
                    <button onClick={()=>delectHandler(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;