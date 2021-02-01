const { uuid } = require("../utilities/helper")

const BaseController = require("./_BaseController")

class HelloController extends BaseController {
  helloWorld = async (req, res, next) => {
    try {
      const { name } = req.query

      res.json({
        ...req.query,
        message: `Hello ${name}`,
        uuid: uuid()
      })
    } catch (e) {
      console.log(e)
      next()
    }
  }
}

module.exports = HelloController