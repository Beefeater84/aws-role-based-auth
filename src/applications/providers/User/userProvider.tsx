import React, { createContext, useMemo } from "react";
import {userProviderI} from "./types";
import useGetHubUser from "@/entities/user/hooks/useGetHubUser";


export const UserContext = createContext<userProviderI>({
    user: null,
    setUser: (user: unknown) => user,
});

interface UserProviderProps {
    children: React.ReactNode;
}

export default function UserContextProvider({ children }: UserProviderProps) {
    /*
     Currently, the component wraps the Route -
     Check whether the function is called again when switching Route or if the same user is used.

     IMPORTANT! When wrapping the entire application, consider that we can't redirect somewhere if there is no user.
     Because the user is not yet loaded and can't see the authentication page.
    * */

    const { user, setUser } = useGetHubUser();

    const contextValue = useMemo(() => {
        return { user, setUser };
    }, [setUser, user]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}
