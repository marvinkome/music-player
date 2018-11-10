import * as React from 'react';
import Video, { VideoProperties, OnLoadData } from 'react-native-video';
import { View, Text, StyleSheet } from 'react-native';

import Background from '../components/backgroundImage';

import Header from './header';
import CoverArt from './coverArt';
import TrackDetails from './trackDetails';
import SeekBar from './seekBar';
import Controls from './controls';

const song = {
    audioUrl: require('../static/morph.mp3'),
    title: 'Morph',
    artist: 'Twenty One Pilots',
    album: 'Trench',
    coverArt: require('../static/trench.jpeg')
};

type state = {
    paused: boolean;
    totalLength: number;
    currentPosition: number;
};

export default class MusicPlayer extends React.Component<{}, state> {
    videoRef: React.RefObject<Video> = React.createRef();
    state = {
        paused: true,
        totalLength: 1,
        currentPosition: 0
    };

    togglePause = () => {
        this.setState((ps) => ({ paused: !ps.paused }));
    };
    setDuration = (data: OnLoadData) => {
        this.setState({ totalLength: Math.floor(data.duration) });
    };

    setTime = (data: any) => {
        this.setState({ currentPosition: Math.floor(data.currentTime) });
    };

    seek = (time: number) => {
        this.setState({ paused: true }, () => {
            time = Math.round(time);
            this.videoRef.current && this.videoRef.current.seek(time);
            this.setState({ currentPosition: time, paused: false });
        });
    };

    renderPlayer() {
        return (
            <Video
                source={song.audioUrl}
                ref={this.videoRef}
                paused={this.state.paused}
                style={{ width: 0, height: 0 }}
                onLoad={this.setDuration}
                onProgress={this.setTime}
            />
        );
    }
    render() {
        return (
            <Background src={song.coverArt}>
                <Header message="Playing from album" subtitle={song.album} />
                <CoverArt src={song.coverArt} />
                <TrackDetails title={song.title} artist={song.artist} />
                <SeekBar
                    currentPosition={this.state.currentPosition}
                    trackLength={this.state.totalLength}
                    onSeek={this.seek}
                />
                <Controls
                    paused={this.state.paused}
                    togglePause={this.togglePause}
                />
                {this.renderPlayer()}
            </Background>
        );
    }
}
