"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_1 = require("./note");
function select(note) {
    $('#note').data('note', note);
    $('#title').val(note.title);
    $('#content').val(note.content);
}
function render() {
    $('#list').empty();
    note_1.Note.all.forEach(function (note) {
        var opt = $("<div class=\"item\">").text(note.title || "(غير معنون)").on('click', function () { select(note); render(); });
        if ($('#note').data('note') === note)
            opt.addClass('active');
        opt.appendTo('#list');
    });
}
function init() {
    select(note_1.Note.load()[0]);
    $('#title').on('change keyup', function () {
        $('#note').data('note').title = $(this).val();
        render();
    });
    $('#content').on('change keyup', function () {
        $('#note').data('note').content = $(this).val();
        render();
    });
    $('#new').click(function () {
        select(new note_1.Note());
        render();
    });
    $('#delete').click(function () {
        select($('#note').data('note').delete());
        render();
    });
    render();
}
$(init);
//# sourceMappingURL=main.js.map