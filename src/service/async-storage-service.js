export const storageService = {
  query,
  get,
  // post,
  // put,
  remove,
}

function query(entityType, delay = 100) {
  const entities = JSON.parse(localStorage.getItem(entityType)) || _createDefaultBooks()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

function get(entityType, entityId) {
  return query(entityType).then((entities) => entities.find((entity) => entity._id === entityId))
}

// function post(entityType, newEntity) {
//   newEntity._id = _makeId()
//   return query(entityType).then((entities) => {
//     entities.push(newEntity)
//     _save(entityType, entities)
//     return newEntity
//   })
// }

// function put(entityType, updatedEntity) {
//   return query(entityType).then((entities) => {
//     const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
//     entities.splice(idx, 1, updatedEntity)
//     _save(entityType, entities)
//     return updatedEntity
//   })
// }

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

// function _makeId(length = 5) {
//   let str = ''
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (let i = 0; i < length; i++) {
//     str += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return str
// }

function _createDefaultBooks() {
  return [{
    title:"Sea of Death", 
    _id: 101,
    description:"Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
    rating:4.2,
    author:"Jorge Amado",
    price: 16.35
    },
    {
    title : "The Day Lasts More than a Hundred Years", 
    _id: 102,
    description: "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
    rating:4.5,
    author :"Chingiz Aitmatov",
    price :24
    },{
    title:"The Element of Surprise: Navy SEALS in Vietnam", 
    _id: 103,
    description:"it used to be said that the night belonged to Charlie. But that wasn't true where SEALs patrolled. For six months in 1970, fourteen men in Juliett Platoon of the Navy's SEAL Team One--incuding the author--carried out over a hundred missions in the Mekong Delta without a single platoon fatality. Their primary mission: kidnap enemy soldiers--alive--for interrogation.",
    rating:4.3,
    author:"Darryl Young",
    price:7.99
    },
   
  ]
}
