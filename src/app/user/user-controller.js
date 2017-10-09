import { isEmpty } from 'lodash'
import scrypt from 'scrypt-for-humans'

import error from 'util/error'
import userModel from './user-model'

function getUsers({ id, email, withPassword = false }) {
  return userModel.getUsers({ id, email, withPassword })
}

function getUser({ id }) {
  return userModel.getUser(id)
}

async function addUser(user, options) {
  const { email } = user
  const savedUser = await userModel.getUsers({ email })

  if (!isEmpty(savedUser)) {
    throw error.validation('User already exists')
  }

  if(!user.password){
    throw error.validation('Field \"password\" cannot be blank')
  }

  // Hashes user password
  user.password = await scrypt.hash(user.password)

  return userModel.addUser(user)
}

function updateUser(user, options) {
  if (!user.id) {
    throw error.validation('No ID provided')
  }

  // Shouldn't update the password on this endpoint
  if(user.password) delete user.password

  return userModel.updateUser(user)
}

function removeUser({ id }) {
  return userModel.removeUser(id)
}

export default {
  getUser,
  addUser,
  getUsers,
  updateUser,
  removeUser
}
