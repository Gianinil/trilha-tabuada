import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BotaoCartoon } from '../components/BotaoCartoon';
import { cores, espacos } from '../theme';

export function TelaInicio({ aoJogar }: { aoJogar () => void}) {
    return (
        <View style={Styles.tela}></View> 
        <Text style={Styles.titulo}>Trilha da Tabuada</Text>
        <BotaoCartoon titulo="JOGAR" onPress={aoJogar}></BotaoCartoon>
    );
}