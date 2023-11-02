import app from './app';
import MongoDB from './config/mongodb';

(async () => {
  await MongoDB.connect();
  const PORT = process.env.PORT || 8080;
  const server = app.listen(PORT, () =>
    console.log(`Listening at port ${PORT}`)
  );

  process.on('unhandledRejection', err => {
    console.log(err);
    server.close(() => {
      console.log('Shutting down the server 💥💥');
      process.exit(1);
    });
  });
})();
