import http from 'util/http'
import contactController from './contact-controller'

function initPrivate (app) {
  /**
   * @api {post} /api/contact Add contact
   * @apiName AddContact
   * @apiGroup Contacts
   * @apiVersion  0.1.0
   *
   * @apiHeader {String} Authorization Auth token
   *
   * @apiParam (Body) {String} email Email of the contact.
   * @apiParam (Body) {String} phone Phone Number of the contact.
   * @apiParam (Body) {String} [company] Company of the contact.
   * @apiParam (Body) {String} [street] Street Name of the contact.
   * @apiParam (Body) {String} [city] City of the contact.
   * @apiParam (Body) {String} [country] Country of the contact.
   *
   * @apiSuccessExample {type} Success-Response:
   * HTTP/1.1 200 OK
   *  {
   *    "id": "0a16b149-e1df-4d63-b30c-e7060b080v22",
   *    "userId": 423,
   *    "email": "queen@msn.com",
   *    "phone": "+01985154726",
   *    "company": "7 Kingdoms LLC"
   *    "street": "123 Joffrey St."
   *    "city": "King's Landing"
   *    "country": "Westeros",
   *    "createdAt": "2017-10-04"
   *   }
   */
  app.post('/api/contact', http(contactController.addContact))
}

function initPublic (app) {}

export default {
  initPrivate,
  initPublic
}
