import React from 'react';

const Container = (props) => {
    const { fluid, minH100 } = props;
    return (
        <div className={`${minH100 ? 'min-h-[100vh]' : ''} w-full relative overflow-x-hidden ${props.className} ${fluid && 'fluid'}`} style={props.style}>
             {props.background && <img
                src={props.background}
                alt=""
                className="absolute inset-0 z-[0] w-full h-full"
            />}
            {props.children}
        </div>
    );
}

export default Container;
