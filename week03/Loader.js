const el = v => document.quertSelector(v);
const parseMd = v => {};
const loader = new Github('hikaMaeng', 'codespitz75');

// img 
const img = v => el('#a').src = 'data:text/plain;base64,' + v;
loader.parser = img;
loader.load('xx.png');

// md
const md = v => el('#b').innerHTML = parseMD(v);
loader.parser = md;
loader.load('xx.md');