import { countriesTable } from "../_shared/schema.ts";
import { db } from "../_shared/db.ts";

Deno.serve(async (req) => {
  try {
    const allCountries = await db.select().from(countriesTable);
    console.log("Function invoked successfully");
    return new Response(
      JSON.stringify(allCountries),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      console.log(err.message);
    }
    return new Response(
      JSON.stringify({
        message: "Failed to serve",
        error: err,
      }),
      { headers: { "Content-Type": "application/json" } },
    );
  }
});
