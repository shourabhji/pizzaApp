
const userInitiat = { name: 'Guest' }

  const userReducer = (state=userInitiat , action) => {
    
    switch (action.type) {
        case "SIGNUP_USER_REQUEST":
           return {
    loading: true
       };
        case "SIGNUP_USER_SUCCESS":
            return {
                user: action.payload,
                loading: false
            };
        case "SIGNUP_USER_FAIL":
            return {
                error: action.payload,
                loading: false
            }
        case "LOGIN_USER_REQUEST":
           return {
    loading: true
       };
        case "LOGIN_USER_SUCCESS":
            return {
                user: action.payload,
                loading: false
            };
        case "LOGIN_USER_FAIL":
            return {
                error: action.payload,
                loading: false
            }
   
        default:
            return state

    }

}
export default userReducer;