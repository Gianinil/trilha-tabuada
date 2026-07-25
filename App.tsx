import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TelaInicio } from './src/screens/TelaInicio';

export default function App() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Trilha da Tabuada</Text>

      <Pressable
        style={styles.botao}
        onPress={() => alert("Em breve: o jogo!")}
      >
        <Text style={styles.textoBotao}>JOGAR</Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#4F46E5",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 48,
    textAlign: 'center',

  },
  botao: {
    backgroundColor: "#FACC15",
    paddingVertical: 20,
    paddingHorizontal: 64,
    borderRadius: 32,
    borderBottomWidth: 8,
    borderBottomColor: "#CA8A04",
  },
  textoBotao: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#422006",
  },
});
