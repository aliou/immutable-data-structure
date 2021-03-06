import Immutable from 'immutable'

export const SerieRecord = Immutable.Record({
  id: null,
  title: null,
  type_id: null,
  possessions_count: null,
})
export const serieForeignKeys = ['type_id']

export const EditionRecord = Immutable.Record({
  id: null,
  title: null,
  publisher_id: null,
  series_id: null,
})
export const editionForeignKeys = ['publisher_id', 'series_id']

export const VolumeRecord = Immutable.Record({
  id: null,
  title: null,
  number: null,
  date: null,
  img: null,
  isbn: null,
  edition_id: null,
  content: null,
})
export const volumeForeignKeys = ['edition_id']

export const TaskRecord = Immutable.Record({
  id: null,
  author_id: null,
  job_id: null,
  series_id: null,
})
export const taskForeignKeys = ['author_id', 'job_id', 'series_id']
