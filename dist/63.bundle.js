(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"41i1":function(t,i,e){(t.exports=e("JPst")(!1)).push([t.i,".identity[data-v-752dd70c]{padding:0;height:calc(100vh - 140px)}.identity .id-card[data-v-752dd70c]{padding:30px;position:relative;overflow:hidden}@media (max-width: 920px){.identity .id-card[data-v-752dd70c]{padding:20px}}@media (max-width: 600px){.identity .id-card[data-v-752dd70c]{padding:0px}}.identity .id-card .bg[data-v-752dd70c]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.identity .id-card .bg img[data-v-752dd70c]{width:100%;height:150%}.identity .id-card .card[data-v-752dd70c]{position:relative;z-index:1;background:#fff;width:100%;border-radius:0;box-shadow:0 2px 10px rgba(0,0,0,0.2),0 2px 5px rgba(0,0,0,0.2);overflow:hidden;max-width:600px;margin:0 auto;display:flex}@media (max-width: 920px){.identity .id-card .card[data-v-752dd70c]{border-radius:0}}@media (max-width: 600px){.identity .id-card .card[data-v-752dd70c]{border-radius:0px;box-shadow:0;border-bottom:1px solid #dfe0e1;flex-direction:column}}.identity .id-card .card .avatar[data-v-752dd70c]{flex:0.4;border-right:1px solid #dfe0e1;padding:30px;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}.identity .id-card .card .avatar .image[data-v-752dd70c]{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;display:block;z-index:-1;background-size:cover;background-position:center}.identity .id-card .card .avatar .image[data-v-752dd70c]:after{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);transition:background 0.3s ease}.identity .id-card .card .avatar .upload[data-v-752dd70c]{color:#fff;display:flex;align-items:center;justify-content:center}.identity .id-card .card .avatar .upload .icon[data-v-752dd70c]{margin:10px 5px;position:relative;z-index:1;cursor:pointer;width:45px;height:45px;line-height:45px;border-radius:50%;background:#0799ff;color:#fff;font-size:24px;text-align:center;opacity:1;transition:opacity 0.2s ease}.identity .id-card .card .avatar.has-image .upload .icon[data-v-752dd70c]{opacity:0}.identity .id-card .card .avatar.has-image:hover .image[data-v-752dd70c]:after{background:rgba(0,0,0,0.6)}.identity .id-card .card .avatar.has-image:hover .upload .icon[data-v-752dd70c]{opacity:1}.identity .id-card .card .personal[data-v-752dd70c]{flex:1;padding:30px;position:relative;overflow:hidden}.identity .id-card .card .personal .bg[data-v-752dd70c]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.identity .id-card .card .personal .bg img[data-v-752dd70c]{width:100%;height:100%}.identity .id-card .card .personal .inputs label[data-v-752dd70c]{margin:0 !important;color:#333 !important}.identity .id-details[data-v-752dd70c]{padding:30px}@media (max-width: 920px){.identity .id-details[data-v-752dd70c]{padding:20px}}.identity .id-details .ridl-actions[data-v-752dd70c]{display:flex;justify-content:space-between;align-items:center}.identity .id-details .ridl-actions .icon[data-v-752dd70c]{width:24px;height:24px;font-size:14px;border-radius:50%;border:1px solid #0799ff;color:#0799ff;margin-right:10px;display:flex;justify-content:center;align-items:center}.identity .id-details .ridl-actions .icon.red[data-v-752dd70c]{background:#ff0707;color:#fff;border:0}.identity .id-details .ridl-actions .text[data-v-752dd70c]{font-size:12px;font-weight:bold;flex:1;padding-right:20px}.identity .id-details .ridl-actions .text p[data-v-752dd70c]{margin:0;color:#7a7a7a}\n",""])},kNX8:function(t,i,e){"use strict";var a=e("luAx");e.n(a).a},lkON:function(t,i,e){"use strict";e.r(i);var a=e("L2JU"),n=e("qjwK"),s=e("SDtL"),d=e.n(s),l=e("EY8S"),c=e.n(l),r=e("IfgB"),o=e("Gbp+"),h=e("bcyO");let u;var y={data:()=>({identity:null,fullname:"",availableIdentity:!1,loadingRidlData:!1}),computed:{...Object(a.d)(["scatter"]),...Object(a.c)(["identities","locations","avatars","accounts"]),labelStyles:()=>({style:"color:#444; margin-bottom:0;"}),isValidName(){return this.identity&&c.a.nameIsValid(this.identity.name)},nameExists(){return this.identities.find(t=>t.id!==this.identity.id&&t.name.toLowerCase()===this.identity.name.toLowerCase())},nameError(){return this.isValidName?!!this.nameExists&&"This name exists.":"This name is invalid."},selectedLocation(){return this.locations.find(t=>t.id===this.identity.location)},avatar(){if(this.identity)return this.avatars[this.identity.id]},ridlAccount(){return this.accounts.find(t=>t.networkUnique===h.b.networkUnique())},identityIsAvailable(){return!this.availableIdentity},identityNotAvailable(){return this.availableIdentity&&this.availableIdentity.key!==this.identity.publicKey},identityIsClaimable(){return!!this.availableIdentity&&(this.availableIdentity.key===this.identity.publicKey&&"ridlridlridl"===this.availableIdentity.account)},identityIsUsable(){return this.availableIdentity&&this.ridlAccount&&this.availableIdentity.key===this.identity.publicKey&&this.availableIdentity.account===this.ridlAccount.name},identityIsOnWrongAccount(){return this.availableIdentity&&this.ridlAccount&&this.availableIdentity.key===this.identity.publicKey&&this.availableIdentity.account!==this.ridlAccount.name},identityIsOnWrongKey(){return this.availableIdentity&&this.ridlAccount&&this.availableIdentity.key!==this.identity.publicKey&&this.availableIdentity.account===this.ridlAccount.name},isUsingIdentity(){return!!this.availableIdentity&&this.availableIdentity.id===this.identity.ridl}},mounted(){this.selectIdentity(this.identities[0]),this.ridlAccount||h.b.init()},methods:{selectIdentity(t){this.identity=t?t.clone():null,this.fullname=[this.identity.personal.firstname,this.identity.personal.lastname].filter(t=>t&&t.length).join(" ")},addIdentity(){const t=this.scatter.clone(),i=c.a.placeholder();i.name=`New_Identity-${d.a.text(4)}`,t.keychain.updateOrPushIdentity(i),this[n.SET_SCATTER](t),this.selectIdentity(i)},removeIdentity(){r.a.push(o.a.prompt("Removing Identity",`Are you sure you want to remove ${this.identity.name}`,t=>{if(!t)return;const i=this.identity.clone();this.identity=this.identities.filter(t=>t.id!==i.id)[0];const e=this.scatter.clone();e.keychain.removeIdentity(i),this[n.SET_SCATTER](e)},!0))},async removeAvatar(){const t=this.scatter.clone();delete t.keychain.avatars[this.identity.id],this[n.SET_SCATTER](t)},async uploadAvatar(){let t=await window.wallet.storage.getFileLocation(["jpg","png","jpeg"]);if(!t||!t.length)return;let i=(t=t[0]).split(".");i=i[i.length-1];const e=await window.wallet.storage.openFile(t,{encoding:"base64"});if(!e)return r.a.push(o.a.snackbar("Error converting image file."));const a=document.createElement("canvas"),s=a.getContext("2d"),d=new Image;d.onload=t=>{const e=()=>{const t=Math.min(350/d.width,350/d.height);return{width:Math.round(d.width*t),height:Math.round(d.height*t)}};a.height=e().height,a.width=e().width,s.drawImage(d,0,0,d.width,d.height,0,0,e().width,e().height);const l=new Image;l.src=a.toDataURL(`image/${i}`);const c=this.scatter.clone();c.keychain.avatars[this.identity.id]=l.src,this[n.SET_SCATTER](c)},d.src=`data:image/${i};base64, ${e}`},changeSecurityKey(){r.a.push(o.a.verifyPassword(t=>{t&&r.a.push(o.a.changeIdentityKey(this.identity,t=>{t&&(this.selectIdentity(this.identities.find(t=>t.id===this.identity.id)),this.identity.ridl=-1)}))}))},async updateRidlKey(){this.loadingRidlData||(this.loadingRidlData=!0,await h.b.changeKey(this.identity.name,this.identity.publicKey)?setTimeout(async()=>{this.availableIdentity=await h.b.identityNameIsAvailable(this.identity.name),this.useRidlIdentity(!0),this.loadingRidlData=!1},1e3):this.loadingRidlData=!1)},async updateRidlAccount(){if(this.loadingRidlData)return;this.loadingRidlData=!0;await h.b.changeAccount(this.identity.name,this.ridlAccount.name);this.loadingRidlData=!1},async registerForRIDL(){if(this.loadingRidlData)return;const t=this.identity.name,i=await h.b.identityNameIsAvailable(t);let e;if(!(e=await h.b.getAccount())&&!(e=await h.b.createAccount()))return console.error("Could not create account.");if(this.loadingRidlData=!0,i){const t=await h.b.claim(this.identity.name,this.identity.publicKey).catch(()=>null);if(this.loadingRidlData=!1,!t)return r.a.push(o.a.snackbar("Could not claim identity."));this.identity.ridl=this.availableIdentity.id}else{const i=await h.b.identify(t,this.identity.publicKey).catch(()=>null);if(this.loadingRidlData=!1,!i)return r.a.push(o.a.snackbar("Could not identify identity."));this.identity.ridl=i.id,this.availableIdentity=i}},async useRidlIdentity(t=!1){!t&&this.loadingRidlData||(this.identity.ridl=this.availableIdentity.id)},async stopUsingRidlIdentity(){this.identity.ridl=-1},save(){if(!this.identity)return;const t=this.identities.find(t=>t.id===this.identity.id);if(t&&JSON.stringify(t)===JSON.stringify(this.identity))return;if(!this.isValidName)return;if(this.nameExists)return;const i=this.scatter.clone();i.keychain.updateOrPushIdentity(this.identity),this[n.SET_SCATTER](i)},...Object(a.b)([n.SET_SCATTER])},watch:{fullname(){if(!this.fullname.trim().length)return this.identity.personal.firstname="",this.identity.personal.lastname="",!1;const t=this.fullname.trim().split(" ");this.identity.personal.firstname=t.slice(0,t.length>1?t.length-1:1).join(" ").trim(),this.identity.personal.lastname=t.length>1?t[t.length-1].trim():""},identity:{handler(){clearTimeout(u),u=setTimeout(()=>{this.save()},500)},deep:!0},async"identity.name"(){this.availableIdentity=null,this.isValidName&&(this.loadingRidlData=!0,this.availableIdentity=await h.b.identityNameIsAvailable(this.identity.name),this.loadingRidlData=!1)}}},v=(e("kNX8"),e("KHd+")),g=Object(v.a)(y,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[t.identity?e("section",{staticClass:"blockchain-list-container"},[t.isMobile&&t.identity?t._e():e("section",{staticClass:"blockchains",class:{"full-width":t.isMobile}},[e("section",{staticClass:"head with-button"},[e("figure",[t._v("Identities")]),t._v(" "),e("Button",{attrs:{text:"Add"},nativeOn:{click:function(i){return t.addIdentity(i)}}})],1),t._v(" "),e("section",{staticClass:"scroller"},[e("section",{staticClass:"blockchain-list"},t._l(t.identities,(function(i){return e("section",{staticClass:"badge-item hoverable",class:{active:t.identity.id===i.id},on:{click:function(e){return t.selectIdentity(i)}}},[e("figure",{staticClass:"badge iconed small icon-user"}),t._v(" "),e("section",{staticClass:"details"},[e("figure",{staticClass:"title"},[t._v(t._s(i.name))])])])})),0)])]),t._v(" "),t.identity?e("section",{staticClass:"list-container"},[e("section",{staticClass:"head with-button"},[e("figure",[t.isMobile?e("figure",{staticClass:"back-button",on:{click:function(i){return t.selectIdentity(null)}}},[e("i",{staticClass:"fal fa-arrow-left"})]):t._e()]),t._v(" "),t.identities.length>1?e("Button",{attrs:{text:"Remove"},nativeOn:{click:function(i){return t.removeIdentity(i)}}}):t._e()],1),t._v(" "),e("section",{staticClass:"scroller identity"},[e("section",{staticClass:"id-card"},[t._m(0),t._v(" "),e("section",{staticClass:"card"},[e("section",{staticClass:"avatar",class:{"has-image":t.scatter.keychain.avatars[t.identity.id]}},[t.avatar?e("figure",{staticClass:"image",style:"background-image:url('"+t.avatar+"')"}):e("img",{attrs:{src:"static/assets/id_card_avatar.png"}}),t._v(" "),e("figure",{staticClass:"upload"},[t.scatter.keychain.avatars[t.identity.id]?e("figure",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Remove",expression:"'Remove'"}],staticClass:"icon icon-cancel",on:{click:t.removeAvatar}}):t._e(),t._v(" "),e("figure",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.scatter.keychain.avatars[t.identity.id]?"Change":"Add an Image",expression:"scatter.keychain.avatars[identity.id] ? 'Change' : 'Add an Image'"}],staticClass:"icon icon-plus",on:{click:t.uploadAvatar}})])]),t._v(" "),e("section",{staticClass:"personal"},[t._m(1),t._v(" "),e("section",{staticClass:"inputs"},[e("Input",{attrs:{"label-styles":t.labelStyles,label:t.locale(t.langKeys.IDENTITY.PERSONAL.NameLabel),placeholder:t.locale(t.langKeys.IDENTITY.PERSONAL.NamePlaceholder),text:t.fullname},on:{changed:function(i){return t.fullname=i}}}),t._v(" "),e("Input",{staticStyle:{flex:"1"},attrs:{"label-styles":t.labelStyles,small:"1",label:t.locale(t.langKeys.IDENTITY.PERSONAL.EmailLabel),placeholder:"support@get-scatter.com",text:t.identity.personal.email},on:{changed:function(i){return t.identity.personal.email=i}}}),t._v(" "),e("Input",{staticStyle:{flex:"0.4","margin-top":"15px"},attrs:{"label-styles":t.labelStyles,small:"1",label:t.locale(t.langKeys.IDENTITY.PERSONAL.DateOfBirthLabel),type:"date",placeholder:"MM/DD/YYYY",text:t.identity.personal.birthdate},on:{changed:function(i){return t.identity.personal.birthdate=i}}})],1)])])]),t._v(" "),e("section",{staticClass:"id-details limit-800"},[e("figure",{staticClass:"section-title"},[t._v(t._s(t.locale(t.langKeys.IDENTITY.NameLabel)))]),t._v(" "),e("Input",{attrs:{error:t.nameError,big:"1",placeholder:t.locale(t.langKeys.IDENTITY.NamePlaceholder),text:t.identity.name},on:{changed:function(i){return t.identity.name=i}}}),t._v(" "),t.isUsingIdentity?t._e():e("section",[t.identityIsAvailable&&t.isValidName?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-check"}),t._v(" "),e("figure",{staticClass:"text"},[t._v("This RIDL Identity name is available")]),t._v(" "),e("Button",{attrs:{loading:t.loadingRidlData,small:"1",text:"Register as RIDL Identity"},nativeOn:{click:function(i){return t.registerForRIDL(i)}}})],1):t._e(),t._v(" "),t.identityNotAvailable&&!t.identityIsOnWrongKey?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-cancel red"}),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.identityNotAvailable&&t.identityIsOnWrongKey?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-cancel red"}),t._v(" "),t._m(3),t._v(" "),e("Button",{attrs:{loading:t.loadingRidlData,small:"1",text:"Update Authentication Key"},nativeOn:{click:function(i){return t.updateRidlKey(i)}}})],1):t._e(),t._v(" "),t.identityIsUsable?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-check"}),t._v(" "),e("figure",{staticClass:"text"},[t._v("You own this RIDL Identity name")]),t._v(" "),e("Button",{attrs:{loading:t.loadingRidlData,small:"1",text:"Use RIDL Identity"},nativeOn:{click:function(i){return t.useRidlIdentity(i)}}})],1):t._e(),t._v(" "),t.identityIsClaimable?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-check"}),t._v(" "),e("figure",{staticClass:"text"},[t._v("You own this RIDL Identity name, but haven't claimed it yet.")]),t._v(" "),e("Button",{attrs:{loading:t.loadingRidlData,small:"1",text:"Claim RIDL Identity"},nativeOn:{click:function(i){return t.registerForRIDL(i)}}})],1):t._e(),t._v(" "),t.identityIsOnWrongAccount?e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-cancel red"}),t._v(" "),t._m(4)]):t._e(),t._v(" "),e("br"),t._v(" "),e("br")]),t._v(" "),t.isUsingIdentity?e("section",[e("section",{staticClass:"ridl-actions"},[e("figure",{staticClass:"icon icon-user"}),t._v(" "),e("figure",{staticClass:"text"},[t._v("This Identity is registered with RIDL")]),t._v(" "),e("Button",{attrs:{red:"1",loading:t.loadingRidlData,small:"1",text:"Stop using RIDL Identity"},nativeOn:{click:function(i){return t.stopUsingRidlIdentity(i)}}})],1),t._v(" "),e("br"),t._v(" "),e("br")]):t._e(),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("figure",{staticClass:"section-title"},[t._v("Location")]),t._v(" "),e("Select",{attrs:{bordered:"1",options:[null].concat(t.locations),parser:function(t){return t?t.name:"None selected"},selected:t.selectedLocation},on:{selected:function(i){return t.identity.location=i?i.id:null}}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("figure",{staticClass:"section-title"},[t._v("Authentication Key")]),t._v(" "),e("p",[t._v("Make sure you save a copy of this authentication key, you will need it to regain access to certain applications that require it.")]),t._v(" "),e("section",{staticClass:"split-inputs"},[e("section",{staticStyle:{flex:"1"}},[e("Input",{staticStyle:{margin:"0"},attrs:{text:t.identity.publicKey,disabled:"1",copy:"1"}})],1),t._v(" "),e("section",[e("Button",{attrs:{text:"Change / View"},nativeOn:{click:function(i){return t.changeSecurityKey(i)}}})],1)]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br")],1)])]):t._e()]):t._e()])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("figure",{staticClass:"bg"},[i("img",{attrs:{src:"static/assets/login_bg.jpg"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("figure",{staticClass:"bg"},[i("img",{attrs:{src:"static/assets/id_card_bg.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("figure",{staticClass:"text"},[this._v("\n\t\t\t\t\t\t\t\tThis RIDL Identity name is already taken\n\t\t\t\t\t\t\t\t"),i("p",[this._v("Someone else has already claimed and registered this RIDL Identity name.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("figure",{staticClass:"text"},[this._v("\n\t\t\t\t\t\t\t\tYou own this RIDL Identity, but the authentication key doesn't match.\n\t\t\t\t\t\t\t\t"),i("p",[this._v("You can either change the authentication key you are using for this identity, or update the authentication key to the one you are using now.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("figure",{staticClass:"text"},[this._v("\n\t\t\t\t\t\t\t\tThis RIDL Identity is linked to an account you don't have imported in your Scatter.\n\t\t\t\t\t\t\t\t"),i("p",[this._v("\n\t\t\t\t\t\t\t\t\tThe blockchain account associated with this RIDL Identity is not currently imported into your Scatter.\n\t\t\t\t\t\t\t\t")])])}],!1,null,"752dd70c",null);i.default=g.exports},luAx:function(t,i,e){var a=e("41i1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("SZ7m").default)("cd2b5328",a,!0,{})}}]);