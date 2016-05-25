Utility functions to format PEM keys.


### base64toPEM

Convert a base64 single line key into multiline PEM.

```js
import {base64toPEM} from 'format-pem-keys';

const pem = base64toPEM('abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789');

/*
-----BEGIN PUBLIC KEY-----
abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789
abcdef0123456789abcdef0123456789
-----END PUBLIC KEY-----
*/
```
