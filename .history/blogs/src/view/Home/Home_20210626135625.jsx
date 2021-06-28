import React, { Component } from 'react'
import { Skeleton, Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./Home.css"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            arrayMap: [1, 2, 3, 4, 5, 6, 7]
        }
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        const { Meta } = Card;
        let { loading } = this.state;
        let ColCard = () => {
            return this.state.arrayMap.map(item => {
                return item
            })
        }
        return (
            <div style={{ padding: "20px" }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                    {ColCard}
                </Row>

            </div>
        )
    }
}
