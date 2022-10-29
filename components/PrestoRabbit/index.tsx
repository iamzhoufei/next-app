import { createRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styles from './index.module.scss';

export default function PrestoRabbit() {
    const lottieRef = createRef<Player>();

    function handlePlay() {
        lottieRef.current?.play?.()
    }

    function handlePause() {
        lottieRef.current?.pause?.()
    }

    return <div
        className={styles.container}
        onMouseOver={handlePlay}
        onMouseLeave={handlePause}
        onClick={() => window.open('https://rabbit.3055.io')}
    >
        <Player
            ref={lottieRef}
            className={styles.lottie}
            src="https://assets9.lottiefiles.com/packages/lf20_JvPPeJ.json"
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </div>
}