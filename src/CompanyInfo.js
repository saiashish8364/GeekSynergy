import { Link } from "react-router-dom/cjs/react-router-dom";

function CompanyInfo(){
    return(
        <>
        <div style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{width:"100%",height:"50px",backgroundColor:"black"}}>
            <nav style={{width:"100%",height:"1005"}}>
                <ul style={{listStyleType:"none",display:"flex",justifyContent:"space-evenly",alignItems:"center", }}>
                    <li><Link to="/home" style={{color:"white",textDecoration:"none"}}><h5>Home</h5></Link></li>
                    <li><Link to="/companyinfo" style={{color:"white",textDecoration:"none",}}><h5>Company Info</h5></Link></li>
                </ul>
            </nav>
        </div>
        </div>
        <div style={{height:"400px",display:"flex",justifyContent:"center",alignItems:"center",}}>
            <div >
                <p><span style={{fontSize:"1.15rem",fontWeight:"bold"}}>Company</span> : Geeksynergy Technologies Pvt Ltd</p>
                <p><span style={{fontSize:"1.15rem",fontWeight:"bold"}}>Address</span> : Sanjayanagar, Benguluru - 56</p>
                <p><span style={{fontSize:"1.15rem",fontWeight:"bold"}}>Phone</span> : XXXXXXXX09</p>
                <p><span style={{fontSize:"1.15rem",fontWeight:"bold"}}>Email</span> : XXXXXX@gmail.com</p>
            </div>
        </div>
        <footer >
            <div  style={{display:"flex",justifyContent:"center"}}>
              <h5> Developed by Ashish</h5>  
            </div>
        </footer>
        </>
    )
}
export default CompanyInfo;