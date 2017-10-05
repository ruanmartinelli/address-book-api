import Joi from 'joi'

import firebase from 'util/firebase'
import validateSchema from 'util/validate-schema'

const ref = 'contacts'

// prettier-ignore
const ContactSchema = Joi.object({
  id: Joi.string().uuid({ version: [ 'uuidv4' ] }).required(),
  userId: Joi.number().integer().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  company: Joi.string(),
  street: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  createdAt: Joi.string().isoDate().required()
})

async function addContact (contact) {
  contact = validateSchema(contact, ContactSchema)

  const contactRef = `${ref}/${contact.id}`

  await firebase
    .database()
    .ref(contactRef)
    .set(contact)

  return firebase
    .database()
    .ref(contactRef)
    .once('value')
    .then(result => result.val())
}

export default { addContact }
