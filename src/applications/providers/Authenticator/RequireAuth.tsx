import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate, Outlet } from "react-router-dom";
import React from "react";
import UserContextProvider from "../User/userProvider";

export default function RequireAuth() {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);
    const navigate = useNavigate();

    if (authStatus === "configuring") {
        // ToDo - add a spinner
        return <>Loading...</>;
    }

    if (authStatus === "unauthenticated") navigate("/login");

    return (
        <UserContextProvider>
            <Outlet />
        </UserContextProvider>
    );
}
