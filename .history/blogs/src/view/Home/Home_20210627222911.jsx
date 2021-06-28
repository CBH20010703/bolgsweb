import React, { Component } from 'react'
import "./Home.css"
import { Descriptions, Progress } from 'antd';
import { UserOutlined, QqOutlined, HomeOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons';
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
                    <Descriptions.Item label={<GlobalOutlined />} span={2}>
                        <a href="http://www.cenbohao.com/">个人博客 Vue版</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="个人技能">
                        前端 HTML5 CSS3 Javasript  Node.js
                        <br />
                        前端框架 ： Vue React

                        <br />
                        数据库 ：SQLSERVER MYSQL
                        <Progress percent={80} size="small" status="active" />
                        <br />
                        后端 ：ASP.NET .NET Core
                        <Progress percent={90} size="small" status="active" />
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                    </Descriptions.Item>
                </Descriptions>
            </div>

        )
    }
}
