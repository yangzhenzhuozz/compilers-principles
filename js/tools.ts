export function arrowMotion(root: SVGElement, dur: number) {
    let dasharray = document.createElementNS("http://www.w3.org/2000/svg", 'animate') as SVGAnimateElement;
    dasharray.setAttribute('attributeName', 'stroke-dasharray');
    dasharray.setAttribute('values', '100 100');

    let dashoffset = document.createElementNS("http://www.w3.org/2000/svg", 'animate') as SVGAnimateElement;
    dashoffset.setAttribute('attributeName', 'stroke-dashoffset');
    dashoffset.setAttribute('values', '100;0');
    dashoffset.setAttribute('dur', `${dur / 1000}s`);

    let line = root.querySelector(`line,path`) as SVGLineElement;
    let arrow = root.querySelector(`polygon`) as SVGPolygonElement;
    arrow.style.display = 'none';

    line.appendChild(dasharray);
    line.appendChild(dashoffset);

    dasharray.beginElement();
    dashoffset.beginElement();
    setTimeout(
        () => {
            arrow.style.display = 'unset';
            dasharray.endElement();
            dashoffset.endElement();
            dasharray.remove();
            dashoffset.remove();
        },
        dur
    );
}
export function light(root: SVGElement) {
    root.setAttribute('hasLighted', '1');
    for (let item of (root.querySelectorAll(':not(text):not(polygon)') as NodeListOf<SVGElement>)) {
        item.style.stroke = 'red';
    }
    for (let item of (root.querySelectorAll('text,polygon') as NodeListOf<SVGElement>)) {
        item.style.fill = 'red';
    }
}

export function dark(root: SVGElement) {
    root.setAttribute('hasLighted', '0');
    for (let item of (root.querySelectorAll(':not(text),:not(polygon)') as NodeListOf<SVGElement>)) {
        item.style.stroke = '';
    }
    for (let item of (root.querySelectorAll('text,polygon') as NodeListOf<SVGElement>)) {
        item.style.fill = '';
    }
}

export function delay(t: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t);
    });
}

export function KleenClosure(status: number[], matrix: number[][]): number[] {
    let ret = [] as number[];
    ret.push(...status);
    for (let i = 0; i < ret.length; i++) {
        let now = ret[i];
        if (matrix[now].length != 0) {
            for (let target of matrix[now]) {
                if (ret.indexOf(target) == -1) {
                    ret.push(target);
                }
            }
        }
    }
    return ret;
}