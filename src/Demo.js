import React, { Component } from 'react'
import Axios from 'axios';
class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            userid:'',
            title:'',
            body:''
        }
    }
    changeHandler = e =>{
        this.setState({[e.target.name] : e.target.value})
    }
    sumbitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(res =>{
            console.log(res)
        }).catch( err =>{
            console.log(err);
        })
    }

    render() {
        const {userid,title,body} =  this.state;
        return (
            <div>
                <div>
                    <form onSubmit ={this.sumbitHandler}>
                    UserId:<input type = "text" name = "userid" value={userid} onChange = {this.changeHandler}></input>
                    Title:<input type = "text" name = "title" value={title} onChange = {this.changeHandler}></input>
                    Body:<input type = "text"  name = "body" value={body} onChange = {this.changeHandler}></input>
                    <button type = "submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Demo;