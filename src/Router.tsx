import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home/Home";
import { LoginView } from "./views/Login/Login";
import { DetailView } from "./views/Detail/Detail";
import { RouterLayout } from "./common/RouterLayout";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomeView />} />
                <Route path="/movie/:id" element={<DetailView />} />
            </Route>
            <Route path="/login" element={<LoginView />} />
        </Routes>
    )
}