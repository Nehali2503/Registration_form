import React , {Component}from 'react'


 
class Form extends Component { 


    constructor(props)
       
    {   super(props);

        this.state={
            FirstName:"" ,
            LastName:"",
            Email:"",
             Password:"",
            

            
        }
    }

    handlefirstname=(event)=>
    {this.setState({FirstName:event.target.value})
}
    handlelastname=(event)=>
    {this.setState({LastName:event.target.value})
    }
    handleemail=(event)=>
    {this.setState({Email:event.target.value})
    }
    
    handleAge=(event)=>
    {this.setState({Age:event.target.value})
    }
    handlepassword=(event)=>
    {this.setState({Password:event.target.value})
    }

handlesubmit=(event)=>{

if (this.state.FirstName==="")
 alert(`Sorry,You have not entered your first name`);
 
else if
     (this.state.LastName==="")
 alert(`Sorry,You have not entered your last name`);
 
  else if (this.state.Email==="")
alert(`Sorry,You have not entered your email Id`);

 else if (this.state.Password==="")
alert(`Sorry,You have not entered the password`);
    

else 
   alert (`HELLO ${this.state.FirstName}! You have successfully registered!!!`);
   event.preventDefault(); 
}


    render()
{
    console.log(this.state)
    return(
        <div className="input">
            <form onSubmit={this.handlesubmit}>
                <label> FirstName</label>
                <input type="text" placeholder="Enter FirstName"value={this.state.FirstName}
                onChange={this.handlefirstname}/> <br/>
                <label>LastName</label>
                <input type="text"placeholder="Enter LastName" value={this.state.LastName}
                onChange={this.handlelastname}/> <br/>
                <label>Email Id </label>
                <input type="email" placeholder="Enter Email Id"value={this.state.Email}
                onChange={this.handleemail}/> <br/>
                <label>Password</label>
                
                <input type="password" placeholder="Enter password"value={this.state.Password}
               
                onChange={this.handlepassword}/> 
                 <br/>
               
                <input type="submit" value="SUBMIT" className="button"/> 
                


            </form>
            
        </div>
    )   

    }
}


export default Form;
