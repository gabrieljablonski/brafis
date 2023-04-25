/**
 * Useful for unmasking CPF, CNPJ, IE, ...
 */
export function unmask(text: string): string {
  return text.replace(/[-./() ]/g, '');
}

function decimalComma(text: string): string {
  return text.replace('.', ',');
}

declare global {
  interface String {
    decimalComma(): string;
  }
}

String.prototype.decimalComma = function () {
  return decimalComma(this as string);
};
