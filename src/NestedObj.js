import React, { Component } from 'react'

class NestedObj extends Component {
    constructor(props){
        super(props);
       this.state ={
           user:{
               email:'',
               password:''
           }
       }

    }
    changehandler = e =>{
        const {user} = {...this.state};
        const currentState = user;
        const {name, value} = e.target;
        currentState[name]= value;
        this.setState({user:currentState});
    }

    submission = e =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.submission}>
                Email:<input type = "text" name ={this.state.email} onChange = {this.changehandler}></input>               
                Password:<input type = "text" name ={this.state.password} onChange = {this.changehandler}></input>               
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NestedObj;