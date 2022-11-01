import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
export default function WeatherComponent({ weather }: { weather: any }) {
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (weather) {
            switch (weather) {
                case 'Clear':
                    setUrl('https://assets1.lottiefiles.com/packages/lf20_xlky4kvh.json')
                    break;
                case 'Clouds':
                    setUrl('https://assets5.lottiefiles.com/packages/lf20_trr3kzyu.json')
                    break;    

                default:
                    break;
            }
        }
    }, [weather])
    return <Player
        loop
        autoplay
        src={url}
        style={{ width: '75px' }}
    >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
}