import { Note } from './note';

function select(note:Note) {
  $('#note').data('note',note);
  $('#title').val(note.title);
  $('#content').val(note.content);
}

function render() {
  $('#list').empty();
  Note.all.forEach((note) => {
    let opt:JQuery = $(`<div class="item">`).text(note.title || "(غير معنون)").on('click', () => { select(note); render(); } );
    if ($('#note').data('note') === note) opt.addClass('active');
    opt.appendTo('#list');
  });
}

function init():void {
  select(Note.load()[0]);
  $('#title').on('change keyup', function () {
    ($('#note').data('note') as Note).title = $(this).val() as string;
    render();
  });

  $('#content').on('change keyup', function () {
    ($('#note').data('note') as Note).content = $(this).val() as string;
    render();
  });

  $('#new').click(() => {
    select(new Note());
    render();
  })

  $('#delete').click(() => {
    select($('#note').data('note').delete());
    render()
  })

  render()
}

$(init);
