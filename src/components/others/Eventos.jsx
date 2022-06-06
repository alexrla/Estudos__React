import React, { Component } from 'react';

import Membros from './Membros/Membros';

class Eventos extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {};
    }

    render()	{
        return (
            <div>
                <Membros nome="Visitante" />
            </div>
        );
    }
} 

export default Eventos;