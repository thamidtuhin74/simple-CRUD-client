import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const handleUpdate = (event) =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const updatedUser = {email, password};
        console.log(updatedUser);
        // updatedUser sending to server using ID
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('user Information updated');
                }
            })
            
    }

    return (
        <div>
            
            <p> This is Upadte {loadedUser.email}</p>
            <form onSubmit={handleUpdate}>
                <input type="email" name='email' defaultValue={loadedUser?.email} /><br/>
                <input type="text" name='password' defaultValue={loadedUser?.password}/><br/>
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default Update;