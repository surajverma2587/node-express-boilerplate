import app from './app';

const server = app.listen(4000, () => {
  console.log('Listening on port 4000...');
});

export default server;
