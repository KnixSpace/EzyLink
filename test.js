// import app from './app';
// import MongoDB from './config/mongodb';

// (async () => {
//   await MongoDB.connect();
//   const PORT = process.env.PORT || 8080;
//   const server = app.listen(PORT, () =>
//     console.log(`Listening at port ${PORT}`)
//   );

//   process.on('unhandledRejection', err => {
//     console.log(err);
//     server.close(() => {
//       console.log('Shutting down the server 💥💥');
//       process.exit(1);
//     });
//   });
// })();

// app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log(req.sessionID, "😊😂😂🤣🤣");
//   res.cookie("connect.sid", req.sessionID, cookieOptions);
//   res.cookie("test.12", req.sessionID, cookieOptions);

//   console.log(process.env.NODE_ENV, process.env.CLIENT_HOME, cookieOptions);
//   console.log("b✨✨✨✨✨✨✨", req.cookies);
//   next();
// });

// const cookieOptions = {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
//   maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
// };
