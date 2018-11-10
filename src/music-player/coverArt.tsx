import * as React from 'react';
import { View, ImageURISource, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';

type Props = { src: ImageURISource };
export default class CoverArt extends React.Component<Props> {
    render() {
        return (
            <View style={style.container}>
                <Avatar
                    source={this.props.src}
                    width={width - padding * 2}
                    height={width - padding * 2}
                />
            </View>
        );
    }
}

const padding = 60;
const { width } = Dimensions.get('window');
const style = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingLeft: padding,
        paddingRight: padding
    }
});
