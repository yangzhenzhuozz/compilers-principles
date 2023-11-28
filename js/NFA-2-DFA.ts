import { LightTools, arrowmotionTools, delay } from "./tools.js";

let slot = document.querySelector('#NFA-2-DFA') as HTMLDivElement;
let root = slot.attachShadow({ mode: "open" });
root.appendChild((slot.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离
let next = root.querySelector('#next') as HTMLButtonElement;
class Automaton {
    private state = -1;
    private dur = 500;
    private async init() {
        LightTools(root, ['state0']);
        await delay(this.dur);
        arrowmotionTools(root, ['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(root, ['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state4']);
    }
    public async run() {
        next.disabled = true;
        switch (this.state) {
            case -1:
                await this.init();
                this.state++;
                break;
        }
        next.disabled = false;
    }
}
let automaton = new Automaton();
next.onclick = () => {
    automaton.run();
};