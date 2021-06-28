import React, { Component } from 'react'
import "./Home.css"
import { Descriptions } from 'antd';
import { UserOutlined, QqOutlined, HomeOutlined, GithubOutlined, GlobalOutlined, Html5Outlined } from '@ant-design/icons';
export default class Home extends Component {

    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (

            <div style={{ padding: "20px" }}>
                <Descriptions title="About Me">
                    <Descriptions.Item label={<UserOutlined />}>C</Descriptions.Item>
                    <Descriptions.Item label={<QqOutlined />}>47790293</Descriptions.Item>
                    <Descriptions.Item label={<HomeOutlined />}>河南 信阳</Descriptions.Item>
                    <Descriptions.Item label={<GithubOutlined />}><a href="https://github.com/CBH20010703"  >Git地址</a></Descriptions.Item>
                    <Descriptions.Item label={<GlobalOutlined />} span={2}>
                        <a href="http://www.cenbohao.com/">个人博客 Vue版</a>
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions title="Blog Technology Selection">
                    <Descriptions.Item span={3} label="前端"></Descriptions.Item>
                    <Descriptions.Item span={3} label="后端"> <Html5Outlined />47790293</Descriptions.Item>
                    <Descriptions.Item span={3} label="数据库">河南 信阳</Descriptions.Item>

                </Descriptions>
            </div>

        )
    }
}
