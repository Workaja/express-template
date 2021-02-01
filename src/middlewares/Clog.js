const Clog = (req, _res, next) => {
  console.log(`CLOG MIDDLEWARE:`, req.query)
  next()
}

module.exports = Clog