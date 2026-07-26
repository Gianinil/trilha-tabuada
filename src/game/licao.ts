import { Exercicio, ResultadoLicao } from "./tipos";
import { calcularEstrelas } from "./pontuacao";

export type EstadoLicao = {
  fila: Exercicio[];
  respondidos: number;
  acertosPrimeira: number;
  emRevisao: Set<string>;
  tempos: number[];
  totalOriginal: number;
};

export function iniciarLicao(exercicios: Exercicio[]): EstadoLicao {
  return {
    fila: [...exercicios],
    respondidos: 0,
    acertosPrimeira: 0,
    emRevisao: new Set(),
    tempos: [],
    totalOriginal: exercicios.length,
  };
}

export const exercicioAtual = (e: EstadoLicao) => e.fila[0] ?? null;
export const licaoTerminou = (e: EstadoLicao) => e.fila.length === 0;

export function responder(
  estado: EstadoLicao,
  resposta: string,
  tempoMs: number,
): { estado: EstadoLicao; acertou: boolean } {
  const atual = estado.fila[0];
  const acertou = resposta === atual.respostaCerta;
  const fila = estado.fila.slice(1);
  const emRevisao = new Set(estado.emRevisao);
  let acertosPrimeira = estado.acertosPrimeira;

  if (acertou) {
    if (!emRevisao.has(atual.id)) acertosPrimeira += 1;
  } else {
    emRevisao.add(atual.id);
    fila.push(atual);
  }
  return {
    acertou,
    estado: {
      ...estado,
      fila,
      emRevisao,
      acertosPrimeira,
      respondidos: estado.respondidos + 1,
      tempos: [...estado.tempos, tempoMs],
    },
  };
}

export function resultado(e: EstadoLicao): ResultadoLicao {
  const tempoMedioMs =
    e.tempos.reduce((soma, t) => soma + t, 0) / Math.max(1, e.tempos.length);
  return {
    acertosPrimeira: e.acertosPrimeira,
    total: e.totalOriginal,
    tempoMedioMs,
    estrelas: calcularEstrelas(
      e.acertosPrimeira,
      e.totalOriginal,
      tempoMedioMs,
    ),
  };
}
