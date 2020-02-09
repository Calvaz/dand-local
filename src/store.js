import PouchDB from 'pouchdb'

export default class Store {
    constructor() {
        this.store = new PouchDB('dand')
        
        this.addCharacter = function (character) {
            this.store.put(character)
        }
        
        this.getAllCharacter = function () {
            this.store.allDocs({ include_docs: true, descending: true })
                .then(function (doc, err) {
                    if (err)
                        console.log(err)
                    return doc.rows
                })
        }
    }
}
 