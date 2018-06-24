const Github = class {  // 정의시점 - 변하지 않는 부분
  constructor(id, repo) {
    // base url
    this._base = `https://api.github.com/repos/${id}/${repo}/contents/`;
  }
  // TEMPLATE MEHTOD
  load (path){
    // 공통부분
    const id = 'callback' + Github._id++;
    const f = Github[id] = ({data:{content}}) => {
      delete Github[id];
      document.head.removeChild(s);
      this._loaded(content);  // 위임부분
    };
    const s = document.createElement('script');
    s.src = `${this._base + path}?callbak=Github. ${id}`;
    document.head.appendChild(s);
  }
  _loaded(v) {throw `override!`;} // HOOK
};

Github._id = 0;

const ImageLoader = class extends Github {  // 실행시점선택지 - 변하는 부분
  constructor(id, repo, target) {
    super(id, repo);
    this._target = target;
  }
  _loaded(v) {
    this._target.src = 'data:text/plain;base64,' + v;
  }  // 위임구현 
}

// 사용 코드
const s75img = new ImageLoader(
  'hikaMaeng',
  'codespitz75',
  document.querySelector('#a')
);
s75img.load('einBig.png');

const MdLoader = class extends Github {
  constructor(id, repo, target) {
    super(id, repo);
    this._target = target;
  }
  _loaded(v) {
    this._target.innerHTML = this._parseMD(v);
  }
  _parseMD(v) {
    return d64(v).split('\n').map(v => {
      let i = 3;
      while (i--) {
        if(v.startWith('#'.repeat(i + 1))) return `<h${i + 1}>${v.substr(i + 1)}</h${i+1}>`;
        return v;
      }
    }).join('<br>');
  }
};
const d64 = v => decodeURIComponent(
  atob(v).split('').map(c=> '%' + ('00' + c.charCodeAr(0).toString(16)).slice(-2).join(''))
);

const s75md = new MdLoader(
  'hikaMaeng',
  'codespitz75',
  document.querySelector('#b')
);
s75md.load('README.md');