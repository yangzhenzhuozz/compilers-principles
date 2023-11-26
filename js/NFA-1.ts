import { KleenClosure, arrowMotion, dark, delay, light } from "./tools.js";

let slot = document.querySelector('#NFA-1') as HTMLDivElement;
let root = slot.attachShadow({ mode: "open" });
root.appendChild((slot.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离

//注册箭头和state点击事件
for (let item of (root.querySelectorAll('.arrow') as NodeListOf<SVGElement>)) {
    item.onclick = (e) => {
        arrowMotion(e.currentTarget as SVGElement, 300);
    };
}
for (let item of (root.querySelectorAll('.state') as NodeListOf<SVGElement>)) {
    item.onclick = (e) => {
        if (Boolean(Number((e.currentTarget as SVGAElement).getAttribute('hasLighted')))) {
            dark(e.currentTarget as SVGElement);
        } else {
            light(e.currentTarget as SVGElement);
        }
    };
}

function arrowmotionTools(ids: string[], dur: number) {
    for (let id of ids) {
        arrowMotion(root.querySelector(`#${id}`) as SVGAElement, dur);
        light(root.querySelector(`#${id}`) as SVGAElement);
    }
}
function LightTools(ids: string[]) {
    for (let id of ids) {
        light(root.querySelector(`#${id}`) as SVGAElement);
    }
}
function DarkTools(ids: string[]) {
    for (let id of ids) {
        dark(root.querySelector(`#${id}`) as SVGAElement);
    }
}
function drakAll() {
    DarkTools([
        'p_0_0',
        'p_0_1',
        'p_0_3',
        'p_1_2',
        'p_2_1',
        'p_2_3',
        'p_3_4',
        'p_4_5',
        'state0',
        'state1',
        'state2',
        'state3',
        'state4',
        'state5'
    ]);
}

class Automaton_aab {
    private dur = 500;
    private Multiplying = 4;
    private now = root.querySelector('#now') as HTMLSpanElement;
    private letters = root.querySelector('#letters') as HTMLSpanElement;
    private letter = root.querySelector('#letter') as HTMLSpanElement;
    private status = -1;
    private async to_start() {
        this.letter.innerText = `goto start`;
        drakAll();
        arrowmotionTools(['p_0_0'], this.dur);
        await delay(this.dur);
        LightTools(['state0']);
        await delay(this.dur);
        arrowmotionTools(['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(['state4']);
        this.now.innerText = ['start', 1, 3, 4].join();
        this.letters.innerText = ['a', 'b'].join();
        this.now.style.border = '1px solid red';
        this.letters.style.border = '1px solid red';
    };
    private async accept_a() {
        drakAll();
        this.letter.innerText = `a(${this.status + 1})`;
        arrowmotionTools(['p_1_2'], this.dur);
        await delay(this.dur);
        LightTools(['state2']);
        await delay(this.dur);
        arrowmotionTools(['p_2_1', 'p_2_3'], this.dur);
        await delay(this.dur);
        LightTools(['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(['state4']);
        this.now.innerText = [1, 2, 3, 4].join();
    }
    private async accept_b() {
        drakAll();
        this.letter.innerText = 'b';
        arrowmotionTools(['p_4_5'], this.dur);
        await delay(this.dur);
        LightTools(['state5']);
        this.now.innerText = ['end'].join();
        this.letters.innerText = [].join();
        this.letters.style.border = '';
    }
    public run() {
        console.log(this.status);
        switch (this.status) {
            case -1:
                this.to_start();
                this.status++;
                break;
            case 0:
                this.accept_a();
                this.status++;
                break;
            case 1:
                this.accept_a();
                this.status++;
                break;
            case 2:
                this.accept_b();
                this.status = -1;
                break;
        }
    }
}
class Automaton_b {
    private dur = 500;
    private Multiplying = 4;
    private now = root.querySelector('#now') as HTMLSpanElement;
    private letters = root.querySelector('#letters') as HTMLSpanElement;
    private letter = root.querySelector('#letter') as HTMLSpanElement;
    private status = -1;
    private async to_start() {
        this.letter.innerText = `goto start`;
        drakAll();
        arrowmotionTools(['p_0_0'], this.dur);
        await delay(this.dur);
        LightTools(['state0']);
        await delay(this.dur);
        arrowmotionTools(['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(['state4']);
        this.now.innerText = ['start', 1, 3, 4].join();
        this.letters.innerText = ['a', 'b'].join();
        this.now.style.border = '1px solid red';
        this.letters.style.border = '1px solid red';
    };
    private async accept_b() {
        drakAll();
        this.letter.innerText = 'b';
        arrowmotionTools(['p_4_5'], this.dur);
        await delay(this.dur);
        LightTools(['state5']);
        this.now.innerText = ['end'].join();
        this.letters.innerText = [].join();
        this.letters.style.border = '';
    }
    public run() {
        console.log(this.status);
        switch (this.status) {
            case -1:
                this.to_start();
                this.status++;
                break;
            case 0:
                this.accept_b();
                this.status = -1;
                break;
        }
    }
}
let automaton_aab = new Automaton_aab();
let automaton_b = new Automaton_b();
(root.querySelector('button[id=aab]') as HTMLButtonElement).onclick = () => {
    automaton_aab.run();
};
(root.querySelector('button[id=b]') as HTMLButtonElement).onclick = () => {
    automaton_b.run();
};