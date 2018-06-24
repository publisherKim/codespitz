const Github = class {
  constructor(id, repo) {
    this._base = `https://api.github.com/repos/${id}/${repo}/contents/`;
  }
  load (path){
    const id = 'callback' + Github._id++;
    const f = Github[id] = ({data:{content}}) => {
      delete Github[id];
      document.head.removeChild(s);
      this._parser(content);  // 위임부분
    };
    const s = document.createElement('script');
    s.src = `${this._base + path}?callbak=Github. ${id}`;
    document.head.appendChild(s);
  }
  set parser(v) {this._parser = v;} // 위임객체 STARATEGY OBJECT: 실행지점 선택시 변하는 부분
};

Github._id = 0;