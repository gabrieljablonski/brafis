export type NfeFinalidade = '1' | '2' | '3' | '4';

export interface NfeRefNfp {
  cUF: string;
  AAMM: string;
  CNPJ?: string;
  CPF?: string;
  IE: string;
  mod: '04' | '01';
  serie: string;
  nNF: string;
}

export interface NfeNfRef {
  refNFe?: string;
  refNFP?: NfeRefNfp;
}

export interface NfeIde {
  cUF: string;
  cNF: string;
  natOp: string;
  /**
   * 55 -> NF-e
   * 65 -> NFC-e
   */
  mod: '55' | '65';
  serie: string;
  nNF: string;
  dhEmi: string;
  dhSaiEnt?: string;
  /**
   *  0 -> Entrada
   *  1 -> Saída
   */
  tpNF: '0' | '1';
  /**
   * 1 -> Operação interna
   * 2 -> Operação interestadual
   * 3 -> Operação com exterior
   */
  idDest: '1' | '2' | '3';
  cMunFG: string;
  tpImp: '0' | '1' | '2' | '3' | '5';
  tpEmis: '1' | '2' | '3' | '5' | '6' | '7' | '8' | '9';
  cDV: string;
  tpAmb: '1' | '2';
  /**
   * 1 -> NF-e normal
   * 2 -> NF-e complementar
   * 3 -> NF-e de ajuste
   * 4 -> Devolução de mercadoria
   */
  finNFe: NfeFinalidade;
  indFinal: '0' | '1';
  indPres: '0' | '1' | '2' | '3' | '4' | '5' | '9';
  indIntermed?: '0' | '1';
  procEmi: '0' | '1' | '2' | '3';
  verProc: `FazendaNota v${number}.${number}.${number}`;
  dhCont?: string;
  xJust?: string;
  NFref?: NfeNfRef[];
}

export interface NfeEmit {
  CNPJ?: string;
  CPF?: string;
  xNome: string;
  xFant?: string;
  enderEmit: {
    xLgr: string;
    nro: string;
    xCpl?: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    UF: string;
    CEP: string;
    cPais?: string;
    xPais?: string;
    fone?: string;
  };
  IE: string;
  IEST?: string;
  IM?: string;
  CNAE?: string;
  CRT: '1' | '2' | '3';
}

export interface NfeDest {
  CNPJ?: string;
  CPF?: string;
  idEstrangeiro?: string;
  xNome: string;
  enderDest: {
    xLgr: string;
    nro: string;
    xCpl?: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    UF: string;
    CEP?: string;
    cPais?: string;
    xPais?: string;
    fone?: string;
  };
  indIEDest: '1' | '2' | '9';
  IE?: string;
  ISUF?: string;
  IM?: string;
  email?: string;
}

export interface NfeDet {
  '@nItem': string;
  // I01
  prod: NfeProd;
  // M01
  imposto: NfeImposto;
  impostoDevol?: {
    pDevol: string;
    IPI: {
      vIPIDevol: string;
    };
  };
  infAdProd?: string;
}

export interface NfeProd {
  cProd: string;
  cEAN: string;
  xProd: string;
  NCM: string;
  CEST?: string;
  indEscala?: string;
  CNPJFab?: string;
  cBenef?: string;
  EXTIPI?: string;
  CFOP: string;
  uCom: string;
  qCom: string;
  vUnCom: string;
  vProd: string;
  cEANTrib: string;
  uTrib: string;
  qTrib: string;
  vUnTrib: string;
  vFrete?: string;
  vSeg?: string;
  vOutro?: string;
  vDesc?: string;
  indTot: '0' | '1';
}

