const authReducer=(state={authData:null},action)=>{
    switch(action.type){
        case "AUTH":
            localStorage.setItem("profile",JSON.stringify({...action?.payload}));
            return {...state,authData:action?.payload};
        case "LOGOUT":
            localStorage.clear();
            return {...state,authData:null};    
        default:
            return state;
    }
}

export default authReducer;
