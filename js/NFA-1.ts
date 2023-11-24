let now_states = [];
function init() {
    now_states = [];
}
let rootDIV = document.querySelector('#NFA-1') as HTMLDivElement;
let shadowRoot = rootDIV.attachShadow({ mode: "open" });
shadowRoot.appendChild((rootDIV.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离
let input = shadowRoot.querySelector('input') as HTMLInputElement;
let svgDocument = shadowRoot.querySelector('svg') as SVGSVGElement;
let a = document.createElementNS("http://www.w3.org/2000/svg", 'animate') as SVGAnimateElement;
console.log(typeof a);