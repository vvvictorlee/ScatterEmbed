(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"8Yeu":function(t,e,a){"use strict";var i=a("M1sK");a.n(i).a},C6GT:function(t,e,a){"use strict";a.r(e);var i=a("L2JU"),s=a("IeaP"),n=a("RNqi"),o=(a("EY8S"),a("78si"),{props:["popup"],components:{RequiredFields:a("psvp").a,PopOutApp:s.a,SearchBar:n.a},data:()=>({}),created(){},computed:{...Object(i.d)(["scatter","balances"]),...Object(i.c)(["identity","identities","accounts","networks"]),payload(){return this.popup.payload()},kycBlock(){if(!this.payload.kyc)return[];let t=0;return this.payload.kyc.split("::")[1].split("").reduce((e,a,i)=>(i>1&&i%24==0&&t++,e.hasOwnProperty(t)||(e[t]=""),e[t]+=a,e),[])}},methods:{returnResult(t){this.$emit("returned",t)}}}),r=(a("sRAR"),a("KHd+")),p=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"popout-window"},[a("PopOutApp",{attrs:{app:t.popup.data.props.appData,suffix:"wants to"}}),t._v(" "),a("section",{staticClass:"update-identity"},[t.payload.name?a("section",[a("label",[t._v("Change your identity name")]),t._v(" "),a("figure",{staticClass:"value"},[t._v(t._s(t.payload.name))])]):t._e(),t._v(" "),t.payload.kyc?a("section",[a("br"),t._v(" "),a("br"),t._v(" "),a("label",[t._v("Add KYC proofs")]),t._v(" "),a("figure",{staticClass:"value"},[t._v(t._s(t.payload.kyc.split("::")[0]))]),t._v(" "),t._l(t.kycBlock,(function(e){return a("figure",{staticClass:"value",staticStyle:{"font-size":"9px","line-height":"6px"}},[t._v(t._s(e))])}))],2):t._e(),t._v(" "),a("section",{staticClass:"fixed-actions"},[a("Button",{attrs:{text:t.locale(t.langKeys.GENERIC.Cancel),big:"1"},nativeOn:{click:function(e){return t.returnResult(null)}}}),t._v(" "),a("Button",{attrs:{text:t.locale(t.langKeys.GENERIC.Allow),blue:"1",big:"1"},nativeOn:{click:function(e){return t.returnResult(!0)}}})],1)])],1)}),[],!1,null,"98aebf22",null);e.default=p.exports},I0EU:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,".app-details[data-v-98aebf22]{padding:50px 50px 20px 50px}.update-identity[data-v-98aebf22]{text-align:center;padding:50px}.update-identity label[data-v-98aebf22]{display:block;font-size:10px}.update-identity .value[data-v-98aebf22]{font-size:12px;font-weight:bold}.fixed-actions[data-v-98aebf22]{justify-content:space-between;display:flex}\n",""])},IeaP:function(t,e,a){"use strict";var i=a("L2JU"),s={components:{Scatter:a("wg2a").a},props:["app","suffix"],computed:{...Object(i.d)(["appReputation"]),...Object(i.c)(["ridlEnabled"]),unknownReputation(){return void 0===this.appReputation},trusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)>0},untrusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)<0}}},n=(a("qEK9"),a("KHd+")),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-details"},[t.untrusted?a("figure",{staticClass:"logo scam"},[a("i",{staticClass:"icon-attention"})]):a("figure",{staticClass:"logo",class:{border:"Scatter"!==t.app.applink&&!t.app.img}},["Scatter"===t.app.applink?a("Scatter"):t.app.img?a("img",{attrs:{src:t.app.img}}):a("span",[t._v("No Image")])],1),t._v(" "),t.ridlEnabled&&"Scatter"!==t.app.applink?a("section",[!1===t.appReputation?a("figure",{staticClass:"reputation"},[a("i",{staticClass:"icon-spin4 animate-spin"}),t._v(" loading reputation")]):a("section",[t.unknownReputation?a("figure",{staticClass:"reputation"},[t._v("Unknown Reputation")]):t._e(),t._v(" "),t.trusted?a("figure",{staticClass:"reputation trusted"},[t._v("Trustworthy")]):t._e(),t._v(" "),t.untrusted?a("figure",{staticClass:"reputation untrusted"},[t._v("Known Scam")]):t._e()])]):t._e(),t._v(" "),a("figure",{staticClass:"name"},[a("b",[t._v(t._s(t.app.name))]),t._v(" "),t.suffix?a("span",[t._v(t._s(t.suffix))]):t._e()])])}),[],!1,null,"24ae06ac",null);e.a=o.exports},M1sK:function(t,e,a){var i=a("QBFQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("SZ7m").default)("66bb7c78",i,!0,{})},Mq7R:function(t,e,a){var i=a("edmm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("SZ7m").default)("5b3a30d5",i,!0,{})},OA5I:function(t,e,a){var i=a("I0EU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("SZ7m").default)("3032e533",i,!0,{})},QBFQ:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,".fields-title[data-v-0a29a3fd]{margin:-20px -30px 0;padding:20px 30px;background:linear-gradient(180deg, #007fd7 0%, #0799ff 100%);color:#fff;font-size:18px;margin-bottom:20px}.required-fields[data-v-0a29a3fd]{padding:20px 0 0}\n",""])},edmm:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,".reputation[data-v-24ae06ac]{padding:5px 12px;font-size:10px;margin-bottom:10px;margin-top:-5px;font-weight:bold;background:#f3f6f7;color:#c8c8c8}.reputation.trusted[data-v-24ae06ac]{background:#159F00;color:#fff}.reputation.untrusted[data-v-24ae06ac]{background:#ff0707;color:#fff}.app-details[data-v-24ae06ac]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-details .logo[data-v-24ae06ac]{display:flex;align-items:center;justify-content:center;height:100px;width:100px;border-radius:0;padding:5px;margin-bottom:20px}.app-details .logo.border[data-v-24ae06ac]{background:#f3f6f7;border:1px solid #dfe0e1}.app-details .logo img[data-v-24ae06ac]{height:100%;width:100%}.app-details .logo span[data-v-24ae06ac]{font-size:10px;font-weight:bold;color:#7a7a7a}.app-details .logo.scam[data-v-24ae06ac]{font-size:48px;border-radius:50%;color:#ff0707;background:#f3f6f7;border:1px solid #dfe0e1;animation:pulsate 0.5s ease infinite}.app-details .name[data-v-24ae06ac]{font-size:14px}\n",""])},psvp:function(t,e,a){"use strict";a("L2JU");var i={props:["fields","identity","selectedIdentity","selectedLocation","clonedLocation"],data:()=>({}),computed:{identityRequirements(){return this.personalFields.concat(this.locationFields).join(", ")},personalFields(){return this.fields.personal},locationFields(){return this.fields.location}},methods:{fieldValueFor(t,e=!1){return e?this.identity.getPropertyValueByName(t,this.selectedLocation):this.selectedIdentity.getPropertyValueByName(t,this.clonedLocation)}}},s=(a("8Yeu"),a("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"required-fields"},[e("section",{staticClass:"fields-title"},[this._v("\n\t\tRequired Identity Fields\n\t")]),this._v(" "),e("section",[e("label",[this._v("Personal information:")]),this._v(" "),e("figure",{staticClass:"text"},[this._v("\n\t\t\t"+this._s(this.identityRequirements)+"\n\t\t")])])])}),[],!1,null,"0a29a3fd",null);e.a=n.exports},qEK9:function(t,e,a){"use strict";var i=a("Mq7R");a.n(i).a},sRAR:function(t,e,a){"use strict";var i=a("OA5I");a.n(i).a},wg2a:function(t,e,a){"use strict";var i=a("KHd+"),s=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"88px",height:"88px",viewBox:"0 0 88 88",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{id:"welcome_scatter",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[e("g",{attrs:{id:"Group",stroke:"#00A8FF"}},[e("g",{attrs:{id:"Icon"}},[e("circle",{attrs:{id:"Base",cx:"44",cy:"44",r:"43.7079646"}})]),this._v(" "),e("path",{attrs:{d:"M40.8188559,71.5932203 C39.3040178,71.5932203 38.0455559,71.423153 37.0434322,71.0830131 C36.0413085,70.7428732 35.2489436,70.3616877 34.6663136,69.9394451 C34.0836835,69.5172025 33.6758486,69.1125594 33.4427966,68.7255037 C33.2097446,68.338448 33.0932203,68.0862791 33.0932203,67.9689895 C33.0932203,67.5467469 33.1864397,67.0951887 33.3728814,66.6143013 C33.559323,66.1334139 33.7923715,65.68772 34.0720339,65.2772064 C34.3516963,64.8666928 34.6546594,64.5206936 34.9809322,64.2391985 C35.307205,63.9577035 35.5985157,63.816958 35.8548729,63.816958 C36.1811457,63.816958 36.4491515,64.0280762 36.6588983,64.4503188 L37.0084746,64.8021858 C37.1949162,64.9898492 37.4570958,65.1833742 37.7950212,65.3827665 C38.1329466,65.5821588 38.5524339,65.763955 39.0534958,65.9281605 C39.5545576,66.0923659 40.1430051,66.1744674 40.8188559,66.1744674 C42.2870836,66.1744674 43.4872835,65.7229092 44.4194915,64.8197792 C45.3516996,63.9166492 45.8177966,62.6909911 45.8177966,61.1427683 C45.8177966,60.0637039 45.5672695,59.1019435 45.0662076,58.2574583 C44.5651458,57.4129731 43.9067837,56.6271445 43.0911017,55.8999489 C42.2754197,55.1727533 41.3432256,54.4631618 40.2944915,53.7711531 C39.2457575,53.0791444 38.1737343,52.3578241 37.0783898,51.6071706 C35.9830454,50.8565171 34.9110222,50.0472309 33.8622881,49.1792878 C32.8135541,48.3113447 31.88136,47.314398 31.065678,46.1884177 C30.2499959,45.0624374 29.5916339,43.7898643 29.090572,42.37066 C28.5895102,40.9514557 28.3389831,39.3270189 28.3389831,37.497301 C28.3389831,35.9256202 28.6069888,34.3422342 29.1430085,32.7470955 C29.6790281,31.1519568 30.4189571,29.6330792 31.3628178,28.190417 C32.3066784,26.7477547 33.4194851,25.3989445 34.7012712,24.1439456 C35.9830573,22.8889468 37.3696959,21.7981698 38.8612288,20.8715818 C40.3527617,19.9449939 41.9083605,19.2178092 43.528072,18.690006 C45.1477835,18.1622028 46.7732969,17.8983051 48.404661,17.8983051 C49.8029731,17.8983051 51.0614351,18.121152 52.1800847,18.5668525 C53.2987344,19.012553 54.2425809,19.640043 55.0116525,20.4493414 C55.7807242,21.2586397 56.3749979,22.2321288 56.7944915,23.3698381 C57.2139851,24.5075473 57.4237288,25.7801205 57.4237288,27.1875958 C57.4237288,28.5246974 57.1906803,29.8383213 56.7245763,31.128507 C56.2584722,32.4186927 55.6408937,33.6384864 54.871822,34.7879246 C54.1027504,35.9373627 53.2346447,36.9988178 52.2674788,37.9723216 C51.300313,38.9458253 50.3098568,39.7902979 49.2960805,40.5057645 C48.2823043,41.2212311 47.2976743,41.7783484 46.342161,42.1771331 C45.3866478,42.5759178 44.5476731,42.7753071 43.8252119,42.7753071 C43.1959714,42.7753071 42.6308288,42.6286973 42.1297669,42.3354733 C41.6287051,42.0422492 41.2092178,41.6786569 40.8712924,41.2446853 C40.533367,40.8107138 40.2711874,40.3532912 40.0847458,39.8724038 C39.8983042,39.3915164 39.8050847,38.9634157 39.8050847,38.5880889 C39.8050847,38.283136 39.8458682,38.0837466 39.9274364,37.9899149 C40.0090046,37.8960832 40.1255289,37.8550325 40.2770127,37.8667614 C40.4284965,37.8784904 40.6207615,37.9136768 40.8538136,37.9723216 C41.0868656,38.0309664 41.3548714,38.0602883 41.657839,38.0602883 C42.6366574,38.0602883 43.720333,37.7201536 44.9088983,37.0398738 C46.0974636,36.3595941 47.2160965,35.491664 48.2648305,34.4360575 C49.3135646,33.380451 50.1933227,32.2193013 50.9041314,30.9525735 C51.61494,29.6858457 51.970339,28.4543232 51.970339,27.2579692 C51.970339,26.0381573 51.6732021,25.0763969 51.0789195,24.3726592 C50.4846369,23.6689216 49.476702,23.317058 48.0550847,23.317058 C47.1694871,23.317058 46.208162,23.4871254 45.1710805,23.8272653 C44.1339991,24.1674051 43.0911069,24.6424209 42.0423729,25.2523269 C40.9936388,25.8622329 39.9798778,26.6011463 39.0010593,27.4690895 C38.0222409,28.3370326 37.1599614,29.2929286 36.4141949,30.3368061 C35.6684285,31.3806836 35.0683285,32.506647 34.6138771,33.71473 C34.1594257,34.922813 33.9322034,36.1836574 33.9322034,37.497301 C33.9322034,38.8813184 34.1827305,40.1187053 34.6837924,41.2094986 C35.1848542,42.300292 35.8490425,43.2913744 36.6763771,44.1827754 C37.5037118,45.0741764 38.441732,45.8951914 39.4904661,46.6458449 C40.5392002,47.3964984 41.6112233,48.1412763 42.7065678,48.8802008 C43.8019123,49.6191254 44.8739354,50.3814964 45.9226695,51.1673368 C46.9714035,51.9531772 47.9094238,52.8211073 48.7367585,53.7711531 C49.5640931,54.721199 50.2282814,55.7767896 50.7293432,56.9379568 C51.230405,58.0991239 51.4809322,59.430341 51.4809322,60.931648 C51.4809322,62.3860392 51.2071002,63.7641715 50.659428,65.0660861 C50.1117557,66.3680008 49.3601743,67.4998286 48.404661,68.4616034 C47.4491478,69.4233782 46.3188625,70.1857492 45.0137712,70.7487394 C43.7086799,71.3117295 42.3103888,71.5932203 40.8188559,71.5932203 Z",id:"Scatter"}})])])])}),[],!1,null,null,null);e.a=s.exports}}]);