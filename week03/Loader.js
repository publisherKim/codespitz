const el = v => document.quertSelector(v);
const parseMd = v => {};
const loader = new Github('hikaMaeng', 'codespitz75');

// img 
const img = (v, el) => el.src = 'data:text/plain;base64,' + v;
loader.setParser(img, el('#a'));
loader.load('xx.png');

// md
const md = (v, el) => el.innerHTML = parseMD(v);
loader.setParser = (md, el('#b'));
loader.load('xx.md');