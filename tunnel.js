const localtunnel = require('localtunnel');
const opn = require('opn');


(async () => {
  const tunnel = await localtunnel({ port: 8545 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  // tunnel.url;

  console.log(`\nDEV_PUBLIC_RPC=${tunnel.url}`);

  // Opens url for deployer to approve.
  opn(tunnel.url);

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();