(this["webpackJsonpBMI Calc"]=this["webpackJsonpBMI Calc"]||[]).push([[59],{100:function(i,t,r){"use strict";r.r(t),r.d(t,"ion_progress_bar",(function(){return o}));var n=r(9),e=r(5),a=r(12),s=r(139),o=function(){function i(i){Object(n.l)(this,i),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1}return i.prototype.render=function(){var i,t=this,r=t.color,a=t.type,o=t.reversed,b=t.value,f=t.buffer,u=e.c.getBoolean("_testing"),l=Object(e.b)(this);return Object(n.j)(n.b,{role:"progressbar","aria-valuenow":"determinate"===a?b:null,"aria-valuemin":"0","aria-valuemax":"1",class:Object.assign(Object.assign({},Object(s.a)(r)),(i={},i[l]=!0,i["progress-bar-"+a]=!0,i["progress-paused"]=u,i["progress-bar-reversed"]="rtl"===document.dir?!o:o,i))},"indeterminate"===a?m():c(b,f))},i}(),m=function(){return[Object(n.j)("div",{class:"indeterminate-bar-primary"},Object(n.j)("span",{class:"progress-indeterminate"})),Object(n.j)("div",{class:"indeterminate-bar-secondary"},Object(n.j)("span",{class:"progress-indeterminate"}))]},c=function(i,t){var r=Object(a.c)(0,i,1),e=Object(a.c)(0,t,1);return[Object(n.j)("div",{class:"progress",style:{transform:"scaleX("+r+")"}}),1!==e&&Object(n.j)("div",{class:"buffer-circles"}),Object(n.j)("div",{class:"progress-buffer-bar",style:{transform:"scaleX("+e+")"}})]};o.style={ios:':host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.2);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb), 0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar:before,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:""}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}',md:':host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.2);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb), 0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar:before,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:""}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:4px}'}},139:function(i,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return m}));var n=r(1),e=function(i,t){return null!==t.closest(i)},a=function(i){var t;return"string"===typeof i&&i.length>0?((t={"ion-color":!0})["ion-color-"+i]=!0,t):void 0},s=function(i){var t={};return function(i){return void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter((function(i){return null!=i})).map((function(i){return i.trim()})).filter((function(i){return""!==i})):[]}(i).forEach((function(i){return t[i]=!0})),t},o=/^[a-z][a-z0-9+\-.]*:/,m=function(i,t,r,e){return Object(n.a)(void 0,void 0,void 0,(function(){var a;return Object(n.c)(this,(function(n){return null!=i&&"#"!==i[0]&&!o.test(i)&&(a=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,a.push(i,r,e)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=59.9a3c9cb3.chunk.js.map