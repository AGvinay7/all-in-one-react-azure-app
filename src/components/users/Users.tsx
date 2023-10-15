import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react'

const Users = () => {
    const { instance } = useMsal();
    const [userName, setUser] = useState('')
    useEffect(() => {
        const currentAccount = instance.getActiveAccount();
        if (currentAccount) {
            setUser(currentAccount.name ?? '')
        }
    }, [])
    return (<>
        <h1>Current logged in user is : {userName}</h1>
    </>)
}
export default Users;