export function calcularEstrelas(
  acertosPrimeira: number,
  total: number,
  tempoMedioMs: number,
): 1 | 2 | 3 {
  const taxa = acertosPrimeira / total;
  if (taxa === 1 && tempoMedioMs < 4000) return 3;
  if (taxa >= 0.7) return 2;
  return 1;
}
