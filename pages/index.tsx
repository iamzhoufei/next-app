import { useEffect, useState } from 'react'
import { AppContext } from 'next/app'
import { Button, Tabs, Form, Input, Col, Row } from 'antd'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import dayjs from '../tools/dayjs'
import InfoCardComponent, { TInfoCard } from '../components/InfoCard'

import bearJson from '../public/lottie/bear.json'
import styles from './index.module.scss'
import { api } from '../tools'

const { Search } = Input;

export default function Home() {

  const tabs = [
    {
      label: `Google`,
      key: 'Google',
    },
    {
      label: `百度`,
      key: 'BaiDu',
    },
    {
      label: `知乎`,
      key: 'ZhiHu',
    },
  ];

  const [form] = Form.useForm();
  const [cards, setCards] = useState<TInfoCard[]>([]);
  const [activeTab, setActiveTab] = useState('Google')

  useEffect(() => {
    setCards([
      {
        id: 'rabbit',
        title: 'Rabbit, York, UK',
        weather: ''
      },
      {
        id: 'bear',
        title: 'Bear, HangZhou, CN',
        weather: ''
      }
    ])
  }, [])

  function onFinish(values: any) {
    console.log(values);
    const targetLink = `https://www.google.com/search?q=${values?.search || ''}`;
    // if (self) {
    //   window.location.href = targetLink;
    // } else {
    //   window.open(targetLink);
    // }
    window.location.href = targetLink;
  };

  function onReset() {
    form.resetFields();
  };

  function handleChangeTab(key: string) {
    setActiveTab(key)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row justify="center">
          <Col span={12}>
            <div className={styles.center}>
              <Player
                loop
                autoplay
                speed={0.5}
                src={bearJson}
                style={{ width: '200px' }}
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
              <Tabs
                defaultActiveKey={activeTab}
                onChange={handleChangeTab}
                items={tabs.map(item => ({
                  ...item,
                  children: (
                    <Form form={form} name="search_form" onFinish={onFinish}>
                      <Form.Item name="search" label="">
                        <Search
                          loading
                          allowClear
                          size="large"
                          placeholder={`search in ${activeTab}`}
                          enterButton={(
                            <Button size='large' type="primary" htmlType="submit">
                              {activeTab === 'Google' ? 'Google it' : `在${tabs.filter(item => item.key === activeTab)[0].label}中搜索`}
                            </Button>
                          )}
                        />
                      </Form.Item>
                    </Form>
                  )
                }))}
              />
            </div>
          </Col>
        </Row>

        <Row justify="center">
          <Col flex='1' span={6}>
            <InfoCardComponent {...cards[0]} />
          </Col>
          <Col flex='1' span={6}>
            <InfoCardComponent {...cards[1]} />
          </Col>
        </Row>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}