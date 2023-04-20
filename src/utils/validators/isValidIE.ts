import { State, STATES } from '@/typings';
import { unmask } from '@/utils';

type StateValidations = {
  [state in State]: (ie: string) => boolean;
};

function wsum(digits: string, factorBase = 9): number {
  let factor = digits.length + 1;
  if (factor > factorBase) {
    factor -= factorBase - 1;
  }
  let sum = 0;
  digits.split('').forEach(d => {
    sum += Number(d) * factor;
    factor -= 1;
    if (factor === 1) {
      factor = factorBase;
    }
  });
  return sum;
}

function sub(n: number, s: number): number {
  const diff = s - n;
  return diff >= 10 ? 0 : diff;
}

function wsumSub(digits: string, divider: number, factorBase = 9): string {
  return `${sub(wsum(digits, factorBase) % divider, divider)}`;
}

const stateValidations: StateValidations = {
  AC: ie => {
    if (ie.length !== 13) {
      return false;
    }
    if (!ie.startsWith('01')) {
      return false;
    }
    const base = ie.slice(0, -2);
    const d1 = wsumSub(base, 11);
    const d2 = wsumSub(`${base}${d1}`, 11);
    return ie === `${base}${d1}${d2}`;
  },
  AL: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.match(/^24/)) {
      return false;
    }
    const base = ie.slice(0, -1);
    const sum = wsum(base);
    const product = sum * 10;
    const rest = product - Math.floor(product / 11) * 11;
    const d = rest === 10 ? '0' : `${rest}`;
    return ie === `${base}${d}`;
  },
  AP: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.startsWith('03')) {
      return false;
    }
    const base = ie.slice(0, -1);
    let p = 0;
    let d = 0;
    if (Number(base) >= 3000000 && Number(base) <= 3017000) {
      p = 5;
      d = 0;
    }
    if (Number(base) >= 3017001 && Number(base) <= 3019022) {
      p = 9;
      d = 1;
    }
    const sum = p + wsum(base);
    const rest = sum % 11;
    const diff = 11 - rest;
    let digit = diff;
    if (digit === 10) {
      digit = 0;
    } else if (digit === 1) {
      digit = d;
    }
    return ie === `${base}${digit}`;
  },
  AM: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  BA: ie => {
    if (ie.length !== 8 && ie.length !== 9) {
      return false;
    }
    const divider = ie.match(/^[679]/) ? 11 : 10;
    const base = ie.slice(0, -2);
    const d2 = wsumSub(base, divider);
    const d1 = wsumSub(`${base}${d2}`, divider);
    return ie === `${base}${d1}${d2}`;
  },
  CE: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  DF: ie => {
    if (ie.length !== 13) {
      return false;
    }
    if (!ie.startsWith('07') && !ie.startsWith('08')) {
      return false;
    }
    const base = ie.slice(0, -2);
    const d1 = wsumSub(base, 11);
    const d2 = wsumSub(`${base}${d1}`, 11);
    return ie === `${base}${d1}${d2}`;
  },
  ES: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  GO: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.match(/^(1[015]|2[0-9])/)) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  MA: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.startsWith('12')) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  MT: ie => {
    if (ie.length !== 11 && ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  MS: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.startsWith('28')) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  MG: ie => {
    if (ie.length !== 13) {
      return false;
    }
    const base = ie.replace(/^(\d{3})(\d{8})\d{2}$/, '$10$2');
    let sum = 0;
    base.split('').forEach((d, i) => {
      const odd = i % 2;
      const product = Number(d) * (odd ? 2 : 1);
      sum += Math.floor(product / 10);
      sum += product % 10;
    });
    const mod = sum % 10;
    const d1 = mod === 0 ? 0 : 10 - mod;

    const base2 = ie.slice(0, -2);
    const d2 = wsumSub(`${base2}${d1}`, 11, 11);

    return ie === `${base2}${d1}${d2}`;
  },
  PA: ie => {
    if (ie.length !== 9) {
      return false;
    }
    if (!ie.startsWith('15')) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  PB: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  PR: ie => {
    if (ie.length !== 10) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11, 7);
    return ie === `${base}${d}`;
  },
  PE: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -2);
    const d1 = wsumSub(base, 11);
    const d2 = wsumSub(`${base}${d1}`, 11);
    return ie === `${base}${d1}${d2}`;
  },
  PI: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  RJ: ie => {
    if (ie.length !== 8) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11, 7);
    return ie === `${base}${d}`;
  },
  RN: ie => {
    if (ie.length !== 9 && ie.length !== 10) {
      return false;
    }
    if (!ie.startsWith('20')) {
      return false;
    }
    const base = ie.slice(0, -1);
    const sum = wsum(base, ie.length);
    const product = sum * 10;
    const rest = product % 11;
    const d = rest === 10 ? 0 : rest;
    return ie === `${base}${d}`;
  },
  RS: ie => {
    if (ie.length !== 10) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  RO: ie => {
    if (ie.length !== 14) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  RR: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    let sum = 0;
    base.split('').forEach((d, i) => {
      sum += Number(d) * (i + 1);
    });
    const d = sum % 9;
    return ie === `${base}${d}`;
  },
  SC: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  SP: ie => {
    if (ie.length !== 12 && ie.length !== 13) {
      return false;
    }
    if (ie.length === 12) {
      const base = ie.replace(/(\d{8})\d{4}/, '$1');
      let sum = 0;
      let factor = 1;
      base.split('').forEach(d => {
        sum += Number(d) * factor;
        factor += 1;
        if (factor === 2 || factor === 9) {
          factor += 1;
        }
      });
      const d1 = (sum % 11) % 10;
      if (ie.at(8) !== `${d1}`) {
        return false;
      }

      const base2 = ie.slice(0, -1);
      const d2 = (wsum(base2, 10) % 11) % 10;
      return ie === `${base2}${d2}`;
    }
    if (!ie.startsWith('P')) {
      return false;
    }
    const base = ie.replace(/^P(\d{8})\d{4}$/, '$1');
    let sum = 0;
    let factor = 1;
    base.split('').forEach(d => {
      sum += Number(d) * factor;
      factor += 1;
      if (factor === 2 || factor === 9) {
        factor += 1;
      }
    });
    const d = (sum % 11) % 10;
    return ie.at(9) === `${d}`;
  },
  SE: ie => {
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
  TO: ie => {
    // http://www2.sefaz.to.gov.br/Servicos/Sintegra/calinse.htm
    if (ie.length !== 9) {
      return false;
    }
    const base = ie.slice(0, -1);
    const d = wsumSub(base, 11);
    return ie === `${base}${d}`;
  },
};

export default function isValidIE(ie: string): Set<State>;
export default function isValidIE(ie: string, state: State): boolean;
export default function isValidIE(
  ie: string,
  state?: State
): Set<State> | boolean {
  if (!state) {
    const valid = new Set<State>();
    STATES.forEach(s => {
      if (isValidIE(ie, s)) {
        valid.add(s as State);
      }
    });
    return valid;
  }
  return stateValidations[state]?.(unmask(ie)) ?? false;
}
