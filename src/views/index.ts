import React from 'react';

export { HomeView } from "./Home";

export const LoginView = React.lazy(()=> import('./Login'))

export const DetailView = React.lazy(()=> import('./Detail'))