import {StyleSheet, Text, View} from "react-native";

type Props = {
    original: string;
    translation: string;
};

export default function Lyric({original, translation}: Props) {
    return (
        <View style={styles.lyric}>
            <Text style={styles.lyricOriginal}>{original}</Text>
            <Text style={styles.lyricTranslation}>{translation}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    lyric: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    lyricOriginal: {
        color: 'white',
        fontSize: 28,
        fontWeight: "900",
        marginBottom: 5,
    },
    lyricTranslation: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
    },
});