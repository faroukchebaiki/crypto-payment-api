import WAValidator from 'multicoin-address-validator';

export function validateAddress(address, cryptoType) {
    return WAValidator.validate(address, cryptoType.toUpperCase());
}
