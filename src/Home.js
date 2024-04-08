import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom/cjs/react-router-dom";
function Home(){
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const data= await fetch("https://hoblist.com/api/movieList",
                {
                    method:"POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        category:"movies",
                        language:"kannada",
                        genre:"all",
                        sort:"voting"
                    })
                });
                const extract=await data.json();
                setMovies(extract["result"])
                }
            catch(err){
                alert(err)
            }
        }
        fetchData();
        return () => {
            // unmounting
        };
        
    },[])
    
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
        
            <ul style={{listStyleType:"none"}}>
                {
                    movies.map((movie)=>{
                        return(
                            <li key={movie._id} style={{marginLeft:'22.5%'}}>
                                <div style={{display:"flex",marginTop:"30px"}}>
                                    <div style={{marginTop:"3%",}}>
                                        <p style={{display:"flex",justifyContent:"center"}}><Button variant="secondary">Up</Button></p>
                                        <h6 style={{display:"flex",justifyContent:"center"}}>1</h6>
                                        <p style={{display:"flex",justifyContent:"center"}}><Button variant="secondary">Down</Button></p>
                                        <p style={{display:"flex",marginTop:"30px",justifyContent:"center"}}>Votes</p>
                                    </div>
                                <div style={{marginLeft:"30px"}}>
                                <img src={movie.poster} alt={movie.title} style={{maxWidth:"200px",maxHeight:"300px"}}/>
                                </div>
                                <div style={{marginLeft:"30px"}}>
                                <h3>{movie.title}</h3>
                                <p>Genre : {movie.genre}</p>
                                <p>Director : {movie.director[0]}</p>
                                <p>Starring : {movie.stars[0]}</p>
                                <p>Mins | {movie.language} |{movie.releaseDate} </p>
                                <p>{movie.pageViews} views | Voted by {movie.totalVoted} People</p>
                                
                                </div>
                                <br/>
                                
                                </div>
                                
                                     <Button variant="primary" size="lg" style={{width:"60%" ,marginTop:"10px"}}>Watch Trailer</Button>
                            </li>
                            
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Home