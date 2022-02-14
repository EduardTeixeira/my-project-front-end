import { TestBed, inject } from '@angular/core/testing';

import { EncryptionService } from './encryption.service';

describe('Service: EncryptionService', () => {

    let encryptionService: EncryptionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EncryptionService]
        });
        encryptionService = new EncryptionService();
    });

    it('should create', () => {
        expect(encryptionService).toBeTruthy();
    });

    it('should ...', inject([EncryptionService], (service: EncryptionService) => {
        expect(service).toBeTruthy();
    }));



    // TESTAR CRIPTO E DESCRIPTO DE STRING SIMPLES

    it('#encryptValue : deve testar criptografia simples', () => {

        const value = '06.06.06.06.06.06.06.06';

        const senhaCriptografada = "T3mtkO21XWl4bYyVMINzGayFpIBp1kP5ciYafwQxUW4=";

        const encryptValue = encryptionService.encryptValue(value);

        expect(encryptValue).toBe(senhaCriptografada);

    });

    it('#decryptValue: deve testar descriptografia simples', () => {

        const senha = '06.06.06.06.06.06.06.06';

        const senhaCriptografada = "T3mtkO21XWl4bYyVMINzGayFpIBp1kP5ciYafwQxUW4=";

        const decryptValue = encryptionService.decryptValue(senhaCriptografada);

        expect(decryptValue).toBe(senha);

    });

    it('#decryptValue: deve testar descriptografia e retornar senhaDoUsuArio', () => {

        const originalValue = 'senhaDoUsuArio';

        const value = 'uPducFONVw1rjxps7qZeaA==';

        const decryptObject = encryptionService.decryptValue(value);

        expect(decryptObject).toBe(originalValue);

    });

    it('#decryptValue: deve testar descriptografia e retornar senhãDôUsuÁrio', () => {

        const originalValue = 'senhãDôUsuÁrio';

        const value = 'DwRFvT/TdUPtJlkYCIyTttfAq6cJ5e9HCVv6EelGBcE=';

        const decryptObject = encryptionService.decryptValue(value);

        expect(decryptObject).toBe(originalValue);

    });

    it('#encryptValue/decryptValue : deve testar string sem acentuação', () => {

        const value = 'senhaDoUsuario';

        const encryptValue = encryptionService.encryptValue(value);

        const decryptValue = encryptionService.decryptValue(encryptValue);

        expect(value).toBe(decryptValue);

    });

    it('#encryptValue/decryptValue : deve testar string com acentuação', () => {

        const value = 'SenhãDoUsuário';

        const encryptValue = encryptionService.encryptValue(value);

        const decryptValue = encryptionService.decryptValue(encryptValue);

        expect(value).toBe(decryptValue);

    });



    // TESTAR CRIPTO E DESCRIPTO DE OBJETOS

    it('#encryptObject/decryptObject : deve testar objetos com acentuação', () => {

        const value = {
            number: 1,
            string: 'SenhaDoUsuáríõá',
            objeto: {
                teste: 2,
                valor: 'meuVãlór'
            }
        };

        const encryptObject = encryptionService.encryptObject(value);

        const decryptObject = encryptionService.decryptObject(encryptObject);

        expect(JSON.stringify(value)).toBe(JSON.stringify(decryptObject));

    });

    it('#decryptObject: deve testar descriptografia e retornar objeto', () => {

        const originalValue = '{"fi":7,"chn":"3","trn":424,"data":{"CONTA_CORRENTE":329,"COOPERATIVA":1,"VALOR":"senháDoÙsuáãário"}}';

        const value = '3tBBXHaPjEeNwM5/YyWvXm6TpXQ0d6lavC+fMFQLpDPRZapfUiA6N8/bJo+tSjHGSiEcBrppzDcCR3tsHL9w8LdgbvVeeZTY5LVswtaYr2/paCeuM/QqkUdgBV1JvKHZpwzgwjz9SrnqrnfDIXV0DQ==';

        const decryptObject = encryptionService.decryptObject(value);

        expect(JSON.stringify(decryptObject)).toBe(originalValue);

    });

    it('#encryptObject/decryptObject: deve testar TRN 424', () => {

        const originalRequest = {
            fi: 7,
            chn: "3",
            trn: 424,
            data: {
                CONTA_CORRENTE: 329,
                COOPERATIVA: 1,
                VALOR: 'senháDoÙsuáãário',
            }
        };

        const encryptObject = encryptionService.encryptObject(originalRequest);
        console.log('TRN 424 >>> ' + encryptObject)

        const decryptObject = encryptionService.decryptObject(encryptObject);
        console.log('TRN 424 >>> ' + JSON.stringify(decryptObject))

        expect(JSON.stringify(decryptObject)).toBe(JSON.stringify(originalRequest));

    });

    it('#encryptObject/decryptObject: deve testar TRN 424 - data', () => {

        const originalRequest = {
            fi: 7,
            chn: "3",
            trn: 424,
            data: {
                "CONTA_CORRENTE": 12672769,
                "COOPERATIVA": 1,
                "TITULARIDADE": 1,
                "TIPO_USUARIO_CONTA_JURIDICA": "2",
                "CPF_USUARIO_CONTA_JURIDICA": "0",
                "FRASE_SECRETA": "0000000000",
                "SENHA": "20.20.20.20.20.20.20.20"
            }
        };

        const encryptObject = encryptionService.encryptObject(originalRequest.data);
        console.log('TRN 424 - data >>> ' + encryptObject)

        const decryptObject = encryptionService.decryptObject(encryptObject);
        console.log('TRN 424 - data >>> ' + JSON.stringify(decryptObject))

        expect(JSON.stringify(decryptObject)).toBe(JSON.stringify(originalRequest.data));

    });



    // DESCRIPT (OBJETO E VALOR UNICO) ALGUMAS REQUESTS DO FRONT PARA VISUALIZAR O CONTEUDO

    it('#decryptValue: deve testar descriptografia simples', () => {

        const valorCriptografado = "T3mtkO21XWl4bYyVMINzGayFpIBp1kP5ciYafwQxUW4=";

        const decryptValue = encryptionService.decryptValue(valorCriptografado);
        console.log('#decryptValue ::: VALOR DESCRIPTOGRAFADO');
        console.log(decryptValue);

        expect(true).toBe(true);

    });

    it('#decryptObject: deve testar descriptografia e retornar objeto', () => {

        const valorCriptografado = 'mxJvznmVINviejbRZQpRDScLkpUYd4rQLsS/Mj0J50BqntuXRv4doS/28Av2Ae+0';

        const decryptObject = encryptionService.decryptObject(valorCriptografado);
        console.log('#decryptObject ::: OBJETO DESCRIPTOGRAFADO');
        console.log(decryptObject);

        expect(true).toBe(true);

    });

});
