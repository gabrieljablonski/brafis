import { State } from '@/typings';

const STATE_GRAPH = new Map<State, State[]>([
  ['AC', ['AM', 'RO']],
  ['AL', ['BA', 'PE', 'SE']],
  ['AP', ['PA']],
  ['AM', ['AC', 'MT', 'PA', 'RO', 'RR']],
  ['BA', ['AL', 'ES', 'GO', 'MG', 'PE', 'PI', 'SE', 'TO']],
  ['CE', ['PB', 'PE', 'PI', 'RN']],
  ['DF', ['GO', 'MG']],
  ['ES', ['BA', 'MG', 'RJ']],
  ['GO', ['BA', 'DF', 'MT', 'MS', 'MG', 'TO']],
  ['MA', ['PA', 'PI', 'TO']],
  ['MT', ['AM', 'GO', 'MS', 'PA', 'RO', 'TO']],
  ['MS', ['GO', 'MT', 'MG', 'PR', 'SP']],
  ['MG', ['BA', 'DF', 'ES', 'GO', 'MS', 'RJ', 'SP']],
  ['PA', ['AP', 'AM', 'MA', 'MT', 'RR', 'TO']],
  ['PB', ['CE', 'PE', 'RN']],
  ['PR', ['MS', 'SP', 'SC']],
  ['PE', ['AL', 'BA', 'CE', 'PB', 'PI']],
  ['PI', ['BA', 'CE', 'MA', 'PE', 'TO']],
  ['RJ', ['ES', 'MG', 'SP']],
  ['RN', ['CE', 'PB']],
  ['RS', ['SC']],
  ['RO', ['AM', 'MT', 'AC']],
  ['RR', ['AM', 'PA']],
  ['SC', ['PR', 'RS']],
  ['SP', ['MS', 'MG', 'PR', 'RJ']],
  ['SE', ['AL', 'BA']],
  ['TO', ['BA', 'GO', 'MA', 'MT', 'PA', 'PI']],
]);

export function getAdjacentStates(state: string): string[] {
  return STATE_GRAPH.get(state as State) ?? [];
}

export function statesAreAdjacent(state1: string, state2: string): boolean {
  return STATE_GRAPH.get(state1 as State)?.includes(state2 as State) ?? false;
}

export function routeIsValid(route: string[]): boolean {
  if (route.length < 2) {
    return false;
  }
  let [currentState] = route;
  return route.slice(1).every(state => {
    const valid = statesAreAdjacent(currentState, state);
    currentState = state;
    return valid;
  });
}
