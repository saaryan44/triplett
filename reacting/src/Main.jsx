import {Link,Switch,Route} from 'react-router-dom';
import Registrar from './Registrar';
import GateKeeper from './GateKeeper';

const Main=()=>{return(<h4>Hi, Login/Register. Get redirected to your Home-page on Login. <br /><ul style={{listStyleType:"none",display:"flex",width:"33%"}}> <li><Link to="/register">Registeration form</Link></li><li><Link to="/login">Logging-in form</Link></li> </ul><Switch><Route path="/register" exact component={Registrar} /><Route path="/login" exact component={GateKeeper} /> </Switch></h4>);};

export default Main;