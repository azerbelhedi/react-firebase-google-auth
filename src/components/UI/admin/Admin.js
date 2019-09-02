import React , { Component } from 'react'

import Products from './Products/Products'
import Dashboard from './Dashboard/Dashbord'

class Admin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style = {{border : "1px solid black"}}>
                <h1>Admin</h1>
                <Dashboard />
                <Products />
            </div>
        )
    }
}

export default Admin 