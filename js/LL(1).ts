import { dark, light } from "./tools.js";
let ll1_input = document.getElementById("ll1_input") as HTMLSpanElement;
let ll1_stack = document.getElementById("ll1_stack") as HTMLSpanElement;
let ll1_A = document.getElementById("ll1_A") as HTMLSpanElement;
let ll1_b = document.getElementById("ll1_b") as HTMLSpanElement;
let ll1_next = document.getElementById("ll1_next") as HTMLButtonElement;
let ll1_1 = document.getElementById("ll1_1") as HTMLLIElement;
let ll1_1_a_1 = document.getElementById("ll1_1_a_1") as HTMLLIElement;
let ll1_1_a_2 = document.getElementById("ll1_1_a_2") as HTMLLIElement;
let ll1_1_b = document.getElementById("ll1_1_b") as HTMLLIElement;
let ll1_svg = document.getElementById("ll1_svg") as Element as SVGAElement;
let ll1_table = document.getElementById("ll1_table") as HTMLTableSectionElement;
let state = 0;
let last_input_remove: HTMLElement;
let last_light_Node: SVGElement;
function step_1(selector: string) {
  light(ll1_1);
  ll1_A.innerText = (ll1_stack.lastElementChild! as HTMLSpanElement).innerText;
  ll1_b.innerText = (ll1_input.firstElementChild! as HTMLSpanElement).innerText;
  last_input_remove = ll1_input.firstElementChild! as HTMLElement;
  ll1_input.removeChild(last_input_remove);
  ll1_stack.removeChild(ll1_stack.lastElementChild!);
  if (last_light_Node) {
    darkNode(last_light_Node);
  }
  last_light_Node = ll1_svg.querySelector(selector) as SVGGElement;
  lightNode(last_light_Node);
}
function step_a_to_1(selector: string) {
  dark(ll1_1_a_2);
  step_1(selector);
}
function step_b_to_1(selector: string) {
  dark(ll1_1_b);
  step_1(selector);
}
let l_x: number = 0;
let l_y: number = 0;
function step_1_a_1(
  x: number,
  y: number,
  stack: string[],
  selectors: string[]
) {
  l_x = x;
  l_y = y;
  dark(ll1_1);
  light(
    ll1_1_a_1,
    ll1_table.children[1]!.children[x]! as HTMLElement,
    ll1_table.children[y + 2]!.children[0]! as HTMLElement,
    ll1_table.children[y + 2]!.children[x + 1]! as HTMLElement
  );
  for (let s of stack) {
    let span = document.createElement("span");
    span.innerText = s;
    ll1_stack.appendChild(span);
  }
  for (let s of selectors) {
    (ll1_svg.querySelector(s) as SVGGElement).style.display = "";
  }
}
function step_1_a_2() {
  dark(
    ll1_1_a_1,
    ll1_table.children[1]!.children[l_x]! as HTMLElement,
    ll1_table.children[l_y + 2]!.children[0]! as HTMLElement,
    ll1_table.children[l_y + 2]!.children[l_x + 1]! as HTMLElement
  );
  light(ll1_1_a_2);
  ll1_input.insertBefore(last_input_remove, ll1_input.firstElementChild);
  ll1_b.innerText = "";
}
function step_1_b() {
  dark(ll1_1);
  light(ll1_1_b);
}
function lightNode(node: SVGElement) {
  node.querySelector("path")!.style.fill = "red";
}
function darkNode(node: SVGElement) {
  node.querySelector("path")!.style.fill = "black";
}
function play() {
  ll1_next.disabled = true;
  let E_p: HTMLSpanElement;
  let T: HTMLSpanElement;
  let add: HTMLSpanElement;
  let id_1: HTMLSpanElement;
  switch (state) {
    case 0:
      ll1_svg.style.visibility = "visible";
      step_1("#E1");
      break;
    case 1:
      step_1_a_1(0, 0, ["E'", "T"], ["#l11", "#l12", "#Ep1", "#T1"]);
      break;
    case 2:
      step_1_a_2();
      break;
    case 3:
      step_a_to_1("#T1");
      break;
    case 4:
      step_1_a_1(0, 2, ["id"], ["#l21", "#id1"]);
      break;
    case 5:
      step_1_a_2();
      break;
    case 6:
      step_a_to_1("#id1");
      break;
    case 7:
      step_1_b();
      break;
    case 8:
      step_b_to_1("#Ep1");
      break;
    case 9:
      step_1_a_1(
        1,
        1,
        ["E'", "T", "+"],
        ["#l22", "#l23", "#l24", "#add1", "#T2", "#Ep2"]
      );
      break;
    case 10:
      step_1_a_2();
      break;
    case 11:
      step_a_to_1("#add1");
      break;
    case 12:
      step_1_b();
      break;
    case 13:
      step_b_to_1("#T2");
      break;
    case 14:
      step_1_a_1(0, 2, ["id"], ["#l31", "#id2"]);
      break;
    case 15:
      step_1_a_2();
      break;
    case 16:
      step_a_to_1("#id2");
      break;
    case 17:
      step_1_b();
      break;
    case 18:
      step_b_to_1("#Ep2");
      break;
    case 19:
      step_1_a_1(
        1,
        1,
        ["E'", "T", "+"],
        ["#l32", "#l33", "#l34", "#add2", "#T3", "#Ep3"]
      );
      break;
    case 20:
      step_1_a_2();
      break;
    case 21:
      step_a_to_1("#add2");
      break;
    case 22:
      step_1_b();
      break;
    case 23:
      step_b_to_1("#T3");
      break;
    case 24:
      step_1_a_1(0, 2, ["id"], ["#l41", "#id3"]);
      break;
    case 25:
      step_1_a_2();
      break;
    case 26:
      step_a_to_1("#id3");
      break;
    case 27:
      step_1_b();
      break;
    case 28:
      step_b_to_1("#Ep3");
      break;
    case 29:
      step_1_a_1(2, 1, [], ["#l42", "#epsilon"]);
      break;
    case 30:
      step_1_a_2();
      break;
    case 31:
      step_a_to_1("#epsilon");
      break;
    case 32:
      step_1_b();
      break;
    default:
      alert("解析结束");
      break;
  }
  state = state + 1;
  ll1_next.disabled = false;
}
ll1_next.onclick = play;
