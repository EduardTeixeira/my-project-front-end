import { Injectable } from '@angular/core';

import * as forge from 'node-forge';

@Injectable({
   providedIn: 'root'
})
export class EncryptionService {

   publicKey: string = '';
   privateKey: string = '';

   constructor() { }

   private createCipher(): any {
      let _publicKey = `-----BEGIN PUBLIC KEY-----${this.publicKey}-----END PUBLIC KEY-----`;
      const cipher = forge.pki.publicKeyFromPem(_publicKey);
      return cipher;
   }

   encryptValue(text: string): any {
      const cipher = this.createCipher();
      const encrypted = cipher.encrypt(forge.util.encodeUtf8(text));
      return forge.util.encode64(encrypted);
   }

   encryptObject(data: any): any {
      const cipher = this.createCipher();
      const encrypted = cipher.encrypt(forge.util.encodeUtf8(JSON.stringify(data)));
      return forge.util.encode64(encrypted);
   }

   private createDecipher(): any {
      let _publicKey: any = `-----BEGIN PUBLIC KEY-----${this.privateKey}-----END PUBLIC KEY-----`;
      const decipher = forge.pki.privateKeyToPem(_publicKey);
      return decipher;
   }

   decryptValue(text: string) {
      const decipher = this.createDecipher();
      const decrypted = decipher.decrypt(forge.util.decode64(text));
      return forge.util.decodeUtf8(decrypted);
   }

   decryptObject(data: any): any {
      const decipher = this.createDecipher();
      const decrypted = decipher.decrypt(forge.util.decode64(JSON.stringify(data)));
      return JSON.parse(forge.util.decodeUtf8(decrypted));
   }

}
