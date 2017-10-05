import authRoutes from './auth'
import userRoutes from './user'
import contactRoutes from './contact'
import authMiddleware from './auth/auth-middleware'

function init (app) {
  // alias delete with del
  app.del = app.delete

  authRoutes.initPublic(app)
  userRoutes.initPublic(app)

  app.use(authMiddleware)

  userRoutes.initPrivate(app)
  contactRoutes.initPrivate(app)
}

module.exports = { init }
