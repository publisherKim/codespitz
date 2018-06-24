// const loader = new loader("./data.json");
// loader.load(json=>{
//   const renderer = new Renderer();
//   renderer.setData(json);
//   renderer.render();
// });

// const data = new JsonData('./data.json');
// const renderer = new Renderer();
// renderer.render(data);

const Info = class {
  constructor (json) {
    const {title, header, items} = json;
    if (typeof title !== 'string' || !title) throw "invalid title";
    if (!Array.isArray(header) || !header.length) throw "invalid header";
    if (!Array.isArray(items) || !items.length) throw "invalid items";

    items.forEach( (v, idx) => {
      if (!Array.isArray(v) || v.length !== header.length) {
        throw "invalid items:" + idx;
      }
    });
    this._private = {title, header, items};
  }
  get title () {return this._private.title;}
  get header () {return this._private.header;}
  get items () {return this._private.items;}
};

const Data = class{
  async getData () {
    const json = await this._getData();
    return new Info(json);
  }
  async _getData() {
    throw "_getData must overrided";
  }
};

const JsonData = class extends Data {
  constructor (data) {
    super();
    this._data = data;
  }
  async getData () {
      if (typeof this._data == 'string') {
        const response = await fetch(this._data);
        return await response.json();
      } else {
        return this._data;
      }
  }
};

const Renderer = class {
  constructor() {}
  async render(data) {
    if (!(data instanceof Data)) {
      throw "invailid data type";
    }
    const info = await data.getData();
    console.log(info.title, info.header, info.items);
  }
};