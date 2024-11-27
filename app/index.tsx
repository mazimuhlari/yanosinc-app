import {Text, View, StyleSheet, Image, SafeAreaView, FlatList, Platform} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Track from "@/components/Track";
import Lyric from "@/components/Lyric";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Stack} from "expo-router";
import Slider from '@react-native-community/slider';

const SONG = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        original: 'Wela wela ngaphesheya',
        translation: 'Cross, cross over',
    },
    {
        id: 'cbc6b150-fff8-4482-a1b8-dd7df647ecad',
        original: 'Sizofika nini na?',
        translation: 'When will we arrive?',
    },
    {
        id: '40ac9b97-68fc-4cee-abcc-16c8795db820',
        original: 'Ngoba ngilokhu ngik\'indile',
        translation: 'Because I\'ve been waiting here',
    },
    {
        id: 'b6f072b8-2b19-4077-a0fe-1b4b729e79b1',
        original: 'Awungi cingi wena na?',
        translation: 'Don\'t you think about me?',
    },
    {
        id: '7f013503-75dd-42c9-98e0-969aacf37cb7',
        original: 'Bheka la ngikubukile',
        translation: 'Look, I\'ve been watching you',
    },
    {
        id: 'dce6e9ad-b604-4bff-995e-1e20251451f0',
        original: 'Aw\' welele',
        translation: 'You won\'t cross over',
    },
    {
        id: '344c6b9e-ad64-402b-a6f4-fa7afeb637da',
        original: 'Kutheni ngathi uzozifihla',
        translation: 'Why does it seem like you\'re hiding?',
    },
    {
        id: 'f7492c2b-2ffa-4137-aedc-eddbecc41330',
        original: 'Aw\'ziveze',
        translation: 'Won\'t you reveal yourself?',
    },
    {
        id: '852b9f6b-51c2-49f8-86e5-1468411f1105',
        original: 'Thumela imali yamalobolo',
        translation: 'Send the lobola money',
    },
    {
        id: '411db6e2-731d-4cd1-8e0d-b4da213f53b0',
        original: 'Bakikize',
        translation: 'Let them ululate',
    },
    {
        id: 'fc047f7d-715c-460e-805e-30077b2784b3',
        original: 'Hii hii, hii, hii',
        translation: 'Hii hii, hii, hii',
    },
    {
        id: '8b961fd4-f7b2-4bf4-a5b2-9b13be19273a',
        original: 'Hii hii, hii, hii',
        translation: 'Hii hii, hii, hii',
    },
    {
        id: 'eceb2ba4-2060-4c95-ba15-8134574dffb5',
        original: 'Hii hii, hii, hii',
        translation: 'Hii hii, hii, hii',
    },
    {
        id: '6495181a-eb61-4b3d-9486-6b1f9a16e232',
        original: 'Hii hii, hii, hii',
        translation: 'Hii hii, hii, hii',
    },
    {
        id: '834e7f3a-3ef1-4aa8-b1da-afc395de8874',
        original: 'Nga thab\'ukuthi, khawuz\'veze',
        translation: 'It makes me happy, please show yourself',
    },
    {
        id: '19cf282a-ca23-4eb0-a86a-41c94cf1f801',
        original: 'Hayahaha\'khawuvele',
        translation: 'Hayahaha, please come out',
    },
    {
        id: '5ebfdcbc-c6ae-43a8-95a8-39b60cb73047',
        original: 'Yizw\'omalume bakumele',
        translation: 'Listen, your uncles are waiting for you',
    },
    {
        id: '190c22b7-b008-46f6-afa4-b9203c83bb7c',
        original: 'Hayahaha\'bakumele',
        translation: 'Hayahaha, they\'re waiting',
    },
];

export default function Index() {
    return (
        <>
            <Stack.Screen options={{headerShown: false}}/>
            <LinearGradient
                colors={['#e74c3c', '#8f2b21']}
                style={styles.container}>
                <Track/>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <FlatList
                            style={{marginTop: 20, marginBottom: 20}}
                            data={SONG}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <Lyric original={item.original} translation={item.translation}/> }/>
                    </SafeAreaView>
                </SafeAreaProvider>
                <View style={styles.controls}>
                    <Slider
                        style={[
                            styles.controlsSlider,
                        ]}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000" />
                </View>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 80,
                paddingBottom: 40,
                paddingLeft: 40,
                paddingRight: 40,
            },
            android: {
                padding: 40,
            },
        }),
    },
    controls: {},
    controlsSlider: {},
});