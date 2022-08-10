// import { firebaseService } from './firebase.service'
// const colName = 'wishs'
function query() {
  // return firebaseService.query()
}

function getById(wishId) {
  // return firebaseService.getById(wishId, colName)
}

function remove(wishId) {
  // return firebaseService.remove(wishId, colName)
}


export const wishService = {
  query,
  remove,
  getById,
}
