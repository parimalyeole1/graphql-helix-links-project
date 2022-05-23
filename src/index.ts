import { server } from "./server";

const port = process.env.PORT || 3000;

async function main() {
  server.listen(port, () => {
    console.log(`GraphQL server is running on port ${port}.`);
  });
  
}

main();
