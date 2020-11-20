import React from 'react';
import axios from 'axios';


class MainContent extends React.Component {
    constructor(){
        super();
        this.state ={
            inventory:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/')
            .then(data=>{
                console.log(data.data.Sheet1);
                this.setState({
                    inventory: data.data.Sheet1
                })
                
            })
    }
    render(){
        if(!this.state.inventory){
            return(
                <div>Loading</div>
            );
        }
        const itemList = this.state.inventory;
        console.log("HIIII",itemList);
        return (
            <div>
                MainContent
                     <ul>
                        {itemList.map(item=>
                        <li key={item.A}>{item.A}</li>
                        )}
                    </ul> 

            </div>
        );
    }
};

export default MainContent;