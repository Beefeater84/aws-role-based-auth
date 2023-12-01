import {getUrl} from 'aws-amplify/storage';
import {useCallback, useEffect, useState} from "react";

export default function Main() {

    const [image, setImage] = useState<string | null>(null);

    const url = useCallback(async () => {
        const img = await getUrl({
            key: "blue/sablinskie-peshery-5.jpg",
        });
        if (!img) {
            console.error("Image not found");
            return null;
        }

        setImage(img.url.href);

    }, []);


    useEffect(() => {
        url()
    }, [])

    console.log("image", image)

    return (
        <div className="container">
            <h1>Main</h1>
            <img src={image ? image : undefined} alt="" width="400px" height="100%"/>
        </div>
    )
}