import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function Layout() {
    return(
        <>
            <Header />
            <main className="mb-5 md:mb-6 lg:mb-7">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout