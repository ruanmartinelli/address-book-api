import { v4 as uuid } from 'uuid'
import contactModel from './contact-model'

async function addContact (contact, options) {
  const now = new Date().toISOString()
  const userId = options.context.id

  contact.id = uuid()
  contact.createdAt = now
  contact.userId = userId

  return contactModel.addContact(contact)
}

export default { addContact }
