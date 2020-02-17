import PouchDB from 'pouchdb'

export default class Store {
  constructor () {
    this.store = new PouchDB('dand')

    this.addCharacter = function (character) {
      this.store.put(character)
    }

    this.getAllCharacter = function () {
      return this.store.allDocs({ include_docs: true, descending: true })
        .then(function (doc) {
          return doc.rows.map((doc => doc.doc))
        })
    }

    this.delete = function(item) {
      return this.store.remove(item)
        .then(function(val) {return val.ok})
    }

    this.update = function(item){
      return this.store.put(item)
        .then(function(val) {return val.ok})
    }
  }
}
