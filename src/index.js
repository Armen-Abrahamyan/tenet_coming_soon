import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import video from './Media/video.mp4'

function App() {
    return (
        <div>
            <video
                autoPlay playsInline autostart="true"
                src={video} type="video/mp4"
                muted={true} className='app'
            />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);