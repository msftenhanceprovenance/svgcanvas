import {Element} from '../index'
import arc from './tests/arc'
import arcTo from './tests/arcTo'
import arcTo2 from './tests/arcTo2'
import emptyArc from './tests/emptyArc'
import fillstyle from './tests/fillstyle'
import globalAlpha from './tests/globalalpha'
import gradient from './tests/gradient'
import linecap from './tests/linecap'
import linewidth from './tests/linewidth'
import rgba from './tests/rgba'
import rotate from './tests/rotate'
import saveandrestore from './tests/saveandrestore'
import setLineDash from './tests/setLineDash'
import text from './tests/text'
import tiger from './tests/tiger'
import transform from './tests/transform'

const tests = [
    tiger,
    arc, 
    arcTo, 
    arcTo2, 
    emptyArc, 
    fillstyle, 
    globalAlpha, 
    gradient, 
    linecap, 
    linewidth, 
    rgba, 
    rotate, 
    saveandrestore, 
    setLineDash,
    text,
    transform
];

for (let fn of tests) {
    let name = fn.name;
    // Container
    const container = document.createElement('div');
    container.className = 'example';
    container.id = 'example-' + name;
    container.innerHTML = `<h2>${name}</h2><div class="canvas"></div><div class="svg"></div>`
    // Canvas
    const canvas = document.createElement('canvas');
    container.querySelector('.canvas').appendChild(canvas);
    // SVGCanvas
    const svgcanvas = new Element();
    container.querySelector('.svg').appendChild(svgcanvas.getElement());
    document.querySelector('body').appendChild(container);
    // Render
    for (let c of [canvas, svgcanvas]) {
        c.width = 500;
        c.height = 500;
        const ctx = c.getContext('2d');
        fn(ctx);
    }
}