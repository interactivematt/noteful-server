const NotesService = {
  getAllNotes(knex) {
    return knex.select('*').from('note')
  },
  getById(knex, id) {
    return knex.from('note').select('*').where('id', id).first()
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into('note')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  deleteNote(knex, id) {
    return knex('note')
      .where({ id })
      .delete()
  },
  updateNote(knex, id, newNoteFields) {
    return knex('note')
      .where({ id })
      .update(newNoteFields)
  },
}

module.exports = NotesService