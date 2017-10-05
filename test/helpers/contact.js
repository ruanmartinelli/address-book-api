import faker from 'faker'

export function createContact () {
  return {
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    company: faker.company.companyName(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    country: faker.address.country()
  }
}
