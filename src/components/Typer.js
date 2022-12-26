import React from 'react';
import Typed from 'react-typed';
 
const Typer = ( props ) => {
    return (
        <Typed
            strings={props.strings}
            typeSpeed={40}
            backSpeed={80}
            showCursor={false}
            {...props}
        />
    )
};

export default Typer ;