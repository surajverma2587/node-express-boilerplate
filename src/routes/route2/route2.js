const getData = async (req) => {

  req.payload = { success: true, data: { value: 'route 2' } };

  return req;
};

export { getData };
