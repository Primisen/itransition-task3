const {createHmac} = await import('node:crypto');
const {generateKeySync} = await import('node:crypto');

export class HmacGenerator {

    generateHmac(data) {
        this.key = this.generateKey();
        const hmac = createHmac('sha256', this.key)
            .update(data.toString())
            .digest('hex');
        return hmac;
    }

    generateKey() {
        const key = generateKeySync('hmac', {length: 256});
        return key.export().toString('hex');
    }

    getKey() {
        return this.key;
    }
}