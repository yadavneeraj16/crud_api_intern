import Fastify from "fastify";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import addressRoutes from "./routes/addressRoutes";

dotenv.config();

const fastify = Fastify({ logger: true });
const port = Number(process.env.PORT || 3000);

const start = async () => {
  try {
    await connectDB();

    await userRoutes(fastify);
await addressRoutes(fastify);
    await fastify.listen({ port, host: "0.0.0.0" });
    console.log(`Server running on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
