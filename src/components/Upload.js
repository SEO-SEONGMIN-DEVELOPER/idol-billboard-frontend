import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Upload.css";

function Upload() {
    const [isAnchorVisible, setIsAnchorVisible] = useState(false);
    const [uploadedImage, setUploadedImage] = useState();
    const [isUploadedImageVisible, setIsUploadedImageVisible] = useState(false);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append("image", file);

        fetch("/upload", {
            method: "POST",
            body: formData
        })

        setIsAnchorVisible(true);

        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);

        setIsUploadedImageVisible(true);
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(uploadedImage);
        }
    }, [uploadedImage]);

    return (
        <div id="upload">
            <img id="led-frame" src="/images/LED-frame.jpeg"></img>
            <form action="submit" method="post" encType="multipart/form-data">
                <label htmlFor="image-upload-input">click here</label>
                <input id="image-upload-input" type="file" name="image" accept="image/*" onChange={handleImageUpload}></input>
            </form>
            {isUploadedImageVisible && <img id="uploaded-image" src={uploadedImage}></img>}
            <div id="anchor-container" style={{display: isAnchorVisible ? "flex" : "none"}}>
                <div id="anchor">
                    <Link to="/billboard">GO TO BILLBOARD</Link><img src="/images/link-icon-green.png"></img>
                </div>
            </div>
        </div>
    );
}

export default Upload;