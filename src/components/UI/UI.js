import React , { Component } from 'react'

import Admin from './admin/Admin'
import Client from './client/Client'
import AuthUI from './standard/authUI/AuthUI'

class UI extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style = {{backgroundColor : "white" , border : "1px solid black" , margin : "15px"}}>
                <center>
                    <h1>UI</h1>
                </center>
                <AuthUI />
                <div style = {{display : "flex" , backgroundColor : "whitesmoke"}}>
                    <div style = {{width : "50%"}}>
                        <Admin />
                    </div>
                    <div style = {{width : "50%"}}>
                        <Client />
                    </div>
                </div>
            </div>
        )
    }
}

export default UI 