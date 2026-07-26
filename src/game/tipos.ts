export type TipoExercicio = "multipla" | "digitar" | "vf";

export type Exercicio = {
  id: string;
  tipo: TipoExercicio;
  enunciado: string;
  respostaCerta: string;
  alternativas?: string[];
};

export type ResultadoLicao = {
  acertosPrimeira: number;
  total: number;
  tempoMedioMs: number;
  estrelas: 1 | 2 | 3;
};
