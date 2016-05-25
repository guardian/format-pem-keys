import {base64toPEM} from '../src/index';
import {stripIndent} from 'common-tags';
import tap from 'tap';

tap.test('Base64 to PEM', function (test) {
	test.equal(
		base64toPEM('abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789'),
		stripIndent`
			-----BEGIN PUBLIC KEY-----
			abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789
			abcdef0123456789abcdef0123456789
			-----END PUBLIC KEY-----
		`
	);
	test.done();
});
