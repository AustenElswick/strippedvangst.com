import Footer from "./Footer";

const Layout = props => (
    <div>
        {props.children}
        <Footer />
    </div>
);

export default Layout;
