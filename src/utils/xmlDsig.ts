import xmlDsig from 'xmldsigjs';
import { Crypto } from 'node-webcrypto-ossl';

xmlDsig.Application.setEngine('OpenSSL', new Crypto());

export default xmlDsig;
