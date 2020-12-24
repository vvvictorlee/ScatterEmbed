const childProcess = require('child_process');


const packages = [
    'core',
    'eosio',
    'roxe',
    'tron',
    'bitcoin',
    'ethereum',
];

const args = process.argv.slice(2);
const isLocal = args[0] || false;

let installString = `yarn add `;

packages.map(pack => {
    let p = '@walletpack/';
    if (pack == "roxe") {
        p = 'walletpack_';
    }
    installString += `${isLocal ? 'file:../../Libraries/walletpack/packages/' : p}${pack} `
});


console.log(installString);
const p = childProcess.exec(installString);
p.on('error', function (err) { console.error(err); });
p.on('exit', function (code) { console.log('exited', code); });

