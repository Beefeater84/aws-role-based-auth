import {Authenticator} from "@aws-amplify/ui-react";

export default function Login(){
    return (
        <div className="container">
            <h1>Login</h1>
            <Authenticator>
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    )
}