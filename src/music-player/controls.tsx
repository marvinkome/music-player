import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Controls extends React.Component {
    render() {
        return (
            <View style={style.container}>
                {/* shuffle */}
                <TouchableOpacity>
                    <Icon name="shuffle" color="#fff" size={18} />
                </TouchableOpacity>

                <View style={{ width: 40 }} />

                {/* back */}
                <TouchableOpacity>
                    <Icon name="skip-previous" color="#fff" size={36} />
                </TouchableOpacity>

                <View style={{ width: 20 }} />

                {/* play.pause */}
                <TouchableOpacity>
                    <View style={style.playButton}>
                        <Icon name="play-arrow" color="#fff" size={48} />
                    </View>
                </TouchableOpacity>

                <View style={{ width: 20 }} />

                {/* next */}
                <TouchableOpacity disabled={true}>
                    <Icon
                        name="skip-next"
                        color="#fff"
                        size={36}
                        iconStyle={[{ opacity: 0.3 }]}
                    />
                </TouchableOpacity>

                <View style={{ width: 40 }} />

                {/* repeat */}
                <TouchableOpacity>
                    <Icon name="repeat" color="#fff" size={18} />
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8
    },
    disabled: {
        opacity: 0.3
    },
    playButton: {
        height: 72,
        width: 72,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
