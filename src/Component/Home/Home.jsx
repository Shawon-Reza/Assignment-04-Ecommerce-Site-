import HomeBanner from "../Banner/HomeBanner";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Home = () => {
    return (
        <div className="px-5">
            <h1>Home</h1>
            <NavBar></NavBar>
            <HomeBanner></HomeBanner>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;