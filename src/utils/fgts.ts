export function calcularSaqueAniversario(saldo: number): number {
    if (saldo <= 500) return saldo * 0.5;
    if (saldo <= 1000) return saldo * 0.4 + 50;
    if (saldo <= 5000) return saldo * 0.3 + 150;
    if (saldo <= 10000) return saldo * 0.2 + 650;
    if (saldo <= 15000) return saldo * 0.15 + 1150;
    if (saldo <= 20000) return saldo * 0.1 + 1900;
    return saldo * 0.05 + 2900;
  }
    