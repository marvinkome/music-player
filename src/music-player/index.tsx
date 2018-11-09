import * as React from 'react';
import Background from '../components/backgroundImage';
import { View, Text, StyleSheet } from 'react-native';

import Header from './header';

export default class MusicPlayer extends React.Component {
    render() {
        return (
            <Background src={require('../static/trench.jpeg')}>
                <Header message="Playing from charts" subtitle="Dance Rewind" />
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    view: { flex: 1, backgroundColor: 'rgba(4, 4, 4, 0.7)' },
    text: { color: 'white' }
});
