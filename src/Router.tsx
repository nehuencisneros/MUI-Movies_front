import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { DetailView, HomeView, LoginView } from "./views";

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