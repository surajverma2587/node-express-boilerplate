const getData = async (req) => {

  req.payload = { success: true, data: { value: 'route 1' } };

  return req;
};

export { getData };
