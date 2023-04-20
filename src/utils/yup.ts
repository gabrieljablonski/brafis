import * as yup from 'yup';
import isValidCpf from './validators/isValidCpf';
import isValidCnpj from './validators/isValidCnpj';
import isValidIE from './validators/isValidIE';
import tables from '@/tables';

yup.addMethod(yup.string, 'cpf', function () {
  return this.test('cpf', 'Invalid CPF', function (value) {
    return !value || isValidCpf(value);
  });
});

yup.addMethod(yup.string, 'cnpj', function () {
  return this.test('cnpj', 'Invalid CNPJ', function (value) {
    return !value || isValidCnpj(value);
  });
});

yup.addMethod(yup.string, 'cpfCnpj', function () {
  return this.test('cpfCnpj', 'Invalid CPF/CNPJ', function (value) {
    return !value || isValidCpf(value) || isValidCnpj(value);
  });
});

yup.addMethod(yup.string, 'cep', function () {
  return this.test('cep', 'Invalid CEP', function (value) {
    return !value || /^\d{5}-?\d{3}$/.test(value);
  });
});

yup.addMethod(yup.string, 'phone', function () {
  return this.test('phone', 'Invalid phone number', function (value) {
    return !value || /^\(?\d\d\)? ?\d{4,5}-?\d{4}$/.test(value);
  });
});

yup.addMethod(yup.string, 'ie', function (stateField: string) {
  return this.test('ie', 'Invalid IE', function (value) {
    if (!value) {
      return true;
    }
    const state = this.parent[stateField];
    if (!state) {
      return false;
    }
    return isValidIE(value, state);
  });
});

yup.addMethod(yup.string, 'state', function () {
  return this.test('state', `Invalid state`, function (value) {
    if (!value) {
      return true;
    }
    return !![...tables.estados.values()].find(({ sigla }) => sigla === value);
  });
});

yup.addMethod(yup.string, 'cityCode', function () {
  return this.test('cityCode', `Invalid city code`, function (value) {
    return !value || tables.cidades.has(value);
  });
});

yup.addMethod(yup.string, 'min', function (min: number) {
  return this.test(
    'min',
    `Must have at least ${min} character${min === 1 ? '' : 's'}`,
    function (value) {
      return !value || value.length >= min;
    }
  );
});

yup.addMethod(yup.string, 'max', function (max: number) {
  return this.test(
    'max',
    `Must have at most ${max} character${max === 1 ? '' : 's'}`,
    function (value) {
      return !value || value.length <= max;
    }
  );
});

yup.addMethod(yup.string, 'length', function (length: number) {
  return this.test(
    'length',
    `Must have exactly ${length} character${length === 1 ? '' : 's'}`,
    function (value) {
      return !value || value.length === length;
    }
  );
});

declare module 'yup' {
  interface StringSchema<
    TType extends yup.Maybe<string> = string | undefined,
    TContext = yup.AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = ''
  > extends yup.Schema<TType, TContext, TDefault, TFlags> {
    cpf(): StringSchema<TType, TContext>;
    cnpj(): StringSchema<TType, TContext>;
    cpfCnpj(): StringSchema<TType, TContext>;
    cep(): StringSchema<TType, TContext>;
    phone(): StringSchema<TType, TContext>;
    ie(stateField: string): StringSchema<TType, TContext>;
    state(): StringSchema<TType, TContext>;
    cityCode(): StringSchema<TType, TContext>;
  }
}

export default yup;
