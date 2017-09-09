export class Note {

  private static _notes:Note[] = [];
  static get all():Note[] { return [].concat(this._notes); }

  static load():Note[] {
    let notes:INoteData[] = JSON.parse(localStorage.getItem("notes"));
    if (notes) notes.forEach(note => new Note(note));
    this.save();
    return this.all;
  }

  public static save() {
    if (this._notes.length)
      localStorage.setItem("notes", JSON.stringify(this._notes.map(note => note._data)));
    else new Note();
  }

  constructor(private _data:INoteData = {title: "", content: ""}) {
    Note._notes.push(this); Note.save();
  }

  get title():string { return this._data.title; }
  set title(value:string) { this._data.title = value; Note.save(); }

  get content():string { return this._data.content; }
  set content(value:string) { this._data.content = value; Note.save(); }

  delete():Note {
    let index:number = Note._notes.indexOf(this);
    if (index < 0) throw new Error("Already deleted()");
    Note._notes.splice(index,1);
    Note.save();
    return Note._notes[Math.max(index-1,0)];
  }
}

export interface INoteData {
  title:string;
  content:string;
}
