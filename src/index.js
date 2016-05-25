const ASCII_NEW_LINE = String.fromCharCode(10);
const PEM_HEADER = '-----BEGIN PUBLIC KEY-----';
const PEM_FOOTER = '-----END PUBLIC KEY-----';

export function base64toPEM (key) {
	const tmp = [];

    const ret = [new Buffer(PEM_HEADER).toString('ascii')];

    for (let i = 0, len = key.length; i < len; i++) {

        if (i>0 && i%64 === 0) {
            ret.push(tmp.join(''));
            tmp.length = 0;
        }

        tmp.push(key[i]);

        if (i === key.length - 1) {
            ret.push(tmp.join(''));
        }
    }

    ret.push(new Buffer(PEM_FOOTER).toString('ascii'));

    return ret.join(ASCII_NEW_LINE);
}
