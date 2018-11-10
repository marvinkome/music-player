import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
    paused: boolean;
    pause: () => void;
    play: () => void;
};
export default class Controls extends React.Component<Props> {
    render() {
        return (
            <View style={style.container}>
                {/* shuffle */}
                <TouchableOpacity disabled={true}>
                    <Icon
                        name="shuffle"
                        color="#fff"
                        size={18}
                        iconStyle={[{ opacity: 0.3 }]}
                    />
                </TouchableOpacity>

                <View style={{ width: 40 }} />

                {/* back */}
                <TouchableOpacity disabled={true}>
                    <Icon
                        name="skip-previous"
                        color="#fff"
                        size={36}
                        iconStyle={[{ opacity: 0.3 }]}
                    />
                </TouchableOpacity>

                <View style={{ width: 20 }} />

                {/* play.pause */}
                {this.props.paused ? (
                    <TouchableOpacity onPress={this.props.play}>
                        <View style={style.playButton}>
                            <Icon name="play-arrow" color="#fff" size={48} />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={this.props.pause}>
                        <View style={style.playButton}>
                            <Icon name="pause" color="#fff" size={48} />
                        </View>
                    </TouchableOpacity>
                )}

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
                <TouchableOpacity disabled={true}>
                    <Icon
                        name="repeat"
                        color="#fff"
                        size={18}
                        iconStyle={[{ opacity: 0.3 }]}
                    />
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
