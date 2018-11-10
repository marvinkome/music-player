import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

type Props = { message: string; subtitle: string };
export default class Head extends React.Component<Props> {
    renderLeft() {
        return (
            <TouchableOpacity>
                <Icon name="keyboard-arrow-down" color="#fff" />
            </TouchableOpacity>
        );
    }

    renderMessage() {
        return (
            <View>
                <Text style={style.message}>
                    {this.props.message.toUpperCase()}
                </Text>
                <Text style={style.subMessage}>{this.props.subtitle}</Text>
            </View>
        );
    }

    renderRight() {
        return (
            <TouchableOpacity>
                <Icon name="queue-music" color="#fff" />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Header
                statusBarProps={{
                    translucent: true,
                    backgroundColor: 'transparent'
                }}
                leftComponent={this.renderLeft()}
                centerComponent={this.renderMessage()}
                rightComponent={this.renderRight()}
                outerContainerStyles={style.outerHeader}
            />
        );
    }
}

const style = StyleSheet.create({
    outerHeader: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },
    message: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 11
    },
    subMessage: {
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        fontSize: 13
    }
});
