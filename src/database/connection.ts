import mongoose from "mongoose";

const env = process.env;

export default async function connect() {
  const dbUser = env.DB_USER;
  const dbPassword = env.DB_PASSWORD;
  const dbName = env.DB_NAME;

  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.abxdndd.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );
    console.log("Conectado ao Banco !!");
  } catch (error) {
    console.log(`Erro na conexão ao Banco -> ${error}`);
  }
}
