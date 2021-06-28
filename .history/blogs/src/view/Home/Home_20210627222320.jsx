import React, { Component } from 'react'
import "./Home.css"
import { Descriptions } from 'antd';
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
                    <Descriptions.Item label="Config Info">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
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
