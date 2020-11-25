import React, { Component } from 'react'
import PersonCard from './PersonCard';

export default class Person extends Component{

    state = {
        people: [
            {
                id: 1,
                name: 'sunil',
                age: 20,
                location: 'bangalore'
            },
            {
                id: 2,
                name: 'anil',
                age: 30,
                location: 'chennai'
            },
            {
                id: 3,
                name: 'joydip',
                age: 40,
                location: 'mumbai'
            }
        ]
    }

    // working code expaination for other below code
    createPersonCard = (p) => {
        return  <PersonCard person={p}></PersonCard>;
     }
     render() {
         let personcardArray = this.state.people.map(this.createPersonCard);
         return (
             <div>{
                 personcardArray
                  }
             </div>
         );
     }

    render() {

        return (
            <div>
                {
                    this.state.people.map(
                        (p) => {
                            return <PersonCard person={p} />
                        }
                    )
                }
            </div>
        );
    }
    
}