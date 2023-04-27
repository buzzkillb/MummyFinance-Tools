const Web3 = require('web3');
var web3 = new Web3('https://rpc.ftm.tools');

//Contract LP's
const mmyUsdcLP = "0x2a6538a456650cd454dcd8f0b4665183dba0bb27"
const ftmUsdcLP = "0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c"

const esMmy = "0xe41c6c006De9147FC4c84b20cDFBFC679667343F"
//feesGmxTracker, + for Multiplier Point Calcs
const sbfMmy = "0xe149164D8eca659E8912DbDEC35E3f7E71Fb5789"
//feesGlpTracker
const fMmy = "0x7B26207457A9F8fF4fd21A7A0434066935f1D8E7"
//stakedGmxTracker, + for Multiplier Point Calcs
const sMmy = "0x727dB8FA7861340d49d13ea78321D0C9a1a79cd5"
//stakedGlpTracker
const fsMLP = "0xFfB69477FeE0DAEB64E7dE89B57846aFa990e99C"
//bonusGmxTracker
const sbMmy = "0x04f23404553fcc388Ec73110A0206Dd2E76a6d95"
//gmxVester
const vMmy = "0xa1a65D3639A1EFbFB18C82003330a4b1FB620C5a"
//flpVester
const vMlp = "0x2A3E489F713ab6F652aF930555b5bb3422711ac1"
//GlpManager
const glpManager = "0x304951d7172bCAdA54ccAC1E4674862b3d5b3d5b"

