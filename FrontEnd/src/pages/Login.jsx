import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div style={{width:"50%",margin:"auto",marginTop:"100px"}}>

<Form style={{borderRadius:"10px",padding:"40px",border:"1px solid #ced4da"}}>
          
        <Form.Control type="email" placeholder="Enter email" style={{marginBottom:"20px"}} />

        <Form.Control type="password" placeholder="Password" style={{marginBottom:"20px"}} />

      <Button variant="primary" >
        Submit
      </Button>
      <div>Don't have an account?<a as={Link} to="/register">Register</a></div>
    </Form>


    </div>
  )
}

export default Login