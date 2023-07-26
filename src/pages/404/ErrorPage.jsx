import React from "react";
import ContentWrapper from "../../componants/contentWrapper/ContentWrapper";
import "./style.scss";


const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText"> Sorry...! Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;


