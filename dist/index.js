!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-web-cam"]=t():e["vue-web-cam"]=t()}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=1)}([function(e,t,i){"use strict";var n=function(e,t,i,n,r,a,o,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}({name:"VueWebCam",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},deviceId:{type:String,default:null},playsinline:{type:Boolean,default:!0}},data:function(){return{source:null,canvas:null,camerasListEmitted:!1,cameras:[]}},watch:{deviceId:function(e){this.changeCamera(e)}},mounted:function(){this.setupMedia()},methods:{legacyGetUserMediaSupport:function(){return function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return t?new Promise(function(i,n){t.call(navigator,e,i,n)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}},setupMedia:function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameras:function(){var e=this;navigator.mediaDevices.enumerateDevices().then(function(t){for(var i=0;i!==t.length;++i){var n=t[i];"videoinput"===n.kind&&e.cameras.push(n)}}).then(function(){e.camerasListEmitted||(e.$emit("cameras",e.cameras),e.camerasListEmitted=!0)}).catch(function(t){return e.$emit("notsupported",t)})},changeCamera:function(e){this.stop(),this.$emit("camera-change",e),this.loadCamera(e)},loadSrcStream:function(e){"srcObject"in this.$refs.video?this.$refs.video.srcObject=e:this.source=window.HTMLMediaElement.srcObject(e),this.$emit("started",e)},stopStreamedVideo:function(e){var t=this,i=e.srcObject;i.getTracks().forEach(function(e){e.stop(),t.$emit("stopped",i),t.$refs.video.srcObject=null,t.source=null})},stop:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},start:function(){this.deviceId&&this.loadCamera(this.deviceId)},testMediaAccess:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){return e.loadCameras()}).catch(function(t){return e.$emit("error",t)})},loadCamera:function(e){var t=this;navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:e}}}).then(function(e){return t.loadSrcStream(e)}).catch(function(e){return t.$emit("error",e)})},capture:function(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas:function(){var e=this.$refs.video;if(!this.ctx){var t=document.createElement("canvas");t.height=e.videoHeight,t.width=e.videoWidth,this.canvas=t,this.ctx=t.getContext("2d")}var i=this.ctx,n=this.canvas;return i.drawImage(e,0,0,n.width,n.height),n}}},function(){var e=this.$createElement;return(this._self._c||e)("video",{ref:"video",attrs:{width:this.width,height:this.height,src:this.source,autoplay:this.autoplay,playsinline:this.playsinline}})},[],!1,null,null,null);n.options.__file="webcam.vue";t.a=n.exports},function(e,t,i){"use strict";i.r(t),function(e){var t=i(0);e.exports={WebCam:t.a,install:function e(i){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.installed||i.component(t.a.name,t.a)}}}.call(this,i(2)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}])});