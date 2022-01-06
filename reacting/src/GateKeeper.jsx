import {useState} from 'react';import Home from './Home';



const GateKeeper=()=>{const [pe,P]=useState({name:"",email:"",goHome:false});const LoginForm=()=>{const [ge,G]=useState({email:"",password:""});return(<form onSubmit={g=>{g.preventDefault(); fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:ge.email,password:ge.password})}).then(r=>r.json()).then(r=>{if(!r.ok){alert(r.message);}else{alert(r.message);P({name:r.name,email:ge.email,goHome:true});}});}}> <input type="email" required={true} placeholder="login email" name="email" value={ge.email} onChange={g=>{G({...ge,email:g.target.value});}} /><input type="password" name="password" placeholder="login password" value={ge.password} onChange={r=>G({...ge,password:r.target.value})}/> <input type="submit" value="login now" /> </form>);};return(<div> This is the GateKeeper that logs the user in. <br />{pe.goHome?<Home name={pe.name} email={pe.email} />:<LoginForm />}</div>);};

export default GateKeeper;