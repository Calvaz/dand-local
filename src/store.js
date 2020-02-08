import pouchdb from 'pouchdb'

export default class Store{

    constructor(){
        this.db = new PouchDB('dand'); 
    }

    addCharacter = (pg) => {
        this.db.post(pg)
    }

    getCharacters = () => {
        db.allDocs({include_docs: true, descending: true}, (err,docs) => {return docs})
    }

}