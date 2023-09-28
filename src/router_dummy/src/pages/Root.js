import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from 'Root.module.css'

function RootLayout () {
    return (
        <>
        <MainNavigation></MainNavigation>
        <main className={classes.content}>
            <Outlet></Outlet>
        </main>
        </>
    )

}

export default RootLayout;