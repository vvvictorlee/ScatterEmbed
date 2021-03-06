<template>
    <section>

        <section class="panel-switch">
            <figure class="button" :class="{'active':state === STATES.ADD_TOKEN}" @click="state = STATES.ADD_TOKEN">{{$t('settings.tokens.switch.add')}}</figure>
            <figure class="button" :class="{'active':state === STATES.WHITELIST}" @click="state = STATES.WHITELIST">{{$t('settings.tokens.switch.whitelist')}}</figure>
            <figure class="button" :class="{'active':state === STATES.BLACKLIST}" @click="state = STATES.BLACKLIST">{{$t('settings.tokens.switch.blacklist')}}</figure>
            <figure class="button" :class="{'active':state === STATES.SETTINGS}" @click="state = STATES.SETTINGS">{{$t('settings.tokens.switch.settings')}}</figure>
        </section>


        <section class="scroller">
            <!--------------------------->
            <!------   ADD TOKEN   ------>
            <!--------------------------->
            <section v-if="state === STATES.ADD_TOKEN">

                <section class="split-inputs">

                    <section style="flex:1;">
                        <label>{{$tc('generic.blockchains', 1)}}</label>
                        <Select bordered="1"
                                :selected="{value:newToken.blockchain}"
                                :options="blockchains"
                                :parser="x => blockchainName(x.value)"
                                v-on:selected="x => newToken.blockchain = x.value" />
                    </section>

                    <section style="flex:1;">
                        <label>{{$tc('generic.networks', 1)}}</label>
                        <Select bordered="1"
                                :selected="filteredNetworks.find(x => x.chainId === newToken.chainId)"
                                :options="filteredNetworks"
                                :parser="x => x.name"
                                v-on:selected="x => newToken.chainId = x.chainId" />
                    </section>
                </section>
                <br>

                <section class="split-inputs">
                    <section style="flex:1; margin-bottom:0;">
                        <Input style="margin-bottom:4px;" :label="$t('generic.name')"
                               :text="newToken.name" v-on:changed="x => newToken.name = x" />
                    </section>

                    <Input style="flex:1; margin-bottom:4px;"
                           :placeholder="contractPlaceholder"
                           :label="$tc('generic.contracts', 1)"
                           :text="newToken.contract"
                           v-on:changed="x => newToken.contract = x" />
                </section>
                <br>
                <section class="split-inputs">
                    <Input placeholder="XXX" :label="$t('generic.symbol')" :text="newToken.symbol" v-on:changed="x => newToken.symbol = x" />
                    <Input placeholder="4" type="number" :label="$t('generic.decimals')" :text="newToken.decimals" v-on:changed="x => newToken.decimals = x" />
                </section>

                <section class="split-inputs">
                    <Button style="max-width:100%;" :text="$t('settings.tokens.whitelistButton')" @click.native="addToken(false)" />
                    <Button style="max-width:100%;" red="1" :text="$t('settings.tokens.blacklistButton')" @click.native="addToken(true)" />
                </section>
            </section>




            <!--------------------------->
            <!------   SETTINGS   ------->
            <!--------------------------->
            <section v-if="state === STATES.SETTINGS">

                <section class="action-box top-pad">
                    <label>{{$t('settings.tokens.hidePrimaryBalance')}}</label>
                    <p>{{$t('settings.tokens.hidePrimaryBalanceDescription')}}</p>

                    <br>
                    <br>
                    <Switcher :state="hideMainBalance" @click.native="toggleHiddenBalance" />
                </section>

                <section class="action-box top-pad">
                    <label>{{$t('settings.tokens.filterSmallBalances')}}</label>
                    <p>{{$t('settings.tokens.filterSmallBalancesDescription')}}</p>
                    <br>
                    <br>

                    <Input v-for="blockchain in blockchains"
                           :key="blockchain.value"
                           :placeholder="defaultDecimals(blockchain.value)"
                           :label="blockchainName(blockchain.value)"
                           :text="balanceFilters[blockchain.value]"
                           v-on:changed="x => balanceFilters[blockchain.value] = x"
                           type="number" />
                </section>
            </section>


            <!---------------------------------------->
            <!------   WHITELIST / BLACKLIST   ------->
            <!---------------------------------------->
            <section v-if="state === STATES.WHITELIST || state === STATES.BLACKLIST">

                <section class="tokens" v-if="visibleTokens.length">
                    <section class="badge-item hoverable" v-for="token in visibleTokens">
                        <TokenSymbol :token="token" />
                        <section class="details">
                            <figure class="title"><span v-if="token.amount">{{formatNumber(token.amount, true)}}</span> {{token.symbol}}</figure>
                            <figure class="row long">
                                <figure class="secondary">{{token.network().name}} ({{blockchainName(token.blockchain)}})</figure>
                                <figure class="primary">{{token.contract}}</figure>
                            </figure>
                        </section>
                        <section class="actions">
                            <Button :text="$t('generic.remove')" @click.native="removeToken(token)" />
                        </section>
                    </section>
                </section>

                <section class="no-tokens" v-else>
                    {{$t('settings.tokens.noTokens')}}
                </section>

            </section>
        </section>

    </section>
