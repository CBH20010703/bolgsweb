import React, { Component } from 'react'

import "./Home.css"
export default class Home extends Component {
  
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div style={{ padding: "20px" }}>
                s首页
            </div>
        )
    }
}
