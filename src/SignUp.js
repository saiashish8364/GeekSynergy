import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function Signup(){
    const [drop,setDrop]=useState("");
    const nameRef=useRef();
    const mobileRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const history= useHistory();
    
    function formSubmit(e){
        e.preventDefault()
        const data={
            name:nameRef.current.value,
            mobile:mobileRef.current.value,
            professionRef:drop,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        localStorage.setItem("signup",JSON.stringify(data))
        history.push("/")
        console.log(data)
    }

    return(
        <div style={{display:"flex",justifyContent:"center",}}>     
        <div style={{ width:"30%",marginTop:"1%"}}>
            <h3 style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>Sign Up</h3>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type="Number" placeholder="Enter Mobile No." ref={mobileRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                    <Dropdown onSelect={(eventKey)=>{setDrop(eventKey)}}>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Profession
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
                            <Dropdown.Item eventKey="Fresher">Fresher</Dropdown.Item>
                            <Dropdown.Item eventKey="Experienced">Experienced</Dropdown.Item>   
                        </Dropdown.Menu>
                        <p>Selected Value : {drop}</p>
                    </Dropdown>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
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
        </div></div>
        
    )
}
export default Signup;