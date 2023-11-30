
import {useCallback, useEffect, useState} from "react";
import {fetchUserAttributes} from "aws-amplify/auth";

export default function useGetHubUser() {
    const [user, setUser] = useState<unknown | null>(null);

    const setCurrentUser = useCallback(async (): Promise<unknown> => {
        const userAttributes = await fetchUserAttributes();

        return {
            email: userAttributes.email,
            firstName: userAttributes.given_name,
            lastName: userAttributes.family_name,
        }
    }, []);

    useEffect(() => {
        if (!user)
            setCurrentUser()
                .then((hubUser) => setUser(hubUser))
                .catch((e) => {
                    throw new Error("User not found");
                    // ToDo обработка ошибко - если user не найден, то редирект на страницу авторизации или ошибку
                });
    }, [setCurrentUser, user]);

    return { user, setUser };
}
