import React, { Component } from 'react'
import "./Home.css"
import { Descriptions } from 'antd';
import { UserOutlined, QqOutlined, HomeOutlined, GithubOutlined } from '@ant-design/icons';
export default class Home extends Component {

    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (

            <div style={{ padding: "20px" }}>
                <Descriptions title="About Me">
                    <Descriptions.Item label={<UserOutlined />}>岑博豪</Descriptions.Item>
                    <Descriptions.Item label={<QqOutlined />}>47790293</Descriptions.Item>
                    <Descriptions.Item label={<HomeOutlined />}>河南 信阳</Descriptions.Item>
                    <Descriptions.Item label={<GithubOutlined />}><a href="https://github.com/CBH20010703"  >Git地址</a></Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </div>

        )
    }
}
