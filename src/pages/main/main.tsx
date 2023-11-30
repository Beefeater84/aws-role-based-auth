import { getUrl } from 'aws-amplify/storage';
import {useCallback, useEffect} from "react";

export default function Main() {

    const url = useCallback(async () => {
        return await getUrl({
            key: "sablinskie-peshery-5.jpg",
            options: {
                validateObjectExistence: true // defaults to false
            }
        });
    }, []);


    useEffect(() => {
        url().then(console.log)
    }, [])

    return (
        <div className="container">
            <h1>Main</h1>
            <img src="https://rolebasedauths3shared182223-dev.s3.eu-north-1.amazonaws.com/blue/sablinskie-peshery-5.jpg" alt="" width="400px" height="100%"/>
        </div>
    )
}