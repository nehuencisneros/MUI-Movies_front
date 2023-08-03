import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "@mui/icons-material";

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}