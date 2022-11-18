 import { useState ,useEffect } from 'react';
 import './index.css'

 
 
 
 const RegistrationForm = (props)=>{
    
  const [userDetails,setUserDetails] = useState({
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    pincode:'',
    tAndC:false
  });
  const [error,setError] = useState({
    firstName:false,
    lastName:false,
    userName:false,
    city:false,
    state:false,
    pincode:false,
    tAndC:false
  });
  const [submit,setSubmit] = useState(false);
  
   const handleChange= (e)=>{
       const {name,value} = e.target;
       setUserDetails({...userDetails,[name]:value});
       console.log(userDetails);

   }
   const handleSubmit =(e)=>{
        e.preventDefault();
        const {firstName,lastName,userName,city,state,pincode,tAndC} = userDetails;
        if(firstName.length<3){
          setError((prevError)=>{return {...prevError,firstName:true}})
          
        }
        else{
          setError((prevError)=>{return {...prevError,firstName:false}})
        } 
        // for LastName
        lastName.length<3?setError((prevError)=>{return {...prevError,lastName:true}}):
        setError((prevError)=>{return {...prevError,lastName:false}});
        
        // for userName
         
        
         userName.length<3?setError((prevError)=>{return {...prevError,userName:true}}):
         setError((prevError)=>{return {...prevError,userName:false}});

        //  for city
        city.length<4?setError((prevError)=>{return {...prevError,city:true}}):
        setError((prevError)=>{return {...prevError,city:false}});

        // for state
        state.length<3?setError((prevError)=>{return {...prevError,state:true}}):
        setError((prevError)=>{return {...prevError,state:false}});

        // for pincode
        pincode.length<3?setError((prevError)=>{return {...prevError,pincode:true}}):
        setError((prevError)=>{return {...prevError,pincode:false}});

        // for t and c
        !tAndC?setError((prevError)=>{return {...prevError,tAndC:true}}):
        setError((prevError)=>{return {...prevError,tAndC:false}});
        setSubmit(true);
        console.log(error)
   }
     useEffect(()=>{
      if(submit && !Object.values(error).includes(true)){
        setSubmit(false);
        setUserDetails({ firstName:'',
        lastName:'',
        userName:'',
        city:'',
        state:'',
        pincode:'',
        tAndC:false})
        alert("ur details are saved succes")
      }
      
     
    
     },[submit,error])
   
   return <>
         
           <form className="registration" onSubmit={handleSubmit}>
          
            <div className="row-1" style={{display:'flex',flexDirection:'row'}}>
              <div style={{margin:"10px"}}>
                <label>FirstName : </label>
                <input type="text" name='firstName' onChange={handleChange} value={userDetails.firstName}/>
                {submit && (error.firstName ? <pre>FirstName is required</pre>:
                <pre>Looks good</pre>)}
              </div>
              <br/>
              <div style={{margin:"10px"}}>
                <label>LastName : </label>
                <input type="text" name='lastName' onChange={handleChange} value={userDetails.lastName}/>
                {submit && (error.lastName ? <pre>lasttName is required</pre>:
                <pre>Looks good</pre>)}
              </div>
              <div style={{margin:"10px"}}>
                <label>UserName : </label>
                <input type="email" name='userName' onChange={handleChange} value={userDetails.userName}/>
                {submit && (error.userName ? <pre>userName is required</pre>:
                <pre>Looks good</pre>)}
              </div>
            </div>
            
            <div style={{display:'flex',flexDirection:'row'}}>
              <div style={{margin:"10px"}}>
                <label>City :  </label>
                <input style={{width:"280px"}} type="text" name='city' onChange={handleChange} value={userDetails.city}/>
                {submit && (error.city ? <pre>city is required</pre>:
                <pre>Looks good</pre>)}
              </div>
              <div style={{margin:"10px"}}>
                <label>State : </label>
                <input type="text" name='state' onChange={handleChange} value={userDetails.state}/>
                {submit && (error.state ? <pre>state is required</pre>:
                <pre>Looks good</pre>)}
              </div>
              <div style={{margin:"10px"}}>
                <label>Pincode : </label>
                <input type="text" name='pincode' onChange={handleChange} value={userDetails.pincode}/>
                {submit && (error.pincode ? <pre>pincode is required</pre>:
                <pre>Looks good</pre>)}
              </div>
            </div>
            <div style={{margin:"10px"}}>
              <label style={{fontSize:"15px"}}>
                 <input style={{width:"20px",height:"20px"}} type="checkbox" name='tAndC' value={userDetails.tAndC}
                 onChange={(e)=>setUserDetails({...userDetails,tAndC:!userDetails.tAndC})} checked={userDetails.tAndC}/> T and C
                 </label>

                 
             </div>
             <div style={{margin:"10px"}}>
              <button>Submit</button>
             </div>
                
               </form>
     
   
   </>
 }
 export default RegistrationForm