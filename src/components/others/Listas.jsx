import React, { Component } from 'react';

class Listas extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            feed: [
                {id: 1, username: "Matheus", curtidas: 10, comentarios: 2}, 
                {id: 2, username: "Lucas", curtidas: 120, comentarios: 24},
                {id: 3, username: "Amanda", curtidas: 30, comentarios: 12}
            ]
        };
    }

    render()	{
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <div key={item.id} style={{marginBottom: "10px"}}>
                            <h3 style={{paddingBottom: "5px"}}>{item.username}</h3>
                            <p>{item.curtidas} curtidas | {item.comentarios} comentários</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
} 

export default Listas;

