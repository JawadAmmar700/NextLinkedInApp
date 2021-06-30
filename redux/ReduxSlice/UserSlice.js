const UserReducer = (State = null, action) => {
    switch (action.type) {
        case 'Add_User':
            return State = action.user
        case 'Sign_Out':
            return State = action.user
        default:
            return State
    }
}

export default UserReducer