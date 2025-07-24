import { site } from "astro:config/server";

export const rootId : string = site!;
if (!rootId) {
    throw new Error('Missing "site" in Astro config.')
}