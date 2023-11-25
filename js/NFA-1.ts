import { KleenClosure, arrowMotion, dark, delay, light } from "./tools.js";

let slot = document.querySelector('#NFA-1') as HTMLDivElement;
let root = slot.attachShadow({ mode: "open" });
root.appendChild((slot.querySelector('template') as HTMLTemplateElement).content.cloneNode(true));//使style被隔离

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

(root.querySelector('button[id=aab]') as HTMLButtonElement).onclick = async () => {
    let dur = 500;
    let Multiplying = 4;
    let now = root.querySelector('#now') as HTMLSpanElement;
    let letters = root.querySelector('#letters') as HTMLSpanElement;
    let letter = root.querySelector('#letter') as HTMLSpanElement;

    //start
    arrowmotionTools(['p_0_0'], dur);
    await delay(dur);
    LightTools(['state0']);
    await delay(dur);
    arrowmotionTools(['p_0_1', 'p_0_3'], dur);
    await delay(dur);
    LightTools(['state1', 'state3']);
    await delay(dur);
    arrowmotionTools(['p_3_4'], dur);
    await delay(dur);
    LightTools(['state4']);
    now.innerText = ['start', 1, 3, 4].join();
    letters.innerText = ['a', 'b'].join();
    now.style.border = '1px solid red';
    letters.style.border = '1px solid red';
    await delay(dur * Multiplying);
    DarkTools([
        'p_0_0',
        'p_0_1',
        'p_0_3',
        'p_3_4',
        'state0',
        'state1',
        'state3',
        'state4'
    ]);

    //a
    letter.innerText = 'a(1)';
    arrowmotionTools(['p_1_2'], dur);
    await delay(dur);
    LightTools(['state2']);
    await delay(dur);
    arrowmotionTools(['p_2_1', 'p_2_3'], dur);
    await delay(dur);
    LightTools(['state1', 'state3']);
    await delay(dur);
    arrowmotionTools(['p_3_4'], dur);
    await delay(dur);
    LightTools(['state4']);
    now.innerText = [1, 2, 3, 4].join();
    await delay(dur * Multiplying);
    DarkTools([
        'p_1_2',
        'p_2_1',
        'p_2_3',
        'p_3_4',
        'state1',
        'state2',
        'state3',
        'state4'
    ]);

    //a
    letter.innerText = 'a(2)';
    arrowmotionTools(['p_1_2'], dur);
    await delay(dur);
    LightTools(['state2']);
    await delay(dur);
    arrowmotionTools(['p_2_1', 'p_2_3'], dur);
    await delay(dur);
    LightTools(['state1', 'state3']);
    await delay(dur);
    arrowmotionTools(['p_3_4'], dur);
    await delay(dur);
    LightTools(['state4']);
    now.innerText = [1, 2, 3, 4].join();
    await delay(dur * Multiplying);
    DarkTools([
        'p_1_2',
        'p_2_1',
        'p_2_3',
        'p_3_4',
        'state1',
        'state2',
        'state3',
        'state4'
    ]);

    //b
    letter.innerText = 'b';
    arrowmotionTools(['p_4_5'], dur);
    await delay(dur);
    LightTools(['state5']);
    now.innerText = ['end'].join();
    letters.innerText = [].join();
    await delay(dur * Multiplying);
    DarkTools([
        'p_4_5',
        'state5'
    ]);

    //end
    letters.style.border='';
    letter.innerText = '';
};

(root.querySelector('button[id=b]') as HTMLButtonElement).onclick = async () => {
    let dur = 500;
    let Multiplying = 4;
    let now = root.querySelector('#now') as HTMLSpanElement;
    let letters = root.querySelector('#letters') as HTMLSpanElement;
    let letter = root.querySelector('#letter') as HTMLSpanElement;

    //start
    arrowmotionTools(['p_0_0'], dur);
    await delay(dur);
    LightTools(['state0']);
    await delay(dur);
    arrowmotionTools(['p_0_1', 'p_0_3'], dur);
    await delay(dur);
    LightTools(['state1', 'state3']);
    await delay(dur);
    arrowmotionTools(['p_3_4'], dur);
    await delay(dur);
    LightTools(['state4']);
    now.innerText = ['start', 1, 3, 4].join();
    letters.innerText = ['a', 'b'].join();
    now.style.border = '1px solid red';
    letters.style.border = '1px solid red';
    await delay(dur * Multiplying);
    DarkTools([
        'p_0_0',
        'p_0_1',
        'p_0_3',
        'p_3_4',
        'state0',
        'state1',
        'state3',
        'state4'
    ]);
    
    //b
    letter.innerText = 'b';
    arrowmotionTools(['p_4_5'], dur);
    await delay(dur);
    LightTools(['state5']);
    now.innerText = ['end'].join();
    letters.innerText = [].join();
    await delay(dur * Multiplying);
    DarkTools([
        'p_4_5',
        'state5'
    ]);

    //end
    letters.style.border='';
    letter.innerText = '';
};