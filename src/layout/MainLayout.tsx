import Header from "../components/Header/Header";
import React from "react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="app-container__category">
                <Outlet />
            </div>
        </div>
    )

}

export default MainLayout;