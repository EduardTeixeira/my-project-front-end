import { Injectable } from '@angular/core';

import * as forge from 'node-forge';

import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {

    constructor() { }

    private createCipher(): any {
        const cipher = forge.cipher.createCipher('AES-CBC', forge.util.createBuffer(environment.CRYPTO_KEY));
        cipher.start(
            {
                iv: environment.CRYPTO_IV,
            }
        );
        return cipher;
    }

    private createDecipher(): any {
        const decipher = forge.cipher.createDecipher('AES-CBC', forge.util.createBuffer(environment.CRYPTO_KEY));
        decipher.start(
            {
                iv: environment.CRYPTO_IV,
            }
        );
        return decipher;
    }

    encryptValue(data: any): any {
        const cipher = this.createCipher();
        cipher.update(
            forge.util.createBuffer(
                forge.util.encodeUtf8(data)
            )
        );
        cipher.finish();
        return forge.util.encode64(cipher.output.getBytes());
    }

    decryptValue(data: any): any {
        const decipher = this.createDecipher();
        decipher.update(
            forge.util.createBuffer(
                forge.util.decode64(data)
            )
        );
        decipher.finish();
        return forge.util.decodeUtf8(decipher.output.getBytes());
    }

    encryptObject(data: any): any {
        const cipher = this.createCipher();
        cipher.update(
            forge.util.createBuffer(
                forge.util.encodeUtf8(JSON.stringify(data))
            )
        );
        cipher.finish();
        return forge.util.encode64(cipher.output.getBytes());
    }

    decryptObject(data: any): any {
        const decipher = this.createDecipher();
        decipher.update(
            forge.util.createBuffer(
                forge.util.decode64(data)
            )
        );
        decipher.finish();
        return JSON.parse(forge.util.decodeUtf8(decipher.output.getBytes()));
    }

}
