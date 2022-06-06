import React, { cloneElement } from 'react';

export default function Familia(props)  {
    console.log(props.children);
    
    return (
        <div>
            {
                // cloneElement(props.children, props)
                props.children.map((filho, i) => {
                    return cloneElement(filho, {...props, key: i});
                })
            }
        </div>
    );
}