// import { SvgGoogle, SvgLock } from '../components/icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import InfoCardComponent from '../components/InfoCard'
import { AppContext } from 'next/app'
import { Button, Tabs, Form, Input } from 'antd'
import { SvgSnowMan } from '../components/icons'

type TCard = {
  id: string;
  backgroundImage: string;
  time: string;
  weather: string;
}

const { Search } = Input;

export default function Home() {

  const tabs = [
    {
      label: `Google`,
      key: 'Google',
    },
    {
      label: `BaiDu`,
      key: 'BaiDu',
    },
    {
      label: `ZhiHu`,
      key: 'ZhiHu',
    },
  ];

  const [form] = Form.useForm();
  const [cards, setCards] = useState<TCard[]>([]);
  const [activeTab, setActiveTab] = useState('Google')

  useEffect(() => {
    setCards([
      {
        id: 'bear',
        backgroundImage: '',
        time: '',
        weather: ''
      },
      {
        id: 'rabbit',
        backgroundImage: '',
        time: '',
        weather: ''
      }
    ])
  }, [])

  function onFinish(values: any) {
    console.log(values);
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
        <div className={styles.left}>
          <div className={styles.cards}>
            <InfoCardComponent id='' weather='' time='' />
            {/* <SvgLock /> */}
            <InfoCardComponent id='' weather='' time='' />
          </div>

          <div className={styles.utils}></div>
        </div>
        <div className={styles.right}>

          <SvgSnowMan style={{fontSize: '20px'}} />
          <Tabs
            defaultActiveKey={activeTab}
            onChange={handleChangeTab}
            items={tabs.map(item => ({
              ...item,
              children: (
                <Form form={form} name="control-hooks" onFinish={onFinish}>
                  <Form.Item name="search" label="">
                    <Search
                      loading
                      size="large"
                      placeholder={`search in ${activeTab}`}
                      enterButton={(
                        <Button size='large' type="primary" htmlType="submit">
                          {activeTab === 'Google' ? 'Google it' : `search with ${activeTab}`}
                        </Button>
                      )}
                    />
                  </Form.Item>
                </Form>
              )
            }))}
          />

          {/* <Link href='/detail'>
            <Button>to /detail</Button>
          </Link> */}
        </div>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}

export async function getServerSideProps(context: AppContext) {

  return {
    props: {}, // will be passed to the page component as props
  }
}