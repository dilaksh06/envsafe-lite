import { beforeEach, describe, expect, it } from "vitest";
import { bool, number, string } from "../src";
import { envSafe } from "../src/core/envSafe";

describe("envSafe()", () => {
    beforeEach(() => {
        process.env = {}; // clear all env vars
    });

    it("parses all basic types correctly", () => {
        process.env.PORT = "4000";
        process.env.DB_URL = "postgres://localhost";
        process.env.DEBUG = "true";

        const config = envSafe({
            PORT: number(),
            DB_URL: string(),
            DEBUG: bool()
        });

        expect(config.PORT).toBe(4000);
        expect(config.DB_URL).toBe("postgres://localhost");
        expect(config.DEBUG).toBe(true);
    });

    it("uses default values", () => {
        const config = envSafe({
            PORT: number({ default: 3000 }),
            DEBUG: bool({ default: false })
        });

        expect(config.PORT).toBe(3000);
        expect(config.DEBUG).toBe(false);
    });

    it("throws on missing required values", () => {
        expect(() =>
            envSafe({
                DB_URL: string()
            })
        ).toThrow("Missing required environment variable: DB_URL");
    });

    it("throws on invalid number", () => {
        process.env.PORT = "not-a-number";

        expect(() =>
            envSafe({
                PORT: number()
            })
        ).toThrow(/Invalid number/);
    });
});
