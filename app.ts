import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./routes/todos.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowMethods());

await app.listen({ port: 3000 });
