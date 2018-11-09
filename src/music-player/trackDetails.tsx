import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = { title: string; artist: string };
export default class TrackDetails extends React.Component<Props> {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity>
                    <Icon name="add-circle-outline" color="#fff" />
                </TouchableOpacity>

                <View style={style.details}>
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text style={style.artist}>{this.props.artist}</Text>
                </View>

                <TouchableOpacity>
                    <Icon
                        name="more-horiz"
                        color="#fff"
                        containerStyle={style.moreButton}
                        size={17}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 24,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20
    },
    details: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    artist: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        marginTop: 4
    },
    moreButton: {
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
        borderRadius: 10,
        width: 20,
        height: 20
    }
});
