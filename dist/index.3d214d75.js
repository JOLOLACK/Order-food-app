// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var _jasonJs = require("./jason.js");
const userName = "admin";
const password = "admin";
const loginModal = document.getElementById("loginModal");
let tabsElement = document.getElementById("tabs");
let tabsContainer = document.getElementById("tab-container");
let tabsNames = Object.keys((0, _jasonJs.ProductData));
let firstTabElement = true;
tabsNames.forEach((tabName)=>{
    // Create and append tab button
    let tabButton = document.createElement("button");
    tabButton.className = `tab-link ${firstTabElement ? "active" : ""}`;
    tabButton.textContent = tabName;
    tabButton.onclick = (event)=>openTab(event, tabName);
    tabsElement.appendChild(tabButton);
    // Create and append tab content container
    let tabContent = document.createElement("div");
    tabContent.id = tabName;
    tabContent.className = `tab-content ${firstTabElement ? "active" : ""}`;
    // Create and append products
    let productsContainer = document.createElement("div");
    productsContainer.className = "products";
    (0, _jasonJs.ProductData)[tabName].forEach((productDetails)=>{
        let productDiv = document.createElement("div");
        productDiv.className = "product";
        let anchor = document.createElement("a");
        let img = document.createElement("img");
        img.src = productDetails.imgSrc;
        img.alt = productDetails.name;
        let h1 = document.createElement("h1");
        h1.textContent = productDetails.name;
        anchor.appendChild(img);
        anchor.appendChild(h1);
        productDiv.appendChild(anchor);
        productsContainer.appendChild(productDiv);
    });
    tabContent.appendChild(productsContainer);
    tabsContainer.appendChild(tabContent);
    firstTabElement = false;
});
function openTab(event, tabName) {
    console.log("hello");
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content)=>content.classList.remove("active"));
    console.log(event.currentTarget.classList, tabName);
    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach((link)=>link.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
    console.log(document.getElementById(tabName).classList);
    event.currentTarget.classList.add("active");
    activeTab = tabName;
}
// Get the modal
let activeTab = "Dry fruits";
let modal = document.getElementById("orderModal");
let productDetailsModal = document.getElementById("productAmountDetail");
let orderAddredDot = document.getElementById("redDot");
const closeTypeOptions = document.getElementById("closeTypeOptions");
const closeUserInfo = document.getElementById("closeUserInfo");
let btn = document.getElementById("openOrderBtn");
let btn2 = document.getElementById("openOrderBtn2");
let span = document.getElementsByClassName("close")[0];
let productArrClass = document.querySelectorAll(".product");
let temporaryData = {};
let orderInfoArr = [];
let userInfo = {};
let totalEncodedText = "";
let totalNormalText = "";
function stopScrolliing() {
    document.body.style.overflow = "hidden";
}
function startScrolliing() {
    document.body.style.overflow = "";
}
productArrClass.forEach((productDiv)=>productDiv.addEventListener("click", (event)=>{
        event.preventDefault();
        stopScrolliing();
        const productElement = event.currentTarget.closest(".product");
        const productTitle = productElement.querySelector("h1").textContent;
        const imgSuarce = event.target.currentSrc;
        let conditionalElementSize = ``;
        if (activeTab == "Jam" || activeTab == "Alkoholfreie Getr\xe4nke" || activeTab == "S\xfc\xdfigkeiten") conditionalElementSize = `
        <div class="form-group">
            <label for="size">Select Size:</label>
            <select id="size" name="size" required>
                <option value="" disabled selected>Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>`;
        productDetailsModal.innerHTML = `<div class="modal-content" >
                <span class="close" id="closeOrderdetails">&times;</span>
                <h2>${productTitle}</h2>
                <div class="orderDetails" id="prductDetail">

                    <form id="orderForm">
                        <div class="form-group">
                            <label for="box">Enter box:</label>
                            <input type="number" id="box" name="box" placeholder="Enter quantity in box" min="1" max="10000" required>
                        </div>
                        ${conditionalElementSize}
            
                        <button type="submit" id="submitBtn">Add to Order</button>
                    </form>

                </div>
        </div>`;
        productDetailsModal.style.display = "block";
        document.getElementById("closeOrderdetails").addEventListener("click", ()=>{
            productDetailsModal.style.display = "none";
        });
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the page from refreshing
            const box = document.getElementById("box").value;
            let size = "";
            if (document.getElementById("size")) size = document.getElementById("size").value;
            // Append the new order details
            const { imgSuarce, productTitle } = temporaryData;
            orderInfoArr.push({
                box: box,
                size: size,
                imgSuarce: imgSuarce,
                productTitle: productTitle
            });
            temporaryData = {};
            // Optionally reset the form fields
            orderForm.reset();
            orderAddredDot.classList.add("red-dot");
            btn2.classList.add("scale-Up");
            productDetailsModal.style.display = "none";
            setTimeout(()=>{
                btn2.classList.remove("scale-Up");
            }, 500);
        });
        temporaryData = {
            productTitle: productTitle,
            imgSuarce: imgSuarce
        };
    }));
