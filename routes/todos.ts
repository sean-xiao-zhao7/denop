import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/todos", (ctx) => {});

router.post("/todos", (ctx) => {});

router.put("/todos/:id", (ctx) => {});

router.delete("/todos/:id", (ctx) => {});

export default router;
