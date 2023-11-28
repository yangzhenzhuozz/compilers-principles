import { DarkTools, KleenClosure, LightTools, arrowMotion, arrowmotionTools, dark, delay, light } from "./tools.js";

let slot = document.querySelector('#NFA-1') as HTMLDivElement;
let root = slot.attachShadow({ mode: "open" });
root.appendChild((slot.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离

function drakAll() {
    DarkTools(root, [
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
let aad_buuton = root.querySelector('button[id=aab]') as HTMLButtonElement;
let b_button = root.querySelector('button[id=b]') as HTMLButtonElement;
class Automaton_aab {
    private dur = 500;
    private now = root.querySelector('#now') as HTMLSpanElement;
    private letters = root.querySelector('#letters') as HTMLSpanElement;
    private letter = root.querySelector('#letter') as HTMLSpanElement;
    private state = -1;
    private async to_start() {
        this.letter.innerText = `goto start`;
        drakAll();
        arrowmotionTools(root,['p_0_0'], this.dur);
        await delay(this.dur);
        LightTools(root,['state0']);
        await delay(this.dur);
        arrowmotionTools(root,['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(root,['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(root,['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root,['state4']);
        this.now.innerText = ['start', 1, 3, 4].join();
        this.letters.innerText = ['a', 'b'].join();
        this.now.style.border = '1px solid red';
        this.letters.style.border = '1px solid red';
    };
    private async accept_a() {
        drakAll();
        this.letter.innerText = `a(${this.state + 1})`;
        arrowmotionTools(root,['p_1_2'], this.dur);
        await delay(this.dur);
        LightTools(root,['state2']);
        await delay(this.dur);
        arrowmotionTools(root,['p_2_1', 'p_2_3'], this.dur);
        await delay(this.dur);
        LightTools(root,['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(root,['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root,['state4']);
        this.now.innerText = [1, 2, 3, 4].join();
    }
    private async accept_b() {
        drakAll();
        this.letter.innerText = 'b';
        arrowmotionTools(root,['p_4_5'], this.dur);
        await delay(this.dur);
        LightTools(root,['state5']);
        this.now.innerText = ['end'].join();
        this.letters.innerText = [].join();
        this.letters.style.border = '';
    }
    public async run() {
        aad_buuton.disabled = true;
        b_button.disabled = true;
        switch (this.state) {
            case -1:
                await this.to_start();
                this.state++;
                break;
            case 0:
                await this.accept_a();
                this.state++;
                break;
            case 1:
                await this.accept_a();
                this.state++;
                break;
            case 2:
                await this.accept_b();
                this.state = -1;
                break;
        }
        console.log('解除禁用');
        b_button.disabled = false;
        aad_buuton.disabled = false;
    }
}
class Automaton_b {
    private dur = 500;
    private Multiplying = 4;
    private now = root.querySelector('#now') as HTMLSpanElement;
    private letters = root.querySelector('#letters') as HTMLSpanElement;
    private letter = root.querySelector('#letter') as HTMLSpanElement;
    private state = -1;
    private async to_start() {
        this.letter.innerText = `goto start`;
        drakAll();
        arrowmotionTools(root,['p_0_0'], this.dur);
        await delay(this.dur);
        LightTools(root,['state0']);
        await delay(this.dur);
        arrowmotionTools(root,['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(root,['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(root,['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root,['state4']);
        this.now.innerText = ['start', 1, 3, 4].join();
        this.letters.innerText = ['a', 'b'].join();
        this.now.style.border = '1px solid red';
        this.letters.style.border = '1px solid red';
    };
    private async accept_b() {
        drakAll();
        this.letter.innerText = 'b';
        arrowmotionTools(root,['p_4_5'], this.dur);
        await delay(this.dur);
        LightTools(root,['state5']);
        this.now.innerText = ['end'].join();
        this.letters.innerText = [].join();
        this.letters.style.border = '';
    }
    public async run() {
        aad_buuton.disabled = true;
        b_button.disabled = true;
        console.log(this.state);
        switch (this.state) {
            case -1:
                await this.to_start();
                this.state++;
                break;
            case 0:
                await this.accept_b();
                this.state = -1;
                break;
        }
        b_button.disabled = false;
        aad_buuton.disabled = false;
    }
}
let automaton_aab = new Automaton_aab();
let automaton_b = new Automaton_b();
aad_buuton.onclick = () => {
    automaton_aab.run();
};
b_button.onclick = () => {
    automaton_b.run();
};