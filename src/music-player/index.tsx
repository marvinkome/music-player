import * as React from 'react';
import Background from '../components/backgroundImage';
import { View, Text, StyleSheet } from 'react-native';

import Header from './header';
import CoverArt from './coverArt';
import TrackDetails from './trackDetails';
import SeekBar from './seekBar';
import Controls from './controls';

export default class MusicPlayer extends React.Component {
    render() {
        return (
            <Background src={require('../static/trench.jpeg')}>
                <Header message="Playing from album" subtitle="Trench" />
                <CoverArt src={require('../static/trench.jpeg')} />
                <TrackDetails title="Morph" artist="Twenty One Pilots" />
                <SeekBar />
                <Controls />
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    view: { flex: 1, backgroundColor: 'rgba(4, 4, 4, 0.7)' },
    text: { color: 'white' }
});
