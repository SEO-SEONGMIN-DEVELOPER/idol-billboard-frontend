import '../styles/UploadInfo.css';

function UploadInfo() {
    return (
        <div id='upload-info'>
            <h1>SELECT YOUR IMAGE!</h1>
            <aside>"Choose an image to upload to the billboard. When selecting a photo that you want to share with everyone, it's important to be thoughtful."</aside>
            <div id='anchor-container'>
                <div id='anchor'>
                <a>GO TO BILLBOARD</a><img src='/images/link-icon-green.png'></img>
            </div>
            </div>
        </div>
    );
}

export default UploadInfo;