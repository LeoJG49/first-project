//There's no need to import React in the latest versions of React. However, we must to import React if
//We add other things from React, such a useState, useEffect, etc. But for now, we don't need to import React, because we are not using any of those things in this component.
import "../stylesheets/Opinions.css"; //We have to import the css file, so that we can use the styles in it

function Opinions(props) { //Later on, we will learn how to pass props to this component, so that we can reuse it for different opinions
    //Now, we will use props to pass the data to this component.
    //Each prop will be an object that contains the name, job and opinion of a person.
    return (
    <div className="container">
		<img 
        className="opinions-image" 
          	src={require(`../Images/img-${props.image}.webp`)} //For now, we use require to import the image, but we will learn how to do it with import later on
            alt={props.context} 
        />
        <div className="opinion-text-container">
			<p className="opinion-name">{props.name}</p>
			<p className="opinion-job">{props.job}</p>
			<p className="opinion-text">{props.opinion}</p>                
        </div>
    </div>
    );
}
//We have to export the component, so that we can import it in App.js and use it there
export default Opinions;

//There are two type of export in React, default export and named export. 
// We are using default export here.
//The other way is using export const Opinions = () => {...} and then we have to import it with import { Opinions } from './components/Opinions.jsx'; in App.js
//Using default export is more common when we have only one component in a file, and using named export is more common when we have multiple components in a file.