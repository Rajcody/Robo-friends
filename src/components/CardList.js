import React from 'react';
import Card from './Card';

const CardList =({Robots})=>{
    const cardComp= Robots.map((user, id)=>{
        return ( <Card 
            key ={id}
             id={Robots[id].id}
             name={Robots[id].name}
             username={Robots[id].username} 
             email={Robots[id].email} 
            />
        )  
    }

    );

    return (
        <div>
           {cardComp};

        </div>
    
    );
}

export default CardList;