import { DarkTools, LightTools, arrowmotionTools, delay } from "./tools.js";

let slot = document.querySelector('#NFA-2-DFA') as HTMLDivElement;
let root = slot.attachShadow({ mode: "open" });
root.appendChild((slot.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离
let next = root.querySelector('#next') as HTMLButtonElement;
let step1 = root.querySelector('ol>li:nth-child(1)') as HTMLElement;
let step2 = root.querySelector('ol>li:nth-child(2)>ol>:nth-child(1)>ol>:nth-child(1)') as HTMLElement;
let step3_1 = root.querySelector('ol>li:nth-child(2)>ol>:nth-child(1)>ol>:nth-child(2)>ul>li:nth-child(1)') as HTMLElement;
let step3_2 = root.querySelector('ol>li:nth-child(2)>ol>:nth-child(1)>ol>:nth-child(2)>ul>li:nth-child(2)') as HTMLElement;
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
class Automaton {
    private state = 0;
    private dur = 500;
    private async s1() {
        step1.style.color = 'red';
        LightTools(root, ['state0']);
        await delay(this.dur);
        arrowmotionTools(root, ['p_0_1', 'p_0_3'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state1', 'state3']);
        await delay(this.dur);
        arrowmotionTools(root, ['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state4']);
        await delay(this.dur);
        (root.querySelector('#closure_s') as SVGElement).style.display = 'unset';
    }
    private async s2() {
        step1.style.color = 'unset';
        step2.style.color = 'red';
        drakAll();
        arrowmotionTools(root, ['p_1_2'], this.dur);
        (root.querySelector('#DFA_0_1') as SVGElement).style.display = 'unset';
        await delay(this.dur);
        LightTools(root, ['state2']);
        await delay(this.dur);
        (root.querySelector('#state2-2') as SVGElement).style.display = 'unset';
    }
    private async s3() {
        step2.style.color = 'unset';
        step3_1.style.color = 'red';
        arrowmotionTools(root, ['p_2_1'], this.dur);
        arrowmotionTools(root, ['p_2_3'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state1']);
        LightTools(root, ['state3']);
        await delay(this.dur);
        arrowmotionTools(root, ['p_3_4'], this.dur);
        await delay(this.dur);
        LightTools(root, ['state4']);
        await delay(this.dur);
        (root.querySelector('#closure_1234') as SVGElement).style.display = 'unset';
    }
    private async s4() {
        step3_1.style.color = 'unset';
        step2.style.color = 'red';
        drakAll();
        arrowmotionTools(root, ['p_4_5'], this.dur);
        (root.querySelector('#DFA_0_2') as SVGElement).style.display = 'unset';
        await delay(this.dur);
        LightTools(root, ['state5']);
        await delay(this.dur);
        (root.querySelector('#state5-2') as SVGElement).style.display = 'unset';
    }
    private async s5() {
        step2.style.color = 'unset';
        step3_1.style.color = 'red';
        (root.querySelector('#closure_e') as SVGElement).style.display = 'unset';
    }
    private async s6() {
        drakAll();
        step3_1.style.color = 'unset';
        step2.style.color = 'red';
        step3_2.style.color = 'red';
        (root.querySelector('#DFA_1_1') as SVGElement).style.display = 'unset';
    }
    private async s7() {
        step2.style.color = 'unset';
        step3_2.style.color = 'unset';
        await delay(this.dur);
        await delay(this.dur);
        step2.style.color = 'red';
        step3_2.style.color = 'red';
        (root.querySelector('#DFA_1_2') as SVGElement).style.display = 'unset';
    }
    private async s8() {
        step2.style.color = 'unset';
        step3_2.style.color = 'unset';
        (root.querySelector('#DFA') as SVGElement).style.display = 'unset';
    }
    public async run() {
        if (this.state > 7) {
            alert('已经运行结束,只能刷新网页了');
        }
        next.disabled = true;
        switch (this.state) {
            case 0:
                await this.s1();
                this.state++;
                break;
            case 1:
                await this.s2();
                this.state++;
                break;
            case 2:
                await this.s3();
                this.state++;
                break;
            case 3:
                await this.s4();
                this.state++;
                break;
            case 4:
                await this.s5();
                this.state++;
                break;
            case 5:
                await this.s6();
                this.state++;
                break;
            case 6:
                await this.s7();
                this.state++;
                break;
            case 7:
                await this.s8();
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