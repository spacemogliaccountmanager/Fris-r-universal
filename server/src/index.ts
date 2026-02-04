import { createApp } from "./app";
import { env } from "./lib/env";

async function main() {
  try {
    const app = await createApp();

    app.listen(env.PORT, () => {
      console.log(
        `Lekri server running at http://localhost:${env.PORT}`,
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main();
