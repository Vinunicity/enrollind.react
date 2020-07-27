import React, { Component } from 'react'
import Axios from 'axios';

class Indiasetup extends Component {
    constructor(props){
        super(props);
        this.state ={
            eid:'',
            spid:'',
            firstName:'',
            lastName:'',
            birthDate:'',
            homePhone:'',
            email:'',
            taxid:'',
            address1:'',
            address2:'',
            city:'',
            accountNumber:'',
            accountHolder:'',
            bankName:'',
            branchName:'',
            branchNumber:'',
            password:'',
            rpass:'',relation:''
        }
    }

    changeHander = e =>{
       this.setState({[e.target.name]: e.target.value});
    //    "humanName":{
    //        "firstName":e.target.value,
    //        "lastName":e.target.value
    }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        Axios.post('https://hydraqa.unicity.net/v5a-test/customers.js',this.state).then(response =>{
            console.log(response)
        }).catch(error =>{
            console.log(error);
        })
    }
    render() {
        const{eid,spid,firstName,lastName,birthDate,homePhone,email,taxid,address1,address2,city,accountNumber,accountHolder,bankName,branchName,branchNumber,password,rpass,relation} = this.state;
        return (
            <div>
                <h1>India Account Setup</h1>
                <hr></hr>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <h1>Enrollment Settings</h1>
                        Language:
                        <select>
                            <option value ="English">English</option>
                            <option value ="Hindi">Hindi</option>
                        </select>
                        <br></br>
                        Enroller's ID:
                        <input type = "text" name = "eid" value={eid} onChange = {this.changeHander}></input>
                        <br></br>
                        Sponsor's id:
                        <input type = "text" name ="spid" value={spid} onChange = {this.changeHander}></input>
                    </div>
                    <hr></hr>
                    <div>
                    <h1>About You</h1>
                    <div>
                        Firstname:<input type = "text" name = "firstName" value={firstName} onChange = {this.changeHander}></input>
                        Lastname:<input type = "text" name = "lastName" value={lastName} onChange = {this.changeHander}></input>
                        BIrthdate:<input type = "text" name = "birthDate" value={birthDate} onChange = {this.changeHander}></input>
                    </div>
                    <div>
                    Phone:<input type = "text" name = "homePhone" value={homePhone} onChange = {this.changeHander}></input>
                    Email:<input type = "text" name = "email" value={email} onChange = {this.changeHander}></input>
                    PAN:<input type = "text" name = "taxid" value={taxid} onChange = {this.changeHander}></input>
                    </div>
                    {/* <div>
                        Gender:
                        <input type = "radio"></input>Male
                        <input type = "radio"></input>Female
                    </div> */}
                    <div>
                        <h1> Co-Applicant/Nominee </h1>
                    </div>
                    <div>
                        Fullname:<input type =  "text" name = "relation" value ={relation} onChange = {this.changeHander}></input>
                       {/* Relationship:
                        <select>
                            <option>Parent</option>
                            <option>Sibling</option>
                        </select> */}
                    </div>
                    <div>
                        <h1>Mailing Address</h1>
                        Address1:<input type = "text" name = "address1" value={address1} onChange = {this.changeHander}></input>
                        Address2:<input type = "text" name = "address2" value={address2} onChange = {this.changeHander}></input>
                        City:<input type = "text" name = "city" value={city} onChange = {this.changeHander}></input>
                        {/* State:<select>
                            <option>Karnataka</option>
                            <option>Tamilnadu</option>
                        </select> */}
                        
                    </div>
                    <div>
                        <h1> Direct Deposit for Commissions </h1>                        
                    </div>
                    <div>
                    Account Number:<input type ="text" name= "accountNumber" value={accountNumber} onChange = {this.changeHander}></input>
                    Account Holder:<input type ="text" name = "accountHolder" value={accountHolder} onChange = {this.changeHander}></input>
                    Bank Name:<input type ="text" name = "bankName" value={bankName} onChange = {this.changeHander}></input>
                    Branch Name:<input type ="text" name = "branchName" value={branchName} onChange = {this.changeHander}></input>
                    IFSC:<input type ="text" name = "branchNumber" value={branchNumber} onChange = {this.changeHander}></input>
                 
                    </div>
                    <div>
                    <h1> Password </h1>                        </div>
                    </div>
                    <div>
                    Create Password:<input type="text" name = "password" value={password} onChange = {this.changeHander}></input>
                    Reset Password:<input type="text" name ="rpass" value={rpass} onChange = {this.changeHander}></input>
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Indiasetup;
