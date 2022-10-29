import { useState } from "react";
import { Button } from "antd";

import { Player, Controls } from "@lottiefiles/react-lottie-player"

export default function NotFoundPage() {
    const [isOperationShow, setIsOperationShow] = useState(false);
    return <div>
        <Player
            loop
            autoplay
            src="https://assets9.lottiefiles.com/packages/lf20_6nmazhqu.json"
            style={{ width: '40vw' }}
            onEvent={event => {
                if (event === 'load') {
                    setIsOperationShow( true)
                }
            }}
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>

        {
            isOperationShow ? <>
                <h2>Oops, there is an error!</h2>
                <Button onClick={() => location.href = '/'}>回到首页</Button>
            </> : null
        }

    </div>
}