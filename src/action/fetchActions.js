import { store } from "../appRouter";

export const fetch_post = (userData) => {
    return{
        type:"FETCH_USER"
    };
};

export const receive_post = post =>{
    return {
        type:"FETCHED_USER",
        data:post
    };
};

export const receive_error = () =>{
    return {
        type:"RECEIVED_USER"
    };
};



export const thunk_action_creator = (userData) => {
    store.dispatch(fetch_post(userData));
    console.log(userData);
    return function(dispatch, getState){
        return fetch(`http://localhost:8080/users`,
        {
            method:'POST',
            body:JSON.stringify(userData),
            headers:
            {
                'Content-Type':'application/json'
            },
            mode:'cors',
        })
        .then(data => data.json())
        .then(data =>{
            console.log("reached here !")
            if(data.message==="Not Found"){
                throw new Error("No such user found!!");
            }
            else dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
}



// export const thunk_action_creator = issue => {
   
//     return function(dispatch, getState){
//       //  alert(issue, getState)
//         return fetch('http://localhost:8080/users', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: issue
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {
//             console.log(err)
//         });
//     }
// }