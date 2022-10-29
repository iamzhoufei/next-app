import { Card, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const { Meta } = Card;

type TInfoCard = {
    id: string;
    weather: string;
    time: string;
};

export default function InfoCardComponent(props: TInfoCard) {

    const [loading, setLoading] = useState(!props.id);

    useEffect(() => {
        if (props.id) setLoading(false)
    }, [props.id])

    return <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
        />
    </Card>
}