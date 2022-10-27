import React, { ErrorInfo } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Button } from "@mui/material";


type ErrorBoundaryProps = {
    children: React.ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    showOperation: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false,
            showOperation: false
        }
    }
    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI

        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can use your own error logging service here
        console.log({ error, errorInfo })
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <Player
                        loop
                        autoplay
                        src="https://assets1.lottiefiles.com/packages/lf20_q4h79bkv.json"
                        style={{ width: '50vw' }}
                        onEvent={event => {
                            if (event === 'load') {
                                this.setState({
                                    showOperation: true,
                                })
                            }
                        }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>

                    {
                        this.state.showOperation ? <>
                            <Box component='h2' textAlign='center'>Oops, there is an error!</Box>
                            <Box textAlign='center' >
                                <Button variant="contained" onClick={() => location.href = '/'}>回到首页</Button>
                            </Box>
                        </> : null
                    }
                    
                </div>
            )
        }

        // Return children components in case of no error
        return this.props.children
    }
}

export default ErrorBoundary;