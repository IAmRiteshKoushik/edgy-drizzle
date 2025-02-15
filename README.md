# Edging with Drizzle + Supabase + Deno

This is a proof of concept repository which explains how to work with Deno,
Drizzle, Node and Supabase.

### Pointers to Keep In Mind
1. Specify `.env` inside `supabase/functions`. The database URL should not be 
called `SUPABASE_DB_URL`, instead call it `DATABASE_URL`. And update things
inside of drizzle.config.ts
2. Set up the secrets using
```bash
supabase secrets set --env-file <path-to-env>
```
3. When deploying the function use as we have separate auth middleware coming up
```bash
supabase functions deploy --no-verify-jwt
```
4. `deno.json` is needed inside each function to specify the import paths
properly and while importing you need to add `npm:<package-name>`

> ![WARNING]
> There is a 10MB size limit on how much you can pack inside one single function.
> Be mindful of that.

## Summary of Productionizing 
1. Create the project in Supabase and get the projectID
2. Get the connection string and the database password
3. Add that in `.env` by following previously mentioned pointers
4. Link the project (this will also ask for database password)
```bash
supabase link --project-ref=<project-id>
```
5. Run migrations
```bash
supabase db push
```
6. Deploy individual functions
```bash
supabase functions deploy <function-name> --no-verify-jwt
```
7. Go to the URL given in CLI and check it out!

> ![TIP]
> Do not try to seed the production database. All of that is to be taken care 
of locally only. Better setup another ENVIRONMENT_VARIABLE which checks whether
you are in `production` or not and then seeds accordingly.
