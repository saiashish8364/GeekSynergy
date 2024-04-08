import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function LogIn(){
    const nameRef=useRef();
    const passwordRef=useRef();
    const history=useHistory()
    function formSubmit(e){
        e.preventDefault()
        const user=nameRef.current.value;
        const pass=passwordRef.current.value;
        const data=localStorage.getItem("signup")
        const parsedData=JSON.parse(data)
        if(user===parsedData.name && pass===parsedData.password){
            history.push("/home")
        }
        else{
            alert("Invalid credentials!!! Check your name and password and try again")
        }
    }

    return(
        <div style={{display:"flex",justifyContent:"center",}}>     
        <div style={{ width:"30%",marginTop:"1%"}}>
            <h3 style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>Log In</h3>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                </Form.Group>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Button variant="secondary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>
        </div>
        </div>
    )
}
export default LogIn;