//Contract ABI's
const sbfMmyABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BASIS_POINTS_DIVISOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"averageStakedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"claimForAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimableReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cumulativeRewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cumulativeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"depositBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gov","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inPrivateClaimingMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inPrivateStakingMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inPrivateTransferMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_depositTokens","type":"address[]"},{"internalType":"address","name":"_distributor","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isDepositToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHandler","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"previousCumulatedRewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"bool","name":"_isDepositToken","type":"bool"}],"name":"setDepositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gov","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_handler","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_inPrivateClaimingMode","type":"bool"}],"name":"setInPrivateClaimingMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_inPrivateStakingMode","type":"bool"}],"name":"setInPrivateStakingMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_inPrivateTransferMode","type":"bool"}],"name":"setInPrivateTransferMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fundingAccount","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDepositSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"unstakeForAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const lpABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const glpManagerABI = [{"inputs":[{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_usdg","type":"address"},{"internalType":"address","name":"_glp","type":"address"},{"internalType":"address","name":"_shortsTracker","type":"address"},{"internalType":"uint256","name":"_cooldownDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"aumInUsdg","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"glpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdgAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"glpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"aumInUsdg","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"glpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdgAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"inputs":[],"name":"BASIS_POINTS_DIVISOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GLP_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_COOLDOWN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDG_DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minUsdg","type":"uint256"},{"internalType":"uint256","name":"_minGlp","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fundingAccount","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minUsdg","type":"uint256"},{"internalType":"uint256","name":"_minGlp","type":"uint256"}],"name":"addLiquidityForAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"aumAddition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aumDeduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cooldownDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"maximise","type":"bool"}],"name":"getAum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"maximise","type":"bool"}],"name":"getAumInUsdg","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAums","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getGlobalShortAveragePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getGlobalShortDelta","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_maximise","type":"bool"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"glp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gov","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inPrivateMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isHandler","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastAddedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_glpAmount","type":"uint256"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_glpAmount","type":"uint256"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"removeLiquidityForAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aumAddition","type":"uint256"},{"internalType":"uint256","name":"_aumDeduction","type":"uint256"}],"name":"setAumAdjustment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cooldownDuration","type":"uint256"}],"name":"setCooldownDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gov","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_handler","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_inPrivateMode","type":"bool"}],"name":"setInPrivateMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IShortsTracker","name":"_shortsTracker","type":"address"}],"name":"setShortsTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shortsTrackerAveragePriceWeight","type":"uint256"}],"name":"setShortsTrackerAveragePriceWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shortsTracker","outputs":[{"internalType":"contract IShortsTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"shortsTrackerAveragePriceWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdg","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"contract IVault","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

//Watch websockets for new blocks
const WSS_ENDPOINT1 = "wss://wsapi.fantom.network/"
const WSS_ENDPOINT2 = "wss://fantom-mainnet.public.blastapi.io"
var options = {
    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 1000,
        onTimeout: false
    }
};

//choose 1 or 2 for WSS Endpoint
const web3s = new Web3(new Web3.providers.WebsocketProvider(WSS_ENDPOINT1, options));
web3s.eth.subscribe('newBlockHeaders', function (err, result) {
     if(!err) {
         console.log("Index Number: " + result.number);
         //Get Mummy Stats on each Index Number
         getData()
     }
});


//generic SpookySwap LP
async function getSpookySwapLpMmyUsdc() {
    //MMY-USDC Spooky LP (spLP) LP
    var contract = new web3.eth.Contract(lpABI, mmyUsdcLP);
    const totalSupplyspLP = await contract.methods.totalSupply().call();
    const reserves = await contract.methods.getReserves().call();
    var ReservesOne = reserves[0];
    var ReservesTwo = reserves[1];
    var Price = ReservesTwo / ReservesOne;
    //console.log(Price * 1e12)
    return { totalSupplyspLP, reserves, ReservesOne, ReservesTwo, Price };
};

async function getSpookySwapLpUsdcFtm() {
    //FTM-USDC Spooky LP (spLP) LP
    var contract = new web3.eth.Contract(lpABI, ftmUsdcLP);
    const totalSupplyspLP = await contract.methods.totalSupply().call();
    const reserves = await contract.methods.getReserves().call();
    var ReservesOne = reserves[1];
    var ReservesTwo = reserves[0];
    var Price = ReservesTwo / ReservesOne;
    //console.log(Price * 1e12)
    return { totalSupplyspLP, reserves, ReservesOne, ReservesTwo, Price };
};

async function getMlpPrice() {
    var contract = new web3.eth.Contract(glpManagerABI, glpManager);
    const glpPrice = await contract.methods.getPrice("true").call();
    //console.log("MLP Price: $" + glpPrice / 1e30)
    return { glpPrice };
};

async function getSbfMmyApr() {
    var contract = new web3.eth.Contract(sbfMmyABI, sbfMmy);
    const tokensPerInterval = await contract.methods.tokensPerInterval().call();
    const totalSupply = await contract.methods.totalSupply().call();
    return { tokensPerInterval, totalSupply }
};

async function getfMmyApr() {
    var contract = new web3.eth.Contract(sbfMmyABI, fMmy);
    const tokensPerInterval = await contract.methods.tokensPerInterval().call();
    const totalSupply = await contract.methods.totalSupply().call();
    return { tokensPerInterval, totalSupply }
};

async function getsMmyApr() {
    var contract = new web3.eth.Contract(sbfMmyABI, sMmy);
    const tokensPerInterval = await contract.methods.tokensPerInterval().call();
    const totalSupply = await contract.methods.totalSupply().call();
    return { tokensPerInterval, totalSupply }
};

async function getfsMlpApr() {
    var contract = new web3.eth.Contract(sbfMmyABI, fsMLP);
    const tokensPerInterval = await contract.methods.tokensPerInterval().call();
    const totalSupply = await contract.methods.totalSupply().call();
    return { tokensPerInterval, totalSupply }
};

async function getsbMmyApr() {
    var contract = new web3.eth.Contract(sbfMmyABI, sbMmy);
    const tokensPerInterval = await contract.methods.tokensPerInterval().call();
    const totalSupply = await contract.methods.totalSupply().call();
    return { tokensPerInterval, totalSupply }
};

async function getData() {
    const [getUsdcFtmPrice, getMmyUsdcPrice, getUsdcMlpPrice, sbfMmy, fMmy, sMmy, fsMlp] = await Promise.all([getSpookySwapLpUsdcFtm(), getSpookySwapLpMmyUsdc(), getMlpPrice(), getSbfMmyApr(), getfMmyApr(), getsMmyApr(), getfsMlpApr()]);

    var FtmPrice = getUsdcFtmPrice.Price * 1e12;
    console.log("FTM: $" + FtmPrice)
    var MmyPrice = getMmyUsdcPrice.Price * 1e12;
    console.log("MMY: $" + MmyPrice)
    const mmyFtmPrice = MmyPrice / FtmPrice
    console.log("MMY/FTM: " + mmyFtmPrice)

    var MlpPrice = getUsdcMlpPrice.glpPrice / 1e30;
    console.log("MLP: $" + MlpPrice)

    var sbfTokenPerInterval = sbfMmy.tokensPerInterval
    var sbfTotalSupply = sbfMmy.totalSupply

    convertSbfRewards = sbfTokenPerInterval * 60 * 60 * 24 * 365 * FtmPrice
    convertSbfSupply = sbfTotalSupply * MmyPrice

    sbfApr = convertSbfRewards / convertSbfSupply
    console.log("sbfMMY: " + sbfApr + "  " + sbfApr * 100 + "%")

    var fTokenPerInterval = fMmy.tokensPerInterval
    var fTotalSupply = fMmy.totalSupply

    convertfRewards = fTokenPerInterval * 60 * 60 * 24 * 365 * FtmPrice
    convertfSupply = fTotalSupply * MlpPrice

    fApr = convertfRewards / convertfSupply
    console.log("fMMY: " + fApr + "  " + fApr * 100 + "%")

    var sTokenPerInterval = sMmy.tokensPerInterval
    var sTotalSupply = sMmy.totalSupply
    
    convertsRewards = sTokenPerInterval * 60 * 60 * 24 * 365 * MmyPrice
    convertsSupply = sTotalSupply * MmyPrice

    sApr = convertsRewards / convertsSupply
    console.log("sMMY: " + sApr + "  " + sApr * 100 + "%")

    var fsMlpTokenPerInterval = fsMlp.tokensPerInterval
    var fsMlpTotalSupply = fsMlp.totalSupply

    convertfsMlpRewards = fsMlpTokenPerInterval * 60 * 60 * 24 * 365 * MmyPrice
    convertfsMlpSupply = fsMlpTotalSupply * MlpPrice

    fsMlpApr = convertfsMlpRewards / convertfsMlpSupply
    console.log("fsMlp: " + fsMlpApr + "  " + fsMlpApr * 100 + "%")
}
