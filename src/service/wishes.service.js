// import { firebaseService } from './firebase.service'
import { storageService }  from './async-storage-service'
const DB_KEY = 'wish_db'

function query() {
  return storageService.query(DB_KEY)
}

function getById(wishId) {
return storageService.get(DB_KEY, wishId)}

function remove(wishId) {
 return storageService.remove(DB_KEY, wishId)
}


export const wishService = {
  query,
  remove,
  getById,
}
