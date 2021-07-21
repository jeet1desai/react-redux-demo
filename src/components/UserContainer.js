import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userAction';


function UserContainer() {

    const userData = useSelector((state)=>state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (userData.loading) ? (
        <h2>Loading</h2>
    ) : (userData.error) ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users && userData.users.map((user)=>{
                        return(<p>{user.name}</p>)
                    })
                }
            </div>
        </div>
    )
}

export default UserContainer
