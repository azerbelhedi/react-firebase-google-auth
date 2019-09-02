import React , { Component } from 'react'

import authSession from '../../../database/AuthSession'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            userState : false
        }

    }

    componentWillMount(){
        this.setState({userState : authSession.getUserState()})
        authSession.addAuthListener((user) => {
            this.setState({userState : user.userState})
        })
    }

    render(){
        return(
            <div style = {{border : "1px solid black" , margin : "15px"}}>
                <center>
                    <h1>Dashboard</h1>
                    <h6 style = { this.state.userState ? {color : "green"} : {color : "red"} }>Auth</h6>
                </center>
            </div>
        )
    }
}


export default Dashboard