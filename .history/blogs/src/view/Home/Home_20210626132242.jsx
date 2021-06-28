import React, { Component } from 'react'
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import "./Home.css"
export default class Home extends Component {
    const { Meta } = Card;
handleClick = e => {
    console.log('click ', e);
};
render() {
    return (
        <div >
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </div>
    )
}
}
