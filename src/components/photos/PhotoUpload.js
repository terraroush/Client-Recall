import React, { useState } from "react";

export const PhotoUpload = () => {

    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)


    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "terra-upload")
        setLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/terracloud1/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        let picture= file.secure_url
        localStorage.setItem("picture", picture)

        setImage(picture)
        setLoading(false)
    }
    return (
        <div>
        <input 
            type="file"
            name="file"
            placeholder="upload an image"
            onChange={uploadImage}
            />
         {loading ? (
             <h4>loading...</h4>
         ): (
             <img src={image} style={{width: "100px"}} />
         )}
        </div>
    )

    }
