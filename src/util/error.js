function validation (message) {
  return {
    status: 422,
    success: false,
    message
  }
}

function unauthorized (message) {
  return {
    status: 401,
    success: false,
    message: message || `Please login first`
  }
}

function forbidden (message) {
  return {
    status: 403,
    success: false,
    message: message || `Sorry, you don't have access to perform this action`
  }
}

export default {
  validation,
  forbidden,
  unauthorized
}
