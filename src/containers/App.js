import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App (){
    const [robots, setRobots]= useState([]);
    const[searchfield, setSearchfield]=useState('');

    
        //on searching , we exute this function
    const onSearch=(event)=>{
        //like dom
        setSearchfield(event.target.value);
        console.log(event.target.value);
        // now we have the values, lets communicate with the cardlist
        


    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users =>  setRobots(users));

    },[] )

    
        
        const filterRobots = robots.filter(Robots=>{
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase());

        })

        if(robots.length===0){
           return  <h1 className='tc'>Loadinggg....</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1>
                        ROBO FRIENDS
                    </h1>
                    <SearchBox search={onSearch}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList Robots={filterRobots}/>
                        </ErrorBoundry>
                        
                    </Scroll>
                    
                </div>
            );
    

        }
        
        
    }



export default App;
