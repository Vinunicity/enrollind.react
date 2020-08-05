import React, { Component } from 'react'
import Axios from 'axios';

class Indiasetup extends Component {
    constructor(props){
        super(props);
        this.state ={
         
          //  eid:'',spid:'',firstName:'',lastName:'',birthDate:'',homePhone:'',email:'',taxid:'',address1:'',address2:'',city:'',accountNumber:'',accountHolder:'',bankName:'',branchName:'',branchNumber:'',password:'',rpass:'',relation:''
          humanName:{
              firstName:'',
              lastName:''
          },
          type:'Associate',
          gender:'male',
          maritalStatus:'Single',
          birthDate:'1994-07-29',
          signature:{
              value:'Vinothkumar S'
          },
          email:'',
          preferredLocale:'en-IN',
          status:'Active',
          password:{
              value:'asd@1234',
          },
          mainAddress:{
              city:'',
              country:'',
              state:'',
              zip:'',
              address1:'',
              address2:'',

          },
          homePhone:'',
          taxTerms:{
              taxId:''
          },
          rights:[
              {
                  holder:'Unicity',
                  type:"sendEmails"
              }
          ],
          sponsor:{
              href:'https://hydraqa.unicity.net/v5a-test/customers?id.unicity=2'
          },
          enroller:{
              href:'https://hydraqa.unicity.net/v5a-test/customers?id.unicity=2'
          },
          coapplicant:{
              type:"Parent",
              details:{
                  humanName:{
                      firstName:'',
                      lastName:''
                  }
              }
          },
          depositBankAccount:{
              accountNumber:'',
              accountHolder:'',
              bankName:'',
              branchName:'',
              branchNumber:'',
              accountType:''
          }

          

        } 
    }

    changeHandler = e =>{
      // this.setState({[e.target.name]: e.target.value});
    //    "humanName":{
    //        "firstName":e.target.value,
    //        "lastName":e.target.value
    var humanName = {...this.state.humanName};
    humanName.firstName = e.target.value;
    this.setState({humanName});

    var humanName = {...this.state.humanName};
    humanName.lastName = e.target.value;
    this.setState({humanName});
    
    //this.setState({email:e.target.value});
    // var mainAddress = {...this.state.mainAddress};
    // mainAddress.city = e.target.value;
    // this.setState({mainAddress});

    // var mainAddress = {...this.state.mainAddress};
    // mainAddress.country = 'IN'
    // this.setState({mainAddress});

    // var mainAddress = {...this.state.mainAddress};
    // mainAddress.zip = e.target.value;
    // this.setState({mainAddress});

    // var mainAddress = {...this.state.mainAddress};
    // mainAddress.address1 = e.target.value;
    // this.setState({mainAddress});
    
    // var mainAddress = {...this.state.mainAddress};
    // mainAddress.address2 = e.target.value;
    // this.setState({mainAddress});

    // var taxTerms = {...this.state.taxTerms};
    // taxTerms.taxId = e.target.value;
    // this.setState({taxTerms});
    
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
        const{enroller,sponsor,firstName,lastName,birthDate,homePhone,email,taxid,address1,address2,city,accountNumber,accountHolder,bankName,branchName,branchNumber,password,rpass,relation,zip} = this.state;
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
                        <input type = "text" onChange = {this.changeHandler}></input>
                        <br></br>
                        Sponsor's id:
                        <input type = "text"  onChange = {this.changeHandler}></input>
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
                    {/* <div>
                        Gender:
                        <input type = "radio"></input>Male
                        <input type = "radio"></input>Female
                    </div> */}
                    <div>
                        <h1> Co-Applicant/Nominee </h1>
                    </div>
                    <div>
                        Fullname:<input type =  "text" name = "relation" value ={relation} onChange = {this.changeHandler}></input>
                       {/* Relationship:
                        <select>
                            <option>Parent</option>
                            <option>Sibling</option>
                        </select> */}
                    </div>
                    <div>
                        <h1>Mailing Address</h1>
                        Address1:<input type = "text" name = "address1" value={address1} onChange = {this.changeHandler}></input>
                        Address2:<input type = "text" name = "address2" value={address2} onChange={e => this.setState({ address2: e.target.value })}></input>
                        City:<input type = "text" name = "city" value={city} onChange = {this.changeHandler}></input>
                        {/* State:<select>
                            <option>Karnataka</option>
                            <option>Tamilnadu</option>
                        </select> */}
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
                    {/* Create Password:<input type="text" name = "password" value={password} onChange = {this.changeHandler}></input> */}
                    {/* Reset Password:<input type="text" name ="rpass" value={rpass} onChange = {this.changeHandler}></input> */}
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Indiasetup;
