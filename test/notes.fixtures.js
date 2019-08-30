function makeNoteArray() {
  return [
    {
      id: 1,
      modified: '2029-01-22T16:28:32.615Z',
      note_name: 'Sam Gamgee',
      folder_id: 2,
      content: 'Sam'
    },
    {
      id: 2,
      modified: '2100-05-22T16:28:32.615Z',
      note_name: 'Peregrin Took',
      folder_id: 1,
      content: 'Pippin'
    }
  ];
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    note_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    modified: '2100-05-22T16:28:32.615Z',
    folder_id: 1,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
  };
  const expectedNote = {
    ...maliciousNote,
    note_name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  };
  return {
    maliciousNote,
    expectedNote
  };
}

module.exports = {
  makeNoteArray,
  makeMaliciousNote
};
