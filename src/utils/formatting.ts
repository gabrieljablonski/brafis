/**
 * Useful for unmasking CPF, CNPJ, IE, ...
 */
export function unmask(text: string): string {
  return text.replace(/[-./() ]/g, '');
}
