import React, { Component } from 'react'
import Axios from 'axios';
class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            // userid:'',
            // title:'',
            // body:''
            // ids:{
            //         userid:'',
            //        title:'',
            //         body:'',
            //         demo:'as'
            // },
            userid:'',
                   title:'',
                    body:'',
                    demo:'as',
            demo:'as',
           mycar:''
        }
    }
    changeHandler = e =>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }
    sumbitHandler = e =>{
        e.preventDefault();                                                                                   
        console.log(this.state)
        const payload = {
            vinoth:this.state.userid,
            fullname:{
                body:this.state.body,
                demo:this.state.demo
            },
            mycar:this.state.mycar
        }
        Axios.post('https://jsonplaceholder.typicode.com/posts',payload).then(res =>{
            console.log(res)
        }).catch( err =>{
            console.log(err);
        })
    }

    render() {
        const {userid,title,body,mycar} =  this.state;
        return (
            <div>
                <div>
                    <form onSubmit ={this.sumbitHandler}>
                    UserId:<input type = "text" name = "userid" value={userid} onChange = {this.changeHandler}></input>
                    Title:<input type = "text" name = "title" value={title} onChange = {this.changeHandler}></input>
                    Body:<input type = "text"  name = "body" value={body} onChange = {this.changeHandler}></input>
                    <select value={this.state.mycar} name = "mycar" value={mycar} onChange = {this.changeHandler}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Scooter">Scooter</option>
                    </select>
                    <button type = "submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Demo;