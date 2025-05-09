import { calcularSaqueAniversario } from './fgts';

describe('calcularSaqueAniversario', () => {
  it('deve calcular corretamente para saldo até 500', () => {
    expect(calcularSaqueAniversario(200)).toBe(100); 
    expect(calcularSaqueAniversario(500)).toBe(250);
  });

  it('deve calcular corretamente para saldo entre 501 e 1000', () => {
    expect(calcularSaqueAniversario(750)).toBe(350); 
    expect(calcularSaqueAniversario(1000)).toBe(450);
  });

  it('deve calcular corretamente para saldo entre 1001 e 5000', () => {
    expect(calcularSaqueAniversario(3000)).toBe(1050);
    expect(calcularSaqueAniversario(5000)).toBe(1650);
  });

  it('deve calcular corretamente para saldo entre 5001 e 10000', () => {
    expect(calcularSaqueAniversario(7000)).toBe(2050);
    expect(calcularSaqueAniversario(10000)).toBe(2650);
  });

  it('deve calcular corretamente para saldo entre 10001 e 15000', () => {
    expect(calcularSaqueAniversario(12000)).toBe(2950);
    expect(calcularSaqueAniversario(15000)).toBe(3400);
  });

  it('deve calcular corretamente para saldo entre 15001 e 20000', () => {
    expect(calcularSaqueAniversario(18000)).toBe(3700);
    expect(calcularSaqueAniversario(20000)).toBe(3900);
  });

  it('deve calcular corretamente para saldo acima de 20000', () => {
    expect(calcularSaqueAniversario(25000)).toBe(4150);
    expect(calcularSaqueAniversario(50000)).toBe(5400);
  });
});
