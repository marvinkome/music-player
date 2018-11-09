import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

type Props = { src: ImageSourcePropType };

export default class BackgroundImage extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <Image source={this.props.src} style={style.background} />
                <View style={style.bgOverlay} />
                <View style={StyleSheet.absoluteFillObject}>
                    {this.props.children}
                </View>
            </React.Fragment>
        );
    }
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    bgOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    }
});
