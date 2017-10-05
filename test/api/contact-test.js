import { isNil, isObject } from 'lodash'
import { createContact } from '../helpers/contact'

module.exports = (request, test) => {
  test('Contacts: add a new contact', async t => {
    // prettier-ignore
    const { status, data: contact } = await request.post('/api/contact', createContact())

    t.is(status, 200)
    t.is(isObject(contact), true)
    t.is(isNil(contact.id), false)
    t.is(isNil(contact.userId), false)
    t.is(isNil(contact.createdAt), false)
  })

  test('Contacts: validate new contacts', async t => {
    const contact = createContact()
    delete contact.email

    const { status } = await request.post('/api/contact', contact)

    t.is(status, 422)
  })
}
