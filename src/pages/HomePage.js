import Header from "../components/Header";

import "../styles/HomePage.css";

function HomePage() {
    return (
        <div>
            <Header></Header>
            <main id="HomePage-main">
                <div id="title-and-anchors">
                    <h1>Explore Billboard!</h1>
                    <div id="anchors">
                        <div className="anchor">
                            <a>GO TO BILLBOARD</a><img src="/images/link-icon-black.png"></img>
                        </div>
                        <div className="anchor">
                            <a>DISPLAY A PHOTO</a><img src="/images/link-icon-black.png"></img>                            
                        </div>
                    </div>
                </div>                
                <img id="background" src="/images/time-square.jpg"></img>
            </main>
        </div>
    );
}

export default HomePage;