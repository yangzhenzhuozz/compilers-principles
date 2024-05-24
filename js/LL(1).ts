import { dark, light } from "./tools.js";
let ll1_input = document.getElementById("ll1_input") as HTMLSpanElement;
let ll1_stack = document.getElementById("ll1_stack") as HTMLSpanElement;
let ll1_next = document.getElementById("ll1_next") as HTMLButtonElement;
let ll1_1 = document.getElementById("ll1_1") as HTMLLIElement;
let ll1_1_a_1 = document.getElementById("ll1_1_a_1") as HTMLLIElement;
let ll1_1_a_2 = document.getElementById("ll1_1_a_2") as HTMLLIElement;
let ll1_1_b = document.getElementById("ll1_1_b") as HTMLLIElement;
let ll1_svg = document.getElementById("ll1_svg") as Element as SVGAElement;
let ll1_table = document.getElementById("ll1_table") as HTMLTableSectionElement;
let state = 0;
let last_input_remove: HTMLElement;
function play() {
  ll1_next.disabled = true;
  let E_p: HTMLSpanElement;
  let T: HTMLSpanElement;
  let add: HTMLSpanElement;
  let id_1: HTMLSpanElement;
  switch (state) {
    case 0:
      light(ll1_1);
      last_input_remove = ll1_input.firstElementChild! as HTMLElement;
      ll1_input.removeChild(last_input_remove);
      ll1_stack.removeChild(ll1_stack.lastElementChild!);
      (ll1_svg.querySelector("#E_circle") as SVGGElement).style.fill = "red"; //SVG light
      break;
    case 1:
      dark(ll1_1);
      light(
        ll1_1_a_1,
        ll1_table.children[1]!.children[0]! as HTMLElement,
        ll1_table.children[2]!.children[0]! as HTMLElement,
        ll1_table.children[2]!.children[1]! as HTMLElement
      );
      E_p = document.createElement("span");
      T = document.createElement("span");
      E_p.innerText = "E'";
      T.innerText = "T";
      ll1_stack.appendChild(E_p);
      ll1_stack.appendChild(T);
      break;
    case 2:
      dark(
        ll1_1_a_1,
        ll1_table.children[1]!.children[0]! as HTMLElement,
        ll1_table.children[2]!.children[0]! as HTMLElement,
        ll1_table.children[2]!.children[1]! as HTMLElement
      );
      light(ll1_1_a_2);
      ll1_input.insertBefore(last_input_remove, ll1_input.firstElementChild);
      break;
    case 3:
      dark(ll1_1_a_2);
      light(ll1_1);
      last_input_remove = ll1_input.firstElementChild! as HTMLElement;
      ll1_input.removeChild(last_input_remove);
      ll1_stack.removeChild(ll1_stack.lastElementChild!);
      break;
    case 4:
      dark(ll1_1);
      light(
        ll1_1_a_1,
        ll1_table.children[1]!.children[0]! as HTMLElement,
        ll1_table.children[4]!.children[0]! as HTMLElement,
        ll1_table.children[4]!.children[1]! as HTMLElement
      );
      id_1 = document.createElement("span");
      id_1.innerText = "id(1)";
      ll1_stack.appendChild(id_1);
      break;
    case 5:
      dark(
        ll1_1_a_1,
        ll1_table.children[1]!.children[0]! as HTMLElement,
        ll1_table.children[4]!.children[0]! as HTMLElement,
        ll1_table.children[4]!.children[1]! as HTMLElement
      );
      light(ll1_1_a_2);
      ll1_input.insertBefore(last_input_remove, ll1_input.firstElementChild);
      break;
    case 6:
      dark(ll1_1_a_2);
      light(ll1_1);
      last_input_remove = ll1_input.firstElementChild! as HTMLElement;
      ll1_input.removeChild(last_input_remove);
      ll1_stack.removeChild(ll1_stack.lastElementChild!);
      break;
    case 7:
      dark(ll1_1);
      light(ll1_1_b);
      break;
    case 8:
      dark(ll1_1_b);
      light(ll1_1);
      last_input_remove = ll1_input.firstElementChild! as HTMLElement;
      ll1_input.removeChild(last_input_remove);
      ll1_stack.removeChild(ll1_stack.lastElementChild!);
      break;
    case 9:
      dark(ll1_1);
      light(
        ll1_1_a_1,
        ll1_table.children[1]!.children[1]! as HTMLElement,
        ll1_table.children[3]!.children[0]! as HTMLElement,
        ll1_table.children[3]!.children[2]! as HTMLElement
      );
      E_p = document.createElement("span");
      T = document.createElement("span");
      add = document.createElement("span");
      E_p.innerText = "E'";
      T.innerText = "T";
      add.innerText = "+";
      ll1_stack.appendChild(E_p);
      ll1_stack.appendChild(T);
      ll1_stack.appendChild(add);
      break;
    case 10:
      dark(
        ll1_1_a_1,
        ll1_table.children[1]!.children[1]! as HTMLElement,
        ll1_table.children[3]!.children[0]! as HTMLElement,
        ll1_table.children[3]!.children[2]! as HTMLElement
      );
      light(ll1_1_a_2);
      ll1_input.insertBefore(last_input_remove, ll1_input.firstElementChild);
      break;
    case 11:
      dark(ll1_1_a_2);
      light(ll1_1);
      last_input_remove = ll1_input.firstElementChild! as HTMLElement;
      ll1_input.removeChild(last_input_remove);
      ll1_stack.removeChild(ll1_stack.lastElementChild!);
      break;
    case 12:
        
      break;
  }
  state = state + 1;
  ll1_next.disabled = false;
}
ll1_next.onclick = play;
