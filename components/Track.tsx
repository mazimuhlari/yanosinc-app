import {Image, Platform, StyleSheet, Text, View} from "react-native";

export default function Track(){
    return(
        <View style={styles.track}>
            <Image style={styles.trackImage} source={{uri: 'https://e-cdns-images.dzcdn.net/images/cover/235d19f726859e6448c3bab5b3e942d3/500x500-000000-80-0-0.jpg'}} />
            <View style={styles.trackMeta}>
                <Text style={styles.trackMetaTitle}>Amalobolo</Text>
                <Text style={styles.trackMetaArtist}>Kelvin Momo & Babalwa M</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        flexDirection: "row",
    },
    trackImage: {
        width: 70,
        height: 70,
        marginRight: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    trackMeta: {
        justifyContent: "center",
    },
    trackMetaTitle: {
        fontSize: 18,
        fontWeight: "900",
        color: 'white',
    },
    trackMetaArtist: {
        fontSize: 18,
        color: 'white',
    },
});