import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BotaoCartoon } from '../components/BotaoCartoon';
import { cores, espacos } from '../theme';

export function TelaInicio({ aoJogar }: { aoJogar: () => void }) {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Trilha da Tabuada</Text>
      <BotaoCartoon titulo="JOGAR" onPress={aoJogar} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    gap: espacos.m,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: cores.branco,
    marginBottom: espacos.s,
  },
});