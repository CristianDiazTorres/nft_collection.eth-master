# View web app
https://nft-starter-project.charlesb10.repl.co/

## Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

## To Run in console:
npx hardhat run scripts/run.js

## To run in Rinkeby Testnet
- npx hardhat run scripts/deploy.js --network rinkeby
- go to https://rinkeby.etherscan.io/ and search for the address in the console
- go to https://testnets.opensea.io/ and do the same

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


## Helpful Resources
- base64 encoder: https://www.utilities-online.info/base64
- https://jsonkeeper.com/

- https://jsonkeeper.com/b/EZZW  (my current instance)



- alice in metaland base64 PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj4KICAgIDxzdHlsZT4uYmFzZSB7IGZpbGw6IHdoaXRlOyBmb250LWZhbWlseTogc2VyaWY7IGZvbnQtc2l6ZTogMTRweDsgfTwvc3R5bGU+CiAgICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJibGFjayIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBjbGFzcz0iYmFzZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWxpY2UgaW4gTWV0YWxhbmQ8L3RleHQ+Cjwvc3ZnPg==

- to view
- data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj4KICAgIDxzdHlsZT4uYmFzZSB7IGZpbGw6IHdoaXRlOyBmb250LWZhbWlseTogc2VyaWY7IGZvbnQtc2l6ZTogMTRweDsgfTwvc3R5bGU+CiAgICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJibGFjayIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBjbGFzcz0iYmFzZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWxpY2UgaW4gTWV0YWxhbmQ8L3RleHQ+Cjwvc3ZnPg==

- json string
- https://jsonkeeper.com/b/YARR

- base64 json (image included)
data:application/json;base64,eyJuYW1lIjoiQWxpY2UgaW4gTWV0YWxhbmQiLCJkZXNjcmlwdGlvbiI6IkN1cmlvdXMgYW5kIGN1cmlvdXNlciEiLCJpbWFnZSI6ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlJbmhOYVc1WlRXbHVJRzFsWlhRaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TlRBZ016VXdJajRLSUNBZ0lEeHpkSGxzWlQ0dVltRnpaU0I3SUdacGJHdzZJSGRvYVhSbE95Qm1iMjUwTFdaaGJXbHNlVG9nYzJWeWFXWTdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc2dmVHd2YzNSNWJHVStDaUFnSUNBOGNtVmpkQ0IzYVdSMGFEMGlNVEF3SlNJZ2FHVnBaMmgwUFNJeE1EQWxJaUJtYVd4c1BTSmliR0ZqYXlJZ0x6NEtJQ0FnSUR4MFpYaDBJSGc5SWpVd0pTSWdlVDBpTlRBbElpQmpiR0Z6Y3owaVltRnpaU0lnWkc5dGFXNWhiblF0WW1GelpXeHBibVU5SW0xcFpHUnNaU0lnZEdWNGRDMWhibU5vYjNJOUltMXBaR1JzWlNJK1FXeHBZMlVnYVc0Z1RXVjBZV3hoYm1ROEwzUmxlSFErQ2p3dmMzWm5QZz09In0=



- nft previewer
- https://nftpreview.0xdev.codes/


## Let's say you want to change your contract. You'd need to do 3 things:
- deploy it again. (npx hardhat run scripts/deploy.js --network rinkeby)
- update the contract address on our frontend. (app.jsx)
- update the abi file on our frontend.  (contracts/MyNFT.sol/MyNFT.json)


## To verify on Etherscan
- npx hardhat verify --network rinkeby [CONTRACT_ADDRESS]
- (Current Instance) https://rinkeby.etherscan.io/address/0xa1C998612097cDF543967A31AdF1CE2176f54679#code