import { website } from "astro-headstart/jsonld";
import type { Thing } from "schema-dts";
import { rootId } from "./id";

export async function vvWebsite(): Promise<Thing[]> {
    return [website({
        "@id": rootId,
        name: "Voodoo Voltage Team Website",
        about: "FIRST Robotics Team 4087 - Voodoo Voltage.",
        dateModified: new Date().toISOString(),
        headline: 'Be Inspired, Inspire Others',
        inLanguage: 'en',
        keywords: ['first robotics'],
    })]
}