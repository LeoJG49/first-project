import React from "react";

function Opinions() {
    return (
        <div className="container">
            <img 
                className="opinions-image" 
                src={require("../Images/img-1.webp")} //For now, we use require to import the image, but we will learn how to do it with import later on
                alt="An abstract person" 
            />
        </div>
    );
}