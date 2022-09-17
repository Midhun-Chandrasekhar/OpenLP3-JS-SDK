# OpenLP3 Python SDK
Open Loyality Points 3 (OpenLP3) is an opensource Loyality Point platform build top on public blockchain.

<br>
Auther: Midhun Chandrasekhar
<br>
Date: Sep 04, 2022
<br>
Place: Kerala, In

<br><br>

### Build
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dwyl/auth_plug/Elixir%20CI?label=build&style=flat-square)
![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
<br>

### Technologies
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<br>

### Documentation
*OpenLP Version 0.1.0 Doc
<br>

### Status
![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)


### Installation
npm install openlp3

### Usage

Deploy smart contract from https://github.com/Midhun-Chandrasekhar/OpenLP on EVM
compatible blockchain (etherium). 

#### Import
const OpenLP3 = require("openlp3");

#### Initializing
const olp = new OpenLP3("network_address", "contract_address", "owner_private_key", "abi");

#### Contract Information
await olp.contractInfo()

#### Issue loyality point to wallet
await olp.issuePoints("wallet_address", 1000)

#### Burn loyality point to wallet
await olp.burnPoints("wallet_address", 100)

#### Get Loyality balance
await olp.userPoints("wallet_address")

<br>

### License
![](https://camo.githubusercontent.com/afa3b4832847df4bdf741044e496aa501da653e7d9c9cbb60091f3faa5bcb673/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d6f72616e6765)
<br>

### Contributing 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Midhun-Chandrasekhar/OpenLP)