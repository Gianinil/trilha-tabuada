import { gerarAlternativas, montarLicao } from '../gerador';
import { iniciarLicao, responder, licaoTerminou, resultado } from '../licao';

test('alternativas: 4 opcoes, sem repeticao, contendo a certa', () => {
  for (let i = 0; i < 200; i++) {
    const alts = gerarAlternativas(7, 8);
    expect(alts).toHaveLength(4);
    expect(new Set(alts).size).toBe(4);
    expect(alts).toContain('56');
  }
});

test('erro volta para o fim da fila e nao conta como primeira', () => {
  const licao = montarLicao(5, 3);
  let estado = iniciarLicao(licao);
  const r1 = responder(estado, 'resposta-errada', 1000);
  expect(r1.estado.fila).toHaveLength(3);
  expect(r1.acertou).toBe(false);
});

test('licao termina e gera estrelas', () => {
  let estado = iniciarLicao(montarLicao(2, 2));
  while (!licaoTerminou(estado)) {
    const atual = estado.fila[0];
    estado = responder(estado, atual.respostaCerta, 2000).estado;
  }
  expect(resultado(estado).estrelas).toBe(3);
});