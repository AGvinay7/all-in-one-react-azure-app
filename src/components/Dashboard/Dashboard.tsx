import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate
} from '@azure/msal-react';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CustomSideNav from '../CustomSideNav/CustomSideNav';
import Bikes from '../bikes/Bikes';
import Cars from '../cars/Cars';
import Users from '../users/Users';
import LoginPage from '../loginPage/LoginPage';
import Summary from '../Summary/Summary';
import HomePage from '../homePage/HomePage';

const Dashboard = () => {
    // const isAuthenticated = useIsAuthenticated();
    return (
        <div className="App">
            <AuthenticatedTemplate><>
                <CustomSideNav />
                <Routes>
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/bikes" element={<Bikes />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/dashboard" element={<Summary />} />
                </Routes>
            </>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LoginPage />
            </UnauthenticatedTemplate>
        </div>)
}

export default Dashboard