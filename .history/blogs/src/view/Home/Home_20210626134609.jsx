import React, { Component } from 'react'
import { Skeleton, Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./Home.css"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
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

        return (
            <div >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <Skeleton>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Skeleton>
                    </Col>

                </Row>

            </div>
        )
    }
}
