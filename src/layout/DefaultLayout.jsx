import { Outlet } from "react-router-dom"
import Header from "../assets/components/Header"

function DefaultLayout() {
    return (
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer>ciao</footer>
        </>
    )
}

export default DefaultLayout