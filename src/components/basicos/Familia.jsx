import React, { cloneElement } from 'react';

export default function Familia(props)  {
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