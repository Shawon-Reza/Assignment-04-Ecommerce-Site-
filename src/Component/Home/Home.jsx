import { Helmet } from "react-helmet-async";
import HomeBanner from "../Banner/HomeBanner";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Products from "../Products/Products";



const Home = () => {


    
    return (
        <div className="px-5">
            <Helmet>
                <title>Gadget Haven | Home</title>
            </Helmet>
            <NavBar></NavBar>
            <HomeBanner></HomeBanner>
            <Products></Products>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;