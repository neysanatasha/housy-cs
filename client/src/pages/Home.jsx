import Navigate from '../components/Navbar';
import Filter from '../components/Filter';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";

function home (props) { 
  return (
    <div>
      <Navigate  userSignIn = {props.userSignIn} setUserSignIn={props.setUserSignIn}/>
      <div className='mx-4'>
         <Row>
         <Filter />
         <Content
         className=""/>
         </Row>
      </div>
    </div>
  );
}

export default home;