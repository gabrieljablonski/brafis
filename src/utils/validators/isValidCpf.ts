function verifierDigit(digits: string): number {
  let factor = 10 - digits.length;
  let sum = 0;
  digits.split('').forEach(d => {
    sum += Number(d) * factor;
    factor += 1;
    if (factor === 10) {
      factor = 2;
    }
  });
  const mod = sum % 11;
  return mod === 10 ? 0 : mod;
}

export default function isValidCpf(cpf: string): boolean {
  const stripped = cpf.replace(/[.-]/g, '');
  if (stripped.length !== 11) {
    return false;
  }
  if (new Set(stripped).size === 1) {
    return false;
  }
  if (stripped.startsWith('123456789')) {
    return false;
  }
  let cpfGen = stripped.slice(0, 9);
  cpfGen += `${verifierDigit(cpfGen)}`;
  cpfGen += `${verifierDigit(cpfGen)}`;
  return cpfGen === stripped;
}
