import { Pressable, Text, StyleSheet } from "react-native";
import { cores, raios } from "../theme";

type Props = {
  titulo: string;
  onPress: () => void;
  cor?: 'amarelo' | 'verde';
  tamanho?: 'grande' | 'medio';
};

const PALETA = {
  amarelo: { fundo: cores.amarelo, sombra: cores.amareloEscuro },
  verde: { fundo: cores.verde, sombra: cores.verdeEscuro },
};

export function BotaoCartoon({
  titulo, onPress, cor = 'amarelo', tamanho = 'grande',
}: Props) {
  const p = PALETA[cor];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: p.fundo,
          borderBottomColor: p.sombra,
          paddingVertical: tamanho === 'grande' ? 20 : 14,
          paddingHorizontal: tamanho === 'grande' ? 64 : 40,
          borderBottomWidth: pressed ? 2 : 8,
          transform: [{ translateY: pressed ? 6 : 0 }],
        },
      ]}
    >
      <Text style={[styles.texto, { fontSize: tamanho === 'grande' ? 28 : 20 }]}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: raios.botao, alignItems: 'center' },
  texto: { fontWeight: 'bold', color: cores.textoEscuro },
});