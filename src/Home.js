import Products from "./Products";
import { CircularProgress } from "@mui/material";
const Home = ({AllApiProducts})=>{
    return(
        
        <div style={{paddingTop:"100px"}}>
            <Products AllApiProducts={AllApiProducts}/>
        </div>


        
    )
}
export default Home;