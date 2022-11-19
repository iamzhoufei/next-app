import { Card } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { dayjs, api } from '../../tools';
import { TWeatherResult } from '../../tools/request/path/user/types';
import WeatherComponent from '../Weather';
import styles from './index.module.scss';

const { Meta } = Card;

export type TInfoCardProps = {
    id: string;
};

type User = {
    id: string;
    city: string;
    location: { lat: string; lon: string; },
    weather: any;
}

const cardMap: { [key: string]: User } = {
    'rabbit': {
        id: 'rabbit',
        city: '约克郡',
        location: { lat: '53.9534', lon: '-0.0087' },
        weather: null,
    },
    'bear': {
        id: 'bear',
        city: '杭州市',
        location: { lat: '30.2937', lon: '120.1614' },
        weather: null,
    }
}

export default function InfoCardComponent({ id }: TInfoCardProps) {
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState<any>(null);

    const [currentUser, setCurrentUser] = useState<User>()
    const [weatherInfo, setWeatherInfo] = useState<any>()

    const handleGetWeather = useCallback(async () => {
        if (currentUser?.id) {
            const [err, res] = await api.user.getWeather<TWeatherResult>(currentUser.location);

            if (!err && res) {
                const { main, weather } = res?.data;
                setWeatherInfo({
                    main,
                    weather
                })
            }
        }
    }, [currentUser?.id, currentUser?.location])

    useEffect(() => {
        if (id && !currentUser?.id) {
            setCurrentUser(cardMap?.[id])
        }
    }, [id, currentUser])

    useEffect(() => {
        handleGetWeather();
    }, [handleGetWeather, currentUser?.id])

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    return <Card className={styles.card} loading={loading}>
        <Meta
            title={currentUser?.city}
            description={dayjs(time)?.tz(currentUser?.id === 'bear' ? 'Asia/Shanghai' : "Europe/London").format('YYYY-MM-DD HH:mm:ss')}
        />
        <div className={styles.weather}>
            <div className={styles.weathers}>
                {
                    weatherInfo?.weather?.map((item: any)=> <WeatherComponent key={item.id} weather={item?.main} />)
                }
            </div>
            {weatherInfo?.weather?.[0]?.description}
        </div>
    </Card>
} 