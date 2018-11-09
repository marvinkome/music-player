import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MusicScreen extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: { flex: 1, backgroundColor: 'rgb(4, 4, 4)' },
    text: { color: 'white' }
});
