import React, { Component } from 'react'
import Indiasetup from './Indiasetup'
import Axios from 'axios';
import Moment from 'moment';


class IndianSetup extends Component {
    constructor(props){
        super(props);
        this.state  = {
            enroller:'',sponsor:'',firstName:'',lastName:'',birthDate:'',homePhone:'',email:'',taxid:'',address1:'',address2:'',city:'',accountNumber:'',accountHolder:'',bankName:'',branchName:'',branchNumber:'',password:'',rpass:'',relation:'',rtype:'',county:''
        }
    }

    changeHandler = e =>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
        
    }

    // onValueChange(event) {
    //     this.setState({
    //       selectedOption: event.target.value
    //     });
    //   }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        const payLoad = {
            humanName:{
                firstName:this.state.firstName,
                lastName:this.state.lastName
            },
            type:'Associate',
            gender:'male',
            maritialStatus:'single',
            birthDate:Moment(this.state.birthDate).format('YYYY-MM-DD'),
            signature:{
                value:'Vinothkumar S'
            },
            email:this.state.email,
            preferredLocale: "en-IN",
            status:'Active',
            password:{
                value:this.state.password
            },
            mainAddress:{
                city:this.state.city,
                country:'IN',
                state:'KA',
                zip:this.state.zip,
                address1:this.state.address1,
                address2:this.state.address2,
            },
            homePhone:this.state.homePhone,
            taxTerms:{
                taxId:this.state.taxid
            },
            rights:[
                {
                    hodler:'Unicity',
                    type:'sendEmails'
                }
            ],
            sponosr:{
                href:"https://hydraqa.unicity.net/v5a-test/customers?id.unicity="+this.state.enroller
            },
            enroller:{
                href:"https://hydraqa.unicity.net/v5a-test/customers?id.unicity="+this.state.sponsor
            },
            coapplicant:{
                type:this.state.rtype,
                details:{
                    humanName:{
                        firstName:this.state.relation,
                        lastName:""
                    }
                }
            },
            depositBankAccount:{
                accountNumber:this.state.accountNumber,
                accountHolder:this.state.accountHolder,
                bankName:this.state.bankName,
                branchName:this.state.branchName,
                branchNumber:this.state.branchNumber,
                accountType:'CheckingPersona'
            }

            

        }
        Axios.post('https://hydraqa.unicity.net/v5a-test/customers.js',payLoad).then(res =>{
            console.log(res)
        }).catch( err =>{
            console.log(err);
        })
    }
    render() {
        const{enroller,sponsor,firstName,lastName,birthDate,homePhone,email,taxid,address1,address2,city,accountNumber,accountHolder,bankName,branchName,branchNumber,password,rpass,relation,zip,county,selectedOption} = this.state;
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
                        <input type = "text" name = "enroller" value = {enroller} onChange = {this.changeHandler}></input>
                        <br></br>
                        Sponsor's id:
                        <input type = "text"  name = "sponsor"  value = {sponsor} onChange = {this.changeHandler}></input>
                    </div>
                    <hr></hr>
                    <div>
                    <h1>About You</h1>
                    <div>
                        Firstname:<input type = "text" name = "firstName" value={firstName} onChange = {this.changeHandler}></input>
                        Lastname:<input type = "text" name = "lastName" value={lastName} onChange = {this.changeHandler}></input>
                        BIrthdate:<input type = "text" name = "birthDate" value={birthDate} onChange = {this.changeHandler}></input>
                    </div>
                    <div>
                    Phone:<input type = "text" name = "homePhone" value={homePhone} onChange={e => this.setState({ homePhone: e.target.value })}></input>
                    Email:<input type = "text" name = "email" value={email} onChange={e => this.setState({ email: e.target.value })}></input>
                    PAN:<input type = "text" name = "taxid" value={taxid} onChange = {this.changeHandler}></input>
                    </div>
                    {/* <input
              type="radio"
              value="male"
              name = "selectedOption"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male */}
                    <div>
                        <h1> Co-Applicant/Nominee </h1>
                    </div>
                    <div>
                        Fullname:<input type =  "text" name = "relation" value ={relation} onChange = {this.changeHandler}></input>
                       Relationship:
                        <select name = "rtype" value ={this.state.rtype} onChange = {this.changeHandler}>
                            <option value = "Parent">Parent</option>
                            <option value = "Sibling">Sibling</option>
                        </select>
                    </div>
                    <div>
                        <h1>Mailing Address</h1>
                        Address1:<input type = "text" name = "address1" value={address1} onChange = {this.changeHandler}></input>
                        Address2:<input type = "text" name = "address2" value={address2} onChange = {this.changeHandler}></input>
                        City:<input type = "text" name = "city" value={city} onChange = {this.changeHandler}></input>
                        State:<select name = "county" value = {county} onChange = {this.changeHandler}>
                            <option value = "Karnataka">Karnataka</option>
                            <option value = "Tamilnadu">Tamilnadu</option>
                        </select>
                          PostalCode:<input type = "text" name = "zip" value={zip} onChange = {this.changeHandler}></input>
                    </div>
                    <div>
                        <h1> Direct Deposit for Commissions </h1>                        
                    </div>
                    <div>
                    Account Number:<input type ="text" name= "accountNumber" value={accountNumber} onChange = {this.changeHandler}></input>
                    Account Holder:<input type ="text" name = "accountHolder" value={accountHolder} onChange = {this.changeHandler}></input>
                    Bank Name:<input type ="text" name = "bankName" value={bankName} onChange = {this.changeHandler}></input>
                    Branch Name:<input type ="text" name = "branchName" value={branchName} onChange = {this.changeHandler}></input>
                    IFSC:<input type ="text" name = "branchNumber" value={branchNumber} onChange = {this.changeHandler}></input>
                 
                    </div>
                    <div>
                    <h1> Password </h1>                        </div>
                    </div>
                    <div>
                    Create Password:<input type="text" name = "password" value={password} onChange = {this.changeHandler}></input>
                    Reset Password:<input type="text" name ="rpass" value={rpass} onChange = {this.changeHandler}></input>
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default IndianSetup;