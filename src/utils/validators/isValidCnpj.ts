function verifierDigit(digits: string): number {
  let factor = 18 - digits.length;
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

export default function isValidCnpj(cnpj: string): boolean {
  const stripped = cnpj.replace(/[-\\/.]/g, '');
  if (stripped.length !== 14) {
    return false;
  }
  if (new Set(stripped).size === 1) {
    return false;
  }
  let cnpjGen = stripped.slice(0, 12);
  cnpjGen += `${verifierDigit(cnpjGen)}`;
  cnpjGen += `${verifierDigit(cnpjGen)}`;
  return cnpjGen === stripped;
}
