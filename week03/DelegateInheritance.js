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
  loaded(v) {}  // 위임구현
}