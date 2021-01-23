const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folder')
  },
  getById(knex, id) {
    return knex.from('folder').select('*').where('id', id).first()
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folder')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  deleteFolder(knex, id) {
    return knex('folder')
      .where({ id })
      .delete()
  },
  updateFolder(knex, id, newFolderField) {
    return knex('folder')
      .where({ id })
      .update(newFolderField)
  },
}

module.exports = FoldersService