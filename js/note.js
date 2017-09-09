"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = /** @class */ (function () {
    function Note(_data) {
        if (_data === void 0) { _data = { title: "", content: "" }; }
        this._data = _data;
        Note._notes.push(this);
        Note.save();
    }
    Object.defineProperty(Note, "all", {
        get: function () { return [].concat(this._notes); },
        enumerable: true,
        configurable: true
    });
    Note.load = function () {
        var notes = JSON.parse(localStorage.getItem("notes"));
        if (notes)
            notes.forEach(function (note) { return new Note(note); });
        this.save();
        return this.all;
    };
    Note.save = function () {
        if (this._notes.length)
            localStorage.setItem("notes", JSON.stringify(this._notes.map(function (note) { return note._data; })));
        else
            new Note();
    };
    Object.defineProperty(Note.prototype, "title", {
        get: function () { return this._data.title; },
        set: function (value) { this._data.title = value; Note.save(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "content", {
        get: function () { return this._data.content; },
        set: function (value) { this._data.content = value; Note.save(); },
        enumerable: true,
        configurable: true
    });
    Note.prototype.delete = function () {
        var index = Note._notes.indexOf(this);
        if (index < 0)
            throw new Error("Already deleted()");
        Note._notes.splice(index, 1);
        Note.save();
        return Note._notes[Math.max(index - 1, 0)];
    };
    Note._notes = [];
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map