const port: number = 5000;

const host: string = "localhost";

const config = {
  HOST: host,
  USER: "root",
  PASSWORD: "",
  DB: "homestead2",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  PORT: port,
  JWT_SECRET: "juIXv3GVGo0ZafWC",
  MAIL_API_KEY: "AIzaSyC6z9HwqTHgaHVP6Y073HkkuFUWUaiAhhw",
};

export default config;
