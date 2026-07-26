import { Exercicio } from "./tipos";

const sorteio = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const embaralhar = <T>(lista: T[]): T[] =>
  [...lista].sort(() => Math.random() - 0.5);

export function gerarAlterntivas(a: number, b: number): string[] {
  const certa = a * b;
  const candidatas = new Set<number>();
  while (candidatas.size < 3) {
    const erros = [
      certa + a,
      certa - a,
      certa + b,
      certa - b,
      a * (b + 1),
      a * (b - 1),
      certa + sorteio(1, 3),
    ];
    const e = erros[sorteio(0, erros.length - 1)];
    if (e != certa && e > 0) candidatas.add(e);
  }
  return embaralhar([certa, ...candidatas]).map(String);
}

export function gerarExercicio(tabuada: number): Exercicio {
  const b = sorteio(1, 10);
  const certa = tabuada * b;
  const tipo = (["multipla", "digitar", "vf"] as const)[sorteio(0, 2)];
  const id = `${tabuada}x${b}-${sorteio(1000, 9999)}`;

  if (tipo === "multipla")
    return {
      id,
      tipo,
      enunciado: `${tabuada} x ${b}`,
      respostaCerta: String(certa),
      alternativas: gerarAlterntivas(tabuada, b),
    };

  if (tipo === "digitar")
    return {
      id,
      tipo,
      enunciado: `${tabuada} x ${b}`,
      respostaCerta: String(certa),
    };

  const mentira = certa + sorteio(1, 2) * (sorteio(0, 1) ? 1 : -1);
  const mostrado = sorteio(0, 1) ? certa : mentira;
  return {
    id,
    tipo,
    enunciado: `${tabuada} x ${b} = ${mostrado}`,
    respostaCerta: mostrado === certa ? "V" : "F",
  };
}

export function montarLicao(tabuada: number, qtd = 10): Exercicio[] {
  return Array.from({ length: qtd }, () => gerarExercicio(tabuada));
}
