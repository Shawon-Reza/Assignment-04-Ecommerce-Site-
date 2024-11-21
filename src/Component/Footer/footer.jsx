
const Footer = () => {
    return (
        <div className=" p-28 text-center">
            <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            <p className="opacity-50">Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider divider-neutral"></div>
            <footer className="footer place-items-center bg-white text-black">
                <nav>
                    <h6 className="footer-title opacity-100">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="">
                    <h6 className="footer-title opacity-100">Legal</h6>
                    <a className="link link-hover ">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;