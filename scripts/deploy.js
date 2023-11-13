// const { run } = require("hardhat");

const mainFunc = async() => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyNFT');
    const nftContractInstance = await nftContractFactory.deploy();
    await nftContractInstance.deployed();
    console.log('Contract deployed to: ', nftContractInstance.address);

    // call the makeNFT function
    let txn = await nftContractInstance.makeNFT();
    // wait for it to be minted
    await txn.wait();
   
};

const runMainFunc = async() => {
    try {
        await mainFunc();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
};

runMainFunc();