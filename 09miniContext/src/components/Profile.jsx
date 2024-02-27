import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    //Conditional return
    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile