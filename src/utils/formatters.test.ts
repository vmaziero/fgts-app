import { formatPhone } from './formatters';

describe('formatPhone', () => {
  test('Formata corretamente número de celular com 9 dígitos', () => {
    const input = '11987654321';
    const result = formatPhone(input);

    expect(result).toEqual({
      raw: '11987654321',
      formatted: '(11) 98765-4321',
    });
  });

  test('Formata corretamente número fixo com 8 dígitos', () => {
    const input = '1123456789';
    const result = formatPhone(input);

    expect(result).toEqual({
      raw: '1123456789',
      formatted: '(11) 2345-6789',
    });
  });

  test('Remove caracteres não numéricos antes de formatar', () => {
    const input = '(11) 98765-4321';
    const result = formatPhone(input);

    expect(result).toEqual({
      raw: '11987654321',
      formatted: '(11) 98765-4321',
    });
  });

  test('Limita o formatted em no máximo 15 caracteres', () => {
    const input = '119876543211234'; // maior que 11 dígitos
    const result = formatPhone(input);

    expect(result.formatted.length).toBeLessThanOrEqual(15);
  });

  test('Retorna vazio corretamente quando input é vazio', () => {
    const input = '';
    const result = formatPhone(input);

    expect(result).toEqual({
      raw: '',
      formatted: '',
    });
  });
});
