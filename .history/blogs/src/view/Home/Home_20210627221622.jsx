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
                    <Descriptions.Item label={<QqOutlined />}>1810000000</Descriptions.Item>
                    <Descriptions.Item label={<HomeOutlined />}>https://github.com/CBH20010703</Descriptions.Item>
                    <Descriptions.Item label={<GithubOutlined />}>empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </div>

        )
    }
}
