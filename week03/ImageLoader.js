const ImageLoader = class extends Github {  // 실행시점선택지 - 변하는 부분
  constructor(id, repo, target) {
    super(id, repo);
    this._target = target;
  }
  _loaded(v) {
    this._target.src = 'data:text/plain;base64,' + v;
  }  // 위임구현 
}