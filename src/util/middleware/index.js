const errorHandler = (res, statusCode = 500, message = 'Internal Server Error') =>
  res.status(statusCode).json({ message });

const sendResponse = (req, res) => {
  if (req.payload) { return res.json(req.payload); }
  return res.json({ success: false, error: req.error });
};

const getResponse = (route) => (req, _, next) =>
  route(req)
    .then(() => next())
    .catch(err => next(err));

export {
  errorHandler,
  sendResponse,
  getResponse,
};