// user submitHandler
document.getElementById("clickthisbutton").addEventListener("click", ()=>{
    console.log("this button is workiing this is the or button");
});
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from refreshing
    const fullName = document.getElementById("Full Name").value;
    const company = document.getElementById("Company").value;
    const phoneNumber = document.getElementById("Phone Number").value;
    const email = document.getElementById("Email").value;
    // Append the new order details
    userInfo = {
        fullName: fullName,
        company: company,
        phoneNumber: phoneNumber,
        email: email
    };
    document.getElementById("userForm").reset();
    document.getElementById("userInfo").style.display = "none";
    displayTypeOptions();
});
btn.addEventListener("click", ()=>{
    modal.style.display = "block";
    displayOrderSummary(); // Call the function to display order details
});
btn2.addEventListener("click", ()=>{
    modal.style.display = "block";
    displayOrderSummary(); // Call the function to display order details
});
span.addEventListener("click", ()=>{
    console.log("is this working");
    modal.style.display = "none";
});
closeTypeOptions.addEventListener("click", ()=>document.getElementById("typeOptions").style.display = "none");
closeUserInfo.addEventListener("click", ()=>document.getElementById("userInfo").style.display = "none");
window.addEventListener("click", (event)=>{
    //disable the scroll feture if modals are on 
    let allModalsElements = document.getElementsByClassName("modal");
    let allModalElementsArr = Array.from(allModalsElements);
    let isAllModalsClosed = allModalElementsArr.every((Element)=>Element.style.display == "none");
    if (!isAllModalsClosed) stopScrolliing();
    else startScrolliing();
    if (event.target == modal || event.target == productDetailsModal) {
        modal.style.display = "none";
        productDetailsModal.style.display = "none";
        startScrolliing();
    }
});
function deleteOrder(index) {
    // Remove the order from the array using the index
    orderInfoArr.splice(index, 1);
    orderAddredDot.classList.remove("red-dot");
    // Re-render the order summary
    displayOrderSummary();
}
// Function to display order details (example content)
function displayOrderSummary() {
    let orderProducts = document.getElementById("orderDetails");
    if (orderInfoArr.length == 0) {
        console.log("orderinfoarr is empty");
        orderProducts.innerHTML = `
        <div class="empty-cart-container">
            <img src="./empty-cart.png">
            <div class="empty-cart-message">
                <h2>Your cart is empty!</h2>
                <p>Looks like you haven\u{2019}t added anything to your cart yet.</p>
                <a href="./" >Shop Now</a >
            </div>
        </div>
        
        `;
    } else {
        orderProducts.innerHTML = "";
        orderInfoArr.forEach((orderElement, index)=>{
            orderProducts.innerHTML += `
                    <div class="order-product">
                        <img src="${orderElement.imgSuarce}" alt="${orderElement.productTitle}">
                        <div class="product-details">
                            <h3>${orderElement.productTitle}</h3>
                            <p>Size: ${orderElement.size}</p>
                            <p>box: ${orderElement.box}</p>
                        </div>
                        <div class="elemenateOrder">
                            <h3  data-delete-index="${index}"id="orderProductDelete">\xd7</h3>
                        
                        </div>
                        
                    </div>
                    
                     
               `;
        });
        orderProducts.innerHTML += '<button class="buttonSumbit" id="placeOrder">Place Order</button>';
        const deleteButtons = document.querySelectorAll("[data-delete-index]");
        document.getElementById("placeOrder").addEventListener("click", ()=>{
            document.getElementById("userInfo").style.display = "block";
        });
        deleteButtons.forEach((button)=>{
            button.addEventListener("click", function(event) {
                const deleteIndex = event.currentTarget.getAttribute("data-delete-index");
                deleteOrder(deleteIndex);
            });
        });
    }
}
document.getElementById("placeOrderEmail").addEventListener("click", ()=>placeOrder("email"));
document.getElementById("placeOrderWhatsApp").addEventListener("click", ()=>placeOrder("whatsapp"));
function placeOrder(type) {
    console.log(type);
    let testedFinalEncodedOrderUrlLink = "";
    let totalNormalText = "";
    orderInfoArr.forEach((item)=>{
        testedFinalEncodedOrderUrlLink += `%0AProducts%20name%3A%20${item.productTitle}%0AAmount%3A%20${item.amount}%0Abox%3A%20${item.box}%0ASize%3A%20${item.size}%0A
            `;
        totalNormalText += `
            Costumer Name: ${userInfo.fullName}
            Company Name: ${userInfo.company}
            Phone Number: ${userInfo.phoneNumber}
            Email address: ${userInfo.email}


            Products name: ${item.productTitle}
            box: ${item.box}
            Size: ${item.size}
        `;
    });
    if (type == "email") {
        console.log("email is working");
        const email = "recipient@example.com";
        const subject = encodeURIComponent("Order");
        const body = encodeURIComponent(totalNormalText);
        // Construct the mailto link
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        // Open the user's default email client with the prewritten email
        window.location.href = mailtoLink;
    } else {
        let encodedTestedFinalUrlLink = `https://wa.me/613452735?text=Name%3A%20${userInfo.fullName}%0ACompany%20Name%3A%20${userInfo.company}%0APhone%20Number%3A%20${userInfo.phoneNumber}%0AEmail%3A%20${userInfo.email}%0A${testedFinalEncodedOrderUrlLink}
        `;
        window.open(encodedTestedFinalUrlLink, "_blank");
    }
}
function displayTypeOptions() {
    document.getElementById("typeOptions").style.display = "block";
}
document.getElementById("loginForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    console.log(enteredUsername, enteredPassword);
    if (enteredUsername === userName && enteredPassword === password) window.location.href = "edit.html";
    else alert("Invalid credentials");
});
document.getElementById("loginBtn").addEventListener("click", ()=>{
    loginModal.style.display = "block";
});
document.getElementById("closeLoginModal").addEventListener("click", ()=>loginModal.style.display = "none");
loginModal.style.display = "none";
document.querySelector(".modal").style.display = "none";
document.getElementById("orderModal").style.display = "none";
productDetailsModal.style.display = "none";
document.getElementById("typeOptions").style.display = "none";
document.getElementById("userInfo").style.display = "none";
document.getElementById("scrollToBottom").addEventListener("click", ()=>{
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth" // Adds smooth scrolling animation
    });
});

},{"./jason.js":"83Kkt"}],"83Kkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProductData", ()=>ProductData);
let ProductData = {
    "Dry fruits": [
        {
            "id": 1,
            "name": "Organic Apples",
            "amountPerBox": 20,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.39 AM (1).jpeg",
            "kiloPerBox": 10
        },
        {
            "id": 2,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.39 AM (2).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 3,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.39 AM (3).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 4,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM (1).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 5,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM (2).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 6,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM (3).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 7,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM (4).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 8,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM.jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 9,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/amufoodimges/WhatsApp Image 2024-08-16 at 12.05.40 AM.jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 10,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (1).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 11,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (2).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 12,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (3).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 13,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (4).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 14,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (5).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 15,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (6).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 16,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (7).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 17,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (8).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 18,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM (9).jpeg",
            "kiloPerBox": 15
        },
        {
            "id": 19,
            "name": "Bananas",
            "amountPerBox": 30,
            "imgSrc": "/nusse 2/WhatsApp Image 2024-08-16 at 12.07.43 AM.jpeg",
            "kiloPerBox": 15
        }
    ],
    "Jam": [
        {
            "id": 1,
            "name": "2f07cbaa-80a9-4f50-880e-94a1a6db78b3",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/2f07cbaa-80a9-4f50-880e-94a1a6db78b3.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 2,
            "name": "5af43f9e-b51f-4941-bc33-0023cb89c9cf",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/5af43f9e-b51f-4941-bc33-0023cb89c9cf.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 3,
            "name": "6faed9e3-17dc-4814-b555-10323bd44eb2",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/6faed9e3-17dc-4814-b555-10323bd44eb2.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 4,
            "name": "32e6bb90-d609-43c3-966a-862af846e88f",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/32e6bb90-d609-43c3-966a-862af846e88f.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 5,
            "name": "65d498c9-5909-4ebf-a9a6-a5723051d762",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/65d498c9-5909-4ebf-a9a6-a5723051d762.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 6,
            "name": "72f99673-bded-4c90-b121-cc4a020d0597",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/72f99673-bded-4c90-b121-cc4a020d0597.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 7,
            "name": "94c26cf2-f911-49fe-b2a2-5fc8b94e6d2d",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/94c26cf2-f911-49fe-b2a2-5fc8b94e6d2d.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 8,
            "name": "975d0b25-595a-4c43-bc74-ed98ee525be0",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/975d0b25-595a-4c43-bc74-ed98ee525be0.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 9,
            "name": "b7dc06b3-16d8-4136-9230-9ddb2bbe439d",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/b7dc06b3-16d8-4136-9230-9ddb2bbe439d.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 10,
            "name": "b20193b8-071d-4fe0-808c-d6def5623404",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/b20193b8-071d-4fe0-808c-d6def5623404.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 11,
            "name": "bbca25cc-e87e-4d45-beed-8ad04cc3cc74",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/bbca25cc-e87e-4d45-beed-8ad04cc3cc74.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 12,
            "name": "d57caded-47e2-40e3-a7ce-2b5ecf9896b2",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/d57caded-47e2-40e3-a7ce-2b5ecf9896b2.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 13,
            "name": "e037ebc4-3f4f-4f37-a695-f11ec91f4189",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/e037ebc4-3f4f-4f37-a695-f11ec91f4189.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 14,
            "name": "e99d281d-45e2-45ba-9d93-64516d0b07a8",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/e99d281d-45e2-45ba-9d93-64516d0b07a8.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 15,
            "name": "fd719950-0cb5-41f2-897c-fc8adf6f7498",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/fd719950-0cb5-41f2-897c-fc8adf6f7498.jpeg",
            "kiloPerBox": 5
        },
        {
            "id": 16,
            "name": "fe2b134c-4648-44ff-acdc-5dd03ab1e306",
            "amountPerBox": 12,
            "imgSrc": "/mermelade/fe2b134c-4648-44ff-acdc-5dd03ab1e306.jpeg",
            "kiloPerBox": 5
        }
    ],
    "1&1": [
        {
            "id": 1,
            "name": "0a501959-0795-4dc8-80af-011b3e8527dc",
            "imgSrc": "/1and1/0a501959-0795-4dc8-80af-011b3e8527dc.jpeg"
        },
        {
            "id": 2,
            "name": "3a1b15df-6196-4596-be11-3c44a7d07e50",
            "imgSrc": "/1and1/3a1b15df-6196-4596-be11-3c44a7d07e50.jpeg"
        },
        {
            "id": 3,
            "name": "1060deb6-3ad1-40b8-a9e7-f6bdc01c0947",
            "imgSrc": "/1and1/1060deb6-3ad1-40b8-a9e7-f6bdc01c0947.jpeg"
        },
        {
            "id": 4,
            "name": "72542526-f31f-4fdd-9f16-5837e791849e",
            "imgSrc": "/1and1/72542526-f31f-4fdd-9f16-5837e791849e.jpeg"
        },
        {
            "id": 5,
            "name": "a8b968ea-37cd-48d1-ad66-7832cf2034e3",
            "imgSrc": "/1and1/a8b968ea-37cd-48d1-ad66-7832cf2034e3.jpeg"
        }
    ],
    "DSN Produkte": [
        {
            "id": 1,
            "name": "4b62f36f-9aaf-40cf-bcce-69642680f521",
            "imgSrc": "/oats/4b62f36f-9aaf-40cf-bcce-69642680f521.jpeg"
        },
        {
            "id": 2,
            "name": "61e8f984-c37a-4937-b521-21357d543755",
            "imgSrc": "/oats/61e8f984-c37a-4937-b521-21357d543755.jpeg"
        },
        {
            "id": 3,
            "name": "04787c10-7181-4b73-9598-a4a003974aea",
            "imgSrc": "/oats/04787c10-7181-4b73-9598-a4a003974aea.jpeg"
        },
        {
            "id": 4,
            "name": "abdcc2d7-3a3c-42bb-9857-c2ba393c9305",
            "imgSrc": "/oats/abdcc2d7-3a3c-42bb-9857-c2ba393c9305.jpeg"
        },
        {
            "id": 5,
            "name": "e1cea6ed-bfbf-433d-80dd-727c41586b73",
            "imgSrc": "/oats/e1cea6ed-bfbf-433d-80dd-727c41586b73.jpeg"
        }
    ],
    "Neue eingetroffene": [
        {
            "id": 1,
            "name": "Milk",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Milk"
        },
        {
            "id": 2,
            "name": "Cheese",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Cheese"
        }
    ],
    "AMU product": [
        {
            "id": 1,
            "name": "Milk",
            "imgSrc": "/cookies/560079de-8419-4a31-98ac-26b21c9ee4b5.jpeg"
        },
        {
            "id": 2,
            "name": "Cheese",
            "imgSrc": "/cookies/8fa84eb4-9a48-431d-93fb-dc92d17d455b.jpeg"
        },
        {
            "id": 3,
            "name": "Cheese",
            "imgSrc": "/cookies/jelaby.jpeg"
        }
    ],
    "Cookies": [],
    "Alkoholfreie Getr\xe4nke": [
        {
            "id": 1,
            "name": "2f9c966f-90f0-4c96-8d7c-e05d83aa20ee",
            "imgSrc": "/drinks/2f9c966f-90f0-4c96-8d7c-e05d83aa20ee.jpeg"
        },
        {
            "id": 2,
            "name": "8bc5c7ea-0cba-4470-9df9-6f6dec642082",
            "imgSrc": "/drinks/8bc5c7ea-0cba-4470-9df9-6f6dec642082.jpeg"
        },
        {
            "id": 3,
            "name": "54c7dd95-79ca-49b5-9365-4efb82393b99",
            "imgSrc": "/drinks/54c7dd95-79ca-49b5-9365-4efb82393b99.jpeg"
        },
        {
            "id": 4,
            "name": "a45316e1-cbf6-4a28-859a-5e718accdbd6",
            "imgSrc": "/drinks/a45316e1-cbf6-4a28-859a-5e718accdbd6.jpeg"
        },
        {
            "id": 5,
            "name": "df750f97-5143-4eb6-873d-0ff18f393df4",
            "imgSrc": "/drinks/df750f97-5143-4eb6-873d-0ff18f393df4.jpeg"
        }
    ],
    "S\xfc\xdfigkeiten": [
        {
            "id": 1,
            "name": "Milk",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Milk"
        },
        {
            "id": 2,
            "name": "Cheese",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Cheese"
        }
    ],
    "Reis": [
        {
            "id": 1,
            "name": "Milk",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Milk"
        },
        {
            "id": 2,
            "name": "Cheese",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Cheese"
        }
    ]
};
let templateData = {
    "N\xfcsse \u0645\u06CC\u0648\u0647 \u062E\u0634\u06A9 \u0627\u0641\u063A\u0627\u0646\u06CC": [
        {
            "id": 1,
            "name": "Carrots",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Carrots"
        },
        {
            "id": 2,
            "name": "Broccoli",
            "imgSrc": "https://via.placeholder.com/200x200.png?text=Broccoli"
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequire6a99")

//# sourceMappingURL=index.3d214d75.js.map
