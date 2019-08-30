import React, {Component} from 'react';
import './homepage.css';
import {thunk_fetch_allposts} from '../../action/fetchActions';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import {connect} from 'react-redux';

function HandleUpvote(postID) {
    fetch(`//localhost:8080/user/posts/${postID}/upvotes`, {method: 'PUT'})
        .then(data => data.json())
        .then(data =>{
           window.location = window.location.href;
        })
}

function HandleDownvote(postID) {
    fetch(`//localhost:8080/posts/${postID}/downvotes`, {method: 'PUT'})
        .then(data => data.json())
        .then(data =>{
           window.location = window.location.href;
        })
}

// function HandleComment(postID,userID) {
//     fetch(`//localhost:8080/posts/${postID}/comments/${userID}`, {method: 'POST', body:JSON.stringify(commentData),
//     headers:
//     {
//         'Content-Type':'application/json'
//     },
//     mode:'cors',})
//         .then(data => data.json())
//         .then(data =>{
//            window.location = window.location.href;
//         })
// }



// functionHandleComment=(postID,userID)=> {
//     fetch(`//localhost:8080/posts/${postID}/comments/${userID}`, {method: 'POST', body:JSON.stringify(this.state.commentData),
//     headers:
//     {
//         'Content-Type':'application/json'
//     },
//     mode:'cors',})
//         .then(data => data.json())
//         .then(data =>{
//            window.location = window.location.href;
//         })
// }



class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = [];
    }

    componentDidMount() {
        fetch(`//localhost:8080/allposts`)
        .then(data => data.json())
        .then(data =>{
           this.setState({posts: data})
        })
    }

    // onChange=(event,name)=>{
      
    //     const commentData ={...this.state.posts};
    //     commentData[name]=event.target.value;
    //     // loginData['postdate']=LocalDate.now();
    //     // loginData[]
    //     this.setState({
    //         commentData
    //     });
    
    // }

   

    render() {
        return(
            <>
                <div className="row" >
                    <Header />
                </div>
                <div className="row" style={{display: 'flex'}}>
                    <div className="col-1" style={{marginLeft: "15px"}}>
                        <Sidebar />
                    </div>
                    <div className="col-11">
                        {console.log("data is here: ", this.state, this.state.posts, this.state.posts)}
                        { this.state.posts  ? this.state.posts.map( (row, index) => (
                            <div className="card" style={{backgroundColor: "white", padding: "50px", margin: "20px"}} >
                                <div className="card-header">
                                    Name: {row.users.username}
                                </div>

                             
                                <div className="card-body">
                                    Title: {row.title}
                                    <br/>
                                    Description: {row.description}
                                </div>
                                <div className="card-header">
                                    <button className="btn btn-sm btn-primary" onClick={ ()=> {HandleUpvote(row.id)}} >Upvotes {row.upvote} </button>
                                    <button className="btn btn-sm btn-primary" onClick={ ()=> {HandleDownvote(row.id)} }>Downvotes {row.downvote} </button>
                                </div>

{/* 
                                <div className="comment-div">
                            <input type="textarea" placeholder="&nbsp;&nbsp;Type Comment..." className="inputClass" namae="description"  onChange={(event)=> this.onChange(event,'decription')}/>
                            <button className="buttonClass" style={{backgroundColor: "#193382", color: "white"}} type="button"  onClick={ ()=> {HandleComment(row.id,row.users.id)} } >
                            post
                        </button>
                        </div> */}
                            </div>

                            
                            )) : "No Posts"
                                  
                            
                        }

                        
                        
                    </div>
                </div>
            </>
        )
    }
}

const mapStatetoProps=(state) =>{
    return {data: state.asyncReducer};
};
const mapDispatchToProps = (dispatch) => ({
    thunk_fetch_allposts: () => dispatch(thunk_fetch_allposts())
});

export default connect(mapStatetoProps,mapDispatchToProps)(LoginPage);