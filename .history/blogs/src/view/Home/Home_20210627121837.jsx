import React, { Component } from 'react'
import viewcontext from '../../view';
import "./Home.css"
export default class Home extends Component {
  
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <viewcontext>
                    <div style={{ padding: "20px" }}>
                        s首页
                    </div>
            </viewcontext>
            
        )
    }
}
