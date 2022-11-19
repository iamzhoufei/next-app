import { useState } from 'react'
import { Button, Tabs, Form, Input, Col, Row } from 'antd'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import InfoCardComponent from '../components/InfoCard'

import bearJson from '../public/lottie/bear.json'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/types/store'

const { Search } = Input;

export default function Home() {

  const tabs = [
    {
      label: `Google`,
      key: 'Google',
    },
    {
      label: `GitHub`,
      key: 'GitHub',
    },
    {
      label: `MDN`,
      key: 'MDN',
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
  const [activeTab, setActiveTab] = useState('Google')

  const dispatch = useDispatch();
  const { isInfoCardShow } = useSelector((state: RootState) => {
    return state.global.setting;
  });

  console.log(`isInfoCardShow: ${isInfoCardShow}`)

  function onFinish(values: any) {
    let targetLink = '';
    switch (activeTab) {
      case 'Google':
        targetLink = `https://www.google.com/search?q=${values?.search || ''}`
        break;
      case 'MDN':
        targetLink = `https://developer.mozilla.org/zh-CN/search?q=${values?.search || ''}`
        break;
      case 'GitHub':
        targetLink = `https://github.com/search?q=${values?.search || ''}`
        break;
      case 'BaiDu':
        targetLink = `https://www.baidu.com/s?wd=${values?.search || ''}`
        break;
      case 'ZhiHu':
        targetLink = `https://www.zhihu.com/search?type=content&q=${values?.search || ''}`
        break;
      default:
        break;
    }
    window.location.href = targetLink;
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
                          autoFocus
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

        {
          isInfoCardShow
            ? <Row justify="center">
              <Col flex='1' span={6}>
                <InfoCardComponent id='rabbit' />
              </Col>
              <Col flex='1' span={6}>
                <InfoCardComponent id='bear' />
              </Col>
            </Row>
            : null
        }
      </div>
    </div>
  )
}