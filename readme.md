# qiniu-log-parser [![Build Status](https://travis-ci.org/taoyuan/qiniu-log-parser.svg?branch=master)](https://travis-ci.org/taoyuan/qiniu-log-parser) [![Greenkeeper badge](https://badges.greenkeeper.io/taoyuan/qiniu-log-parser.svg)](https://greenkeeper.io/)

> A cdn log parser for qiniu.com


## Install

```
$ npm install qiniu-log-parser
```

## Usage

```js
const fs = require('fs');
const parser = require('qiniu-log-parser');
const raw = fs.readFileSync('...');

// parse raw log content
const parsed = parser.parse(raw);

// print the parsed log data
console.log(parsed);

// OUTPUT:
/**
[ 
  { 
    ip: '1.204.150.161',
    type: 'HIT',
    count: '39',
    ts: '15/Sep/2017:01:01:23 +0800',
    method: 'GET',
    url: 'http://example.com/20170914/files/close.png',
    protocol: 'HTTP',
    status: '200',
    size: '4010',
    from: 'http://example.com/20170914/index.html',
    ua: 'Mozilla/5.0 (Linux; Android 5.1.1; vivo X7 Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043409 Safari/537.36 MicroMessenger/6.5.13.1100 NetType/WIFI Language/zh_CN' 
  },
  ...
]
*/

```

## License

[towyuan](https://github.com/taoyuan)