export type CstOriginCode = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface NfeImposto {
  vTotTrib?: string;
  ICMS: {
    ICMS00?: {
      orig: CstOriginCode;
      CST: '00';
      modBC: '3';
      vBC: string;
      pICMS: string;
      vICMS: string;
    };
    ICMS10?: {
      orig: CstOriginCode;
      CST: '10';
      modBC: '3';
      vBC: string;
      pICMS: string;
      vICMS: string;
      modBCST: '6';
      pRedBCST?: string;
      vBCST: string;
      pICMSST: string;
      vICMSST: string;
    };
    ICMS20?: {
      orig: CstOriginCode;
      CST: '20';
      modBC: '3';
      pRedBC: string;
      vBC: string;
      pICMS: string;
      vICMS: string;
      vICMSDeson?: string;
      motDesICMS?: '03' | '09' | '12';
    };
    ICMS30?: {
      orig: CstOriginCode;
      CST: '30';
      modBC: '3';
      modBCST: '6';
      pRedBCST?: string;
      vBCST: string;
      pICMSST: string;
      vICMSST: string;
      vICMSDeson?: string;
      motDesICMS?: '06' | '07' | '09';
    };
    ICMS40?: {
      orig: CstOriginCode;
      CST: '40' | '41' | '50';
      vICMSDeson?: string;
      motDesICMS?:
        | '01'
        | '03'
        | '04'
        | '05'
        | '06'
        | '07'
        | '08'
        | '09'
        | '10'
        | '11'
        | '16'
        | '90';
    };
    ICMS51?: {
      orig: CstOriginCode;
      CST: '51';
      modBC: '3';
      pRedBC?: string;
      vBC: string;
      pICMS: string;
      vICMSOp: string;
      pDif: string;
      vICMSDif: string;
      vICMS: string;
    };
    ICMS60?: {
      orig: CstOriginCode;
      CST: '60';
    };
    ICMS70?: {
      orig: CstOriginCode;
      CST: '70';
      modBC: '3';
      pRedBC: string;
      vBC: string;
      pICMS: string;
      vICMS: string;
      modBCST: '6';
      pRedBCST?: string;
      vBCST: string;
      pICMSST: string;
      vICMSST: string;
      vICMSDeson?: string;
      motDesICMS?: '03' | '09' | '12';
    };
    ICMS90?: {
      orig: CstOriginCode;
      CST: '90';
    };
  };
  IPI?: {
    cEnq: string;
    IPITrib?: {
      CST: '00' | '49' | '50' | '99';
      vBC?: string;
      pIPI?: string;
      qUnid?: string;
      vUnid?: string;
      vIPI?: string;
    };
    IPINT?: {
      CST: '01' | '02' | '03' | '04' | '05' | '51' | '52' | '53' | '54' | '55';
    };
  };
  II?: {
    vBC: string;
    vDespAdu: string;
    vII: string;
    vIOF: string;
  };
  PIS?: {
    PISAliq?: {
      CST: '01' | '02';
      vBC: string;
      pPIS: string;
      vPIS: string;
    };
    PISQtde?: {
      CST: '03';
      qBCProd: string;
      vAliqProd: string;
      vPIS: string;
    };
    PISNT?: {
      CST: '04' | '05' | '06' | '07' | '08' | '09';
    };
    PISOutr?: {
      CST:
        | '49'
        | '50'
        | '51'
        | '52'
        | '53'
        | '54'
        | '55'
        | '56'
        | '60'
        | '61'
        | '62'
        | '63'
        | '64'
        | '65'
        | '66'
        | '67'
        | '70'
        | '71'
        | '72'
        | '73'
        | '74'
        | '75'
        | '98'
        | '99';
      vBC?: string;
      pPIS?: string;
      qBCProd?: string;
      vAliqProd?: string;
    };
  };
  PISST?: {
    vBC?: string;
    pPIS?: string;
    qBCProd?: string;
    vAliqProd?: string;
    vPIS: string;
  };
  COFINS?: {
    COFINSAliq?: {
      CST: '01' | '02';
      vBC: string;
      pCOFINS: string;
      vCOFINS: string;
    };
    COFINSQtde?: {
      CST: '03';
      qBCProd: string;
      vAliqProd: string;
      vCOFINS: string;
    };
    COFINSNT?: {
      CST: '04' | '05' | '06' | '07' | '08' | '09';
    };
    COFINSOutr?: {
      CST:
        | '49'
        | '50'
        | '51'
        | '52'
        | '53'
        | '54'
        | '55'
        | '56'
        | '60'
        | '61'
        | '62'
        | '63'
        | '64'
        | '65'
        | '66'
        | '67'
        | '70'
        | '71'
        | '72'
        | '73'
        | '74'
        | '75'
        | '98'
        | '99';
      vBC?: string;
      pCOFINS?: string;
      qBCProd?: string;
      vAliqProd?: string;
      vCOFINS: string;
    };
  };
  COFINSST?: {
    vBC?: string;
    pCOFINS?: string;
    qBCProd?: string;
    vAliqProd?: string;
    vCOFINS: string;
  };
  ISSQN?: {
    vBC: string;
    vAliq: string;
    vISSQN: string;
    cMunFG: string;
    cListServ: string;
    vDeducao?: string;
    vOutro?: string;
    vDescIncond?: string;
    vDescCond?: string;
    vISSRet?: string;
    indISS: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    cServico?: string;
    cMun?: string;
    cPais?: string;
    nProcesso?: string;
    indIncentivo: '1' | '2';
  };
}

