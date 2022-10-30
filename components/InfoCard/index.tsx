import { Card, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { dayjs, api } from '../../tools';
import styles from './index.module.scss';

const { Meta } = Card;

export type TInfoCard = {
    id: string;
    title: string;
    weather: string;
    // time: string;
};

export default function InfoCardComponent({ id, title }: TInfoCard) {
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState<any>(null);

    // useEffect(() => {
    //     if (props.id) setLoading(false)
    // }, [props.id])

    async function handleGetWeather() {
        const [err, result] = await api.user.getWeather({ lat: '53.96', lon: '-1.07' })
        console.log(`===========result==============`);
        console.log(result);
    }

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    useEffect(() => {
        handleGetWeather()
    }, [])

    return <Card className={styles.card} loading={loading}>
        <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={title}
            description={dayjs(time)?.tz(id === 'bear' ? 'Asia/Shanghai' : "Europe/London").format('YYYY-MM-DD HH:mm:ss')}
        />
    </Card>
}