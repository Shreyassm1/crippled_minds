import React, { useEffect } from "react";
import "../css/body.css"

const Body = () => {

    const initialHeight = 50;
    const [isExpanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(initialHeight);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        link.rel = 'stylesheet';
        link.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
        link.crossOrigin = 'anonymous';
        link.referrerPolicy = 'no-referrer';
        document.head.appendChild(link);
        return () => {
          document.head.removeChild(link);
        };
      }, []); 
      
        const toggleContent = () => {
            setExpanded(!isExpanded);
            setMaxHeight(isExpanded ? initialHeight : 10000);
        };

        return (
            <div className="body">
                <div className="feedcard">
                    <div className="info">
                        <div className="senderPhoto">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="senderText">
                            <div className="name">
                                <p><strong>Username</strong></p>
                            </div>
                            <div className="timeStamp">
                                <p>0s</p>
                            </div>
                        </div>   
                    </div>
                    <div className="content">
                        <div className="article" id="dynamic-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis corrupti ea incidunt vero pariatur rerum distinctio? Repudiandae dolorum explicabo hic cupiditate, nostrum perspiciatis atque molestias quia ab, saepe nobis!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ea sunt molestias error libero. Vitae quas nihil eum veritatis. Voluptatem architecto, ipsa adipisci omnis officia vel soluta praesentium dolore necessitatibus?
                            </p>
                        </div>
                        <button id="toggle-button">see more...</button>
                        <div className="media">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/e6bPIMjpGf4?si=V7cEyokdZy3uUZu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="impressions">
                        <div className="likes">
                            <i className="fa-regular fa-thumbs-up"></i>
                        </div>
                        <div className="comment">
                            <i className="fa-regular fa-comment"></i>
                        </div>
                        <div className="share">
                            <i className="fa-solid fa-share"></i>
                        </div>
                    </div>
                </div>
                <div className="upload">

                </div>
            </div>
        );
};