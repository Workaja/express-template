class BaseController {

  constructor(comms) {
    this.comms = comms;
  }

  okResponse = (data) => {
    return async (_req, res) => {
      res.send(data)
    }
  };

  errorResponse = (code, message) => {
    return async (_req, res) => {
      res.status(code).send(message)
    }
  };

  unauthorisedResponse = () => {
    this.errorResponse(401, 'Unauthorised');
  };

  internalErrorResponse = (message) => {
    this.errorResponse(500, message);
  };

  static getMethod(name) {
    return async (req, res, next) => {
      await BaseController.executeMethod(this, name, { req, res, next });
    };
  }

  static async executeMethod(Clazz, name, comms) {
    const controller = new Clazz(comms);
    const method = controller[name];

    try {
      await method(controller.comms.req, controller.comms.res, controller.comms.next);
    } catch (e) {
      console.log(e);
      controller.internalErrorResponse(e.message || e);
    }
  }
}

module.exports = BaseController