export interface NfeTotal {
  ICMSTot: {
    vBC: string;
    vICMS: string;
    vICMSDeson: string;
    vFCPUFDest?: string;
    vICMSUFDest?: string;
    vICMSUFRemet?: string;
    vFCP: string;
    vBCST: string;
    vST: string;
    vFCPST: string;
    vFCPSTRet: string;
    vProd: string;
    vFrete: string;
    vSeg: string;
    vDesc: string;
    vII: string;
    vIPI: string;
    vIPIDevol: string;
    vPIS: string;
    vCOFINS: string;
    vOutro: string;
    vNF: string;
    vTotTrib?: string;
  };
}

export type NfeTranspModFrete = '0' | '1' | '2' | '3' | '4' | '9';

export interface NfeVol {
  qVol?: string;
  esp?: string;
  marca?: string;
  nVol?: string;
  pesoL?: string;
  pesoB?: string;
}

export interface NfeTransp {
  modFrete: NfeTranspModFrete;
  transporta?: {
    CNPJ?: string;
    CPF?: string;
    xNome?: string;
    IE?: string;
    xEnder?: string;
    xMun?: string;
    UF?: string;
    vServ?: string;
    vBCRet?: string;
    pICMSRet?: string;
    vICMSRet?: string;
    CFOP?: string;
    cMunFG?: string;
    veicTransp?: {
      placa: string;
      UFPlaca: string;
      RNTC?: string;
    };
  };
  vol?: NfeVol[];
}

export type NfePagType =
  | '01'
  | '02'
  | '03'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '10'
  | '11'
  | '12'
  | '13'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '90'
  | '99';

export interface NfpePag {
  detPag: {
    indPag?: '0' | '1';
    tPag: NfePagType;
    vPag: string;
    xPag?: string;
  }[];
}

export interface NfeXml {
  '@xmlns': 'http://www.portalfiscal.inf.br/nfe';
  // A01
  infNFe: {
    '@Id': string;
    '@versao': string;
    // B01
    ide: NfeIde;
    // C01
    emit: NfeEmit;
    // E01
    dest: NfeDest;
    // H01
    det: NfeDet[];
    // W01
    total: NfeTotal;
    // X01
    transp: NfeTransp;
    // YA01
    pag: NfpePag;
    infAdic?: {
      infCpl?: string;
    };
  };
}

export interface NfeProt {
  tpAmb: '1' | '2';
  verAplic: string;
  chNFe: string;
  dhRecbto: string;
  nProt: string;
  digVal: string;
  cStat: string;
  xMotivo: string;
}

export interface NfeEmitida {
  nfeProc: {
    '@versao': string;
    '@xmlns': 'http://www.portalfiscal.inf.br/nfe';
    NFe: NfeXml & {
      Signature: unknown;
    };
    protNFe: {
      '@versao': string;
      infProt: NfeProt;
    };
  };
  cancelled?: boolean;
  isIssuer?: boolean;
}
