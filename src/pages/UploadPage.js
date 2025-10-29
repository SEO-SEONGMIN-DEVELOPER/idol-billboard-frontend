import UploadInfo from '../components/UploadInfo.js';
import Upload from '../components/Upload.js';

import '../styles/UploadPage.css';

function UploadPage() {
    return (
        <main id='UploadPage-main'>
            <UploadInfo></UploadInfo>
            <Upload></Upload>
        </main>
    );
}

export default UploadPage;