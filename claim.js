//Claim, Compound, Deposit Functions for rewards at app.mummy.finance

const Web3 = require('web3');
var web3 = new Web3('https://rpc.ankr.com/fantom');

var config = require('./config.json');
const private_key = config.pk1
const my_address = web3.eth.accounts.privateKeyToAccount(private_key).address
console.log("Runner Address: " + my_address)

//tokens
const esMMYToken = "0xe41c6c006De9147FC4c84b20cDFBFC679667343F"

//Mummy Reward Pool
const mummyRewardRouterV2 = "0x7b9e962dd8AeD0Db9A1D8a2D7A962ad8b871Ce4F"
const vestedMMY = "0xa1a65D3639A1EFbFB18C82003330a4b1FB620C5a"

//ABI
const mummyRewardRouterV2ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakeGlp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakeGmx","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnstakeGlp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnstakeGmx","type":"event"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"acceptTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_accounts","type":"address[]"}],"name":"batchCompoundForAccounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_accounts","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"batchStakeGmxForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bnGmx","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusGmxTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimEsGmx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"compoundForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"esGmx","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGlpTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGmxTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"glp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"glpManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"glpVester","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gmx","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gmxVester","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gov","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldClaimGmx","type":"bool"},{"internalType":"bool","name":"_shouldStakeGmx","type":"bool"},{"internalType":"bool","name":"_shouldClaimEsGmx","type":"bool"},{"internalType":"bool","name":"_shouldStakeEsGmx","type":"bool"},{"internalType":"bool","name":"_shouldStakeMultiplierPoints","type":"bool"},{"internalType":"bool","name":"_shouldClaimWeth","type":"bool"},{"internalType":"bool","name":"_shouldConvertWethToEth","type":"bool"}],"name":"handleRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_weth","type":"address"},{"internalType":"address","name":"_gmx","type":"address"},{"internalType":"address","name":"_esGmx","type":"address"},{"internalType":"address","name":"_bnGmx","type":"address"},{"internalType":"address","name":"_glp","type":"address"},{"internalType":"address","name":"_stakedGmxTracker","type":"address"},{"internalType":"address","name":"_bonusGmxTracker","type":"address"},{"internalType":"address","name":"_feeGmxTracker","type":"address"},{"internalType":"address","name":"_feeGlpTracker","type":"address"},{"internalType":"address","name":"_stakedGlpTracker","type":"address"},{"internalType":"address","name":"_glpManager","type":"address"},{"internalType":"address","name":"_gmxVester","type":"address"},{"internalType":"address","name":"_glpVester","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minUsdg","type":"uint256"},{"internalType":"uint256","name":"_minGlp","type":"uint256"}],"name":"mintAndStakeGlp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minUsdg","type":"uint256"},{"internalType":"uint256","name":"_minGlp","type":"uint256"}],"name":"mintAndStakeGlpETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingReceivers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_gov","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"name":"signalTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeEsGmx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeGmx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeGmxForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakedGlpTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedGmxTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_glpAmount","type":"uint256"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"unstakeAndRedeemGlp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_glpAmount","type":"uint256"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"unstakeAndRedeemGlpETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstakeEsGmx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstakeGmx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const esMMYABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"addNonStakingAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gov","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"inPrivateTransferMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHandler","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonStakingAccounts","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonStakingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"recoverClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"removeNonStakingAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gov","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_handler","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_inPrivateTransferMode","type":"bool"}],"name":"setInPrivateTransferMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"setInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_yieldTrackers","type":"address[]"}],"name":"setYieldTrackers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"stakedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"yieldTrackers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const vestedMMYABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_vestingDuration","type":"uint256"},{"internalType":"address","name":"_esToken","type":"address"},{"internalType":"address","name":"_pairToken","type":"address"},{"internalType":"address","name":"_claimableToken","type":"address"},{"internalType":"address","name":"_rewardTracker","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"PairTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bonusRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"claimForAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimableToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cumulativeClaimAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cumulativeRewardDeductions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"esToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getCombinedAverageStakedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getMaxVestableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_esAmount","type":"uint256"}],"name":"getPairAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTotalVested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getVestedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gov","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasMaxVestableAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasPairToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasRewardTracker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHandler","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastVestingTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pairAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setBonusRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setCumulativeRewardDeductions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gov","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_handler","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_hasMaxVestableAmount","type":"bool"}],"name":"setHasMaxVestableAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setTransferredAverageStakedAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setTransferredCumulativeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"transferStakeValues","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"transferredAverageStakedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"transferredCumulativeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function getesMMYBalance() {
    var contract = new web3.eth.Contract(esMMYABI, esMMYToken);
    const tokenBalance = await contract.methods.balanceOf(my_address).call();
    console.log("Claimed Balance: " + tokenBalance / 1e18 + " esMMY")
    console.log(tokenBalance)
    return { tokenBalance }
}

async function getGasPrice() {
    //Get current Gas Price, 200 gwei max for tx to cap congestion skyrocket
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Gas Price: " + gasPrice / 1e9 + " gwei")
    const gasUse = gasPrice
    console.log(gasPrice)
    if (gasPrice > 200000000000) {
        var modGasPrice = "200000000000";
        
    } else {
        var modGasPrice = gasPrice;
    }
    console.log("Mod Gas: " + modGasPrice)
    return { gasPrice, modGasPrice }
}

async function getNonce() {
    //Get Nonce
    const nonce = await web3.eth.getTransactionCount(my_address);
    console.log("nonce: " + nonce)
    return { nonce }
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

//Claim Mummy Rewards
async function claim() { 
    //call Gas Price Function
    var gas = await getGasPrice();
    const gasPrice = gas.modGasPrice;

    //call Nonce Function
    var currentNonce = await getNonce();
    const nonce = currentNonce.nonce;
   
    var contract = new web3.eth.Contract(mummyRewardRouterV2ABI, mummyRewardRouterV2);
    //Function: handleRewards(bool _shouldClaimGmx,bool _shouldStakeGmx,bool _shouldClaimEsGmx,bool _shouldStakeEsGmx,bool _shouldStakeMultiplierPoints,bool _shouldClaimWeth,bool _shouldConvertWethToEth)
    //const compoundRewards = await contract.methods.handleRewards(1,1,1,1,1,1,1).encodeABI();
    const claimRewards = await contract.methods.handleRewards(1,0,1,0,0,1,1).encodeABI();
    console.log(claimRewards)

    var gasLimit = await web3.eth.estimateGas({
        from: my_address,
        to: mummyRewardRouterV2,
        value: 0,
        data: claimRewards,
        nonce: nonce
    })

    console.log("Gas Limit: " + gasLimit)

    const tx = {
    from: my_address,
    to: mummyRewardRouterV2,
    gasPrice: gasPrice,
    gas: gasLimit,
    value: 0,
    data: claimRewards,
    nonce: nonce
    }    

        web3.eth.accounts.signTransaction(tx, private_key)
          .catch((e) => console.log(e.message))
              .then((signedTX) => {
  
                  web3.eth.sendSignedTransaction(signedTX.raw || signedTX.rawTransaction)
                      .catch((error) => console.log(`[${Math.floor(Date.now() / 1000)}] broadcast failed ${error.message}`))
                      .then(() => console.log(`[${Math.floor(Date.now() / 1000)}] sent Claim from endpoint `))
              })
        
      console.log("Claimed! Check ftmscan, https://ftmscan.com/address/" + my_address)
      
}

//Deposit esMMY into Vesting Vault
async function depositesMMY() { 
    //get tokens balance to vest
    var tokensPending = await getesMMYBalance();
    const tokenBalance = tokensPending.tokenBalance;

    //call Gas Price Function
    var gas = await getGasPrice();
    const gasPrice = gas.modGasPrice;

    //call Nonce Function
    var currentNonce = await getNonce();
    const nonce = currentNonce.nonce;
   
    var contract = new web3.eth.Contract(vestedMMYABI, vestedMMY);
    //Function: handleRewards(bool _shouldClaimGmx,bool _shouldStakeGmx,bool _shouldClaimEsGmx,bool _shouldStakeEsGmx,bool _shouldStakeMultiplierPoints,bool _shouldClaimWeth,bool _shouldConvertWethToEth)
    //const compoundRewards = await contract.methods.handleRewards(1,1,1,1,1,1,1).encodeABI();
    //const claimRewards = await contract.methods.handleRewards(1,0,1,0,0,1,1).encodeABI();
    const depositesMMY = await contract.methods.deposit(tokenBalance).encodeABI();
    console.log(depositesMMY)

    var gasLimit = await web3.eth.estimateGas({
        from: my_address,
        to: vestedMMY,
        value: 0,
        data: depositesMMY,
        nonce: nonce
    })

    console.log("Gas Limit: " + gasLimit)

    const tx = {
    from: my_address,
    to: vestedMMY,
    gasPrice: gasPrice,
    gas: gasLimit,
    value: 0,
    data: depositesMMY,
    nonce: nonce
    }    

        web3.eth.accounts.signTransaction(tx, private_key)
          .catch((e) => console.log(e.message))
              .then((signedTX) => {
  
                  web3.eth.sendSignedTransaction(signedTX.raw || signedTX.rawTransaction)
                      .catch((error) => console.log(`[${Math.floor(Date.now() / 1000)}] broadcast failed ${error.message}`))
                      .then(() => console.log(`[${Math.floor(Date.now() / 1000)}] sent Claim from endpoint `))
              })
        
      console.log("Deposit esMMY! Check ftmscan, https://ftmscan.com/address/" + my_address)
      
}


//Compound Mummy Rewards
async function compound() { 
    //call Gas Price Function
    var gas = await getGasPrice();
    const gasPrice = gas.modGasPrice;

    //call Nonce Function
    var currentNonce = await getNonce();
    const nonce = currentNonce.nonce;
   
    var contract = new web3.eth.Contract(mummyRewardRouterV2ABI, mummyRewardRouterV2);
    //Function: handleRewards(bool _shouldClaimGmx,bool _shouldStakeGmx,bool _shouldClaimEsGmx,bool _shouldStakeEsGmx,bool _shouldStakeMultiplierPoints,bool _shouldClaimWeth,bool _shouldConvertWethToEth)
    const compoundRewards = await contract.methods.handleRewards(1,1,1,1,1,1,1).encodeABI();
    //const claimRewards = await contract.methods.handleRewards(1,0,1,0,0,1,1).encodeABI();
    console.log(compoundRewards)

    var gasLimit = await web3.eth.estimateGas({
        from: my_address,
        to: mummyRewardRouterV2,
        value: 0,
        data: compoundRewards,
        nonce: nonce
    })

    console.log("Gas Limit: " + gasLimit)

    const tx = {
    from: my_address,
    to: mummyRewardRouterV2,
    gasPrice: gasPrice,
    gas: gasLimit,
    value: 0,
    data: compoundRewards,
    nonce: nonce
    }    

        web3.eth.accounts.signTransaction(tx, private_key)
          .catch((e) => console.log(e.message))
              .then((signedTX) => {
  
                  web3.eth.sendSignedTransaction(signedTX.raw || signedTX.rawTransaction)
                      .catch((error) => console.log(`[${Math.floor(Date.now() / 1000)}] broadcast failed ${error.message}`))
                      .then(() => console.log(`[${Math.floor(Date.now() / 1000)}] sent Claim from endpoint `))
              })
        
      console.log("Compound! Check ftmscan, https://ftmscan.com/address/" + my_address)
      
}



async function profit() {
    //Compound Mummy rewards
    //compound()
    //Claim Mummy Rewards
    claim()
    //Wait 120seconds for claim to go through to read deposit amount
    await sleep(120000);
    depositesMMY()
}

profit()
