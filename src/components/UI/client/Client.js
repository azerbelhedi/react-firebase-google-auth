import React , { Component } from 'react'
import Profile from './Profile/Profile'
import Home from './Home/Home'

class Client extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style = {{border : "1px solid black"}}>
                <h1>Client</h1>
                <div>
                    <Profile />
                    <Home />
                </div>
            </div>
        )
    }   
}

export default Client