</template>

<script>
	import { mapActions, mapGetters, mapState } from 'vuex'
	import * as Actions from '@walletpack/core/store/constants';

	import PluginRepository from '@walletpack/core/plugins/PluginRepository';
	import {BlockchainsArray, Blockchains, blockchainName} from '@walletpack/core/models/Blockchains';
	import SearchBar from '../../reusable/SearchBar';
	import Token from "@walletpack/core/models/Token";
	import TokenService from "@walletpack/core/services/utility/TokenService";
	import TokenSymbol from "../../reusable/TokenSymbol";

	const STATES = {
		ADD_TOKEN:'addToken',
		WHITELIST:'whitelist',
		BLACKLIST:'blacklist',
		SETTINGS:'settings',
	};

	let balanceFilterTimeout;

	export default {
		components:{
			TokenSymbol,
			SearchBar
		},
		data () {return {
			state:STATES.WHITELIST,
			STATES,

			blockchain:null,
			blockchains:BlockchainsArray,
			newToken:Token.placeholder(),
			addingToken:false,

			searchTerms:'',

			balanceFilters:{},
		}},
		mounted(){
			this.newToken.blockchain = Blockchains.EOSIO;
			this.newToken.chainId = PluginRepository.plugin(Blockchains.EOSIO).getEndorsedNetwork().chainId;
			// PriceService.getCurrencies().then(x => this.currencies = x);
			this.balanceFilters = this.scatter.settings.balanceFilters;
		},
		computed:{
			...mapState([
				'scatter'
			]),
			...mapGetters([
				'tokens',
				'networks',
				'blacklistTokens',
				'displayToken',
				'displayCurrency',
                'hideMainBalance',
			]),

            visibleTokens(){
			    return this.state === STATES.BLACKLIST ? this.blacklistTokens : this.tokens;
            },


			contractPlaceholder(){
				return PluginRepository.plugin(this.newToken.blockchain).contractPlaceholder();
			},
			terms(){
				return this.searchTerms.trim().toLowerCase();
			},
            filteredNetworks(){
				return this.networks.filter(x => x.blockchain === this.newToken.blockchain);
            },
		},
		methods:{
			filterTokensByTerms(tokensList){
				return tokensList
					.filter(x => {
						return x.symbol.toLowerCase().indexOf(this.terms) > -1
							|| x.name.toLowerCase().indexOf(this.terms) > -1
							|| x.blockchain.toLowerCase().indexOf(this.terms) > -1
							|| this.blockchainName(x.blockchain).toLowerCase().indexOf(this.terms) > -1
					})
			},
			defaultDecimals(blockchain){
				const decimals = PluginRepository.plugin(blockchain).defaultDecimals();
				let stringDecimals = '0.';
				for(let i = 0; i < decimals; i++){ stringDecimals+=i === (decimals-1) ? '1' : '0'; }
				return stringDecimals
			},
			// selectDisplayToken(token){
			// 	const asFiat = token.id.startsWith('fiat_');
			// 	if(asFiat){
			// 		const scatter = this.scatter.clone();
			// 		scatter.settings.displayCurrency = token.title;
			// 		this[Actions.SET_SCATTER](scatter);
			// 	}
            //
			// 	if(!token.id || asFiat) return TokenService.setDisplayToken(null);
			// 	TokenService.setDisplayToken(token.id);
			// },
			async addToken(blacklist = false){
				this.newToken.contract = this.newToken.contract.trim();
				if(await TokenService.addToken(this.newToken.clone(), blacklist)){
					this.state = blacklist ? STATES.BLACKLIST : STATES.WHITELIST;
				}
			},
			async removeToken(token){
				await TokenService.removeToken(token);
			},
			toggleHiddenBalance(){
				const scatter = this.scatter.clone();
				scatter.settings.hideMainBalance = !scatter.settings.hideMainBalance;
				this[Actions.SET_SCATTER](scatter);
			},

			...mapActions([
				Actions.SET_SCATTER
			])
		},
		watch:{
			['newToken.blockchain'](){
				this.newToken.decimals = PluginRepository.plugin(this.newToken.blockchain).defaultDecimals();
				this.newToken.chainId = this.filteredNetworks[0].chainId;
			},
			['balanceFilters'](){
				clearTimeout(balanceFilterTimeout);
				balanceFilterTimeout = setTimeout(() => {
					const scatter = this.scatter.clone();
					scatter.settings.balanceFilters = this.balanceFilters;
					this[Actions.SET_SCATTER](scatter);
				}, 500);
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../styles/variables";

    .scroller {
        padding:0;
        margin:0;
        height:calc(100vh - 230px);
        padding-right:10px;
        overflow-y:auto;
    }

    .no-tokens {
        padding:40px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        color:$lightergrey;
        font-weight: bold;
    }

    .badge-item {
        align-items: center;

        .token-symbol {
            margin-right:10px;
        }
    }

    .fiat-currencies {
        .items {
            display:flex;
            flex-direction: row;
        }
    }

    .search {
        margin-left:-30px;
    }

</style>
