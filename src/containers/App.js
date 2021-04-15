import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
    constructor(){
        // declare State
        
        super()
        this.state={
            
                Robots: [],
                searchfield: ''
                
            }

        }
        //on searching , we exute this function
    onSearch=(event)=>{
        //like dom
        this.setState({searchfield:event.target.value});
        console.log(event.target.value);
        // now we have the values, lets communicate with the cardlist
        


    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users =>  this.setState({Robots: users}));
        
        
    }

    render() { 
        
        const filterRobots = this.state.Robots.filter(Robots=>{
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

        })

        if(this.state.Robots.length===0){
           return  <h1 className='tc'>Loadinggg....</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1>
                        ROBO FRIENDS
                    </h1>
                    <SearchBox search={this.onSearch}/>
                    <Scroll>
                        <CardList Robots={filterRobots}/>
                    </Scroll>
                    
                </div>
            );
    

        }
        
        
    }
}


export default App;
