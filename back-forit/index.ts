import express from "express";
import { serverConfig } from './server';


const app = express();

(async (config) => {

  try {

    const { corsMethod, port, providerRouter, textRunServer } = config;


    app.use(express.json());
    app.use(corsMethod())

    providerRouter.forEach((data) => {
      app.use(data.path, data.generateRouter(new data.controller(new data.model())))
    })

    app.listen(port, () => {
      console.log(`${textRunServer}:${port}`)
    });


  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }


})(serverConfig)



