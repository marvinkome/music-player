import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from 'react-native-slider';

function pad(n: number, width: number, z = 0) {
    const num = String(n) + '';
    return num.length >= width
        ? num
        : new Array(width - num.length + 1).join(String(z)) + num;
}

const minAndSec = (position: number) => [
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2)
];

export default class SeekBar extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={style.text}>0:24</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={[style.text, { width: 40 }]}>3:12</Text>
                </View>

                <Slider
                    maximumValue={30}
                    onSlidingStart={null}
                    onSlidingComplete={null}
                    value={null}
                    style={style.slider}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
                    thumbStyle={style.thumb}
                    trackStyle={style.track}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },
    text: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        textAlign: 'center'
    },
    slider: {
        marginTop: -12
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    track: {
        height: 2,
        borderRadius: 1
    }
});
