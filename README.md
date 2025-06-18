Absolutely! Here's a complete, clean, and professional `README.md` for your `envsafe-lite` NPM package — with all the important sections included in one place. You can copy-paste this directly into your project.

---

````markdown
# 🌿 envsafe-lite

**Lightweight. Type-safe. Hassle-free.**  
A tiny utility for safely loading and validating environment variables in Node.js — with full TypeScript support and zero dependencies.

---

## ✨ Features

- ✅ Type-safe parsing: `string()`, `number()`, `bool()`
- ✅ Default value support
- ✅ Clear, developer-friendly error messages
- ✅ Works seamlessly with `.env` files (`dotenv`)
- ✅ Ultra-light and tree-shakable
- ✅ First-class TypeScript support

---

## 📦 Installation

```bash
npm install envsafe-lite
````

---

## 🚀 Usage

```ts
import { envSafe, string, number, bool } from "envsafe-lite";

// Optional: load .env file
import "dotenv/config";

const config = envSafe({
  PORT: number({ default: 3000 }),
  DB_URL: string(),
  DEBUG_MODE: bool({ default: false }),
});

console.log(config.PORT);       // 3000 (or value from env)
console.log(config.DB_URL);     // required env var
console.log(config.DEBUG_MODE); // false (or parsed boolean)
```

---

## 🧪 Supported Validators

| Validator  | Description                            |
| ---------- | -------------------------------------- |
| `string()` | Parses a string                        |
| `number()` | Parses a number, throws if NaN         |
| `bool()`   | Parses `true`, `false`, `1`, `0`, etc. |

All validators support a `default` option.

---

## ❗ Error Handling

If required variables are missing or malformed, `envsafe-lite` throws clear errors:

```txt
[envsafe-lite] Missing required environment variable: DB_URL
[envsafe-lite] Invalid number for environment variable PORT: "abc"
[envsafe-lite] Invalid boolean for environment variable DEBUG_MODE: "maybe"
```

---

## 📂 Example `.env` file

```
PORT=8080
DB_URL=postgres://user:pass@localhost:5432/db
DEBUG_MODE=true
```

Load this using:

```ts
import "dotenv/config";
```

Or manually using:

```ts
import * as dotenv from "dotenv";
dotenv.config();
```

---

## 📜 TypeScript Support

Return values from `envSafe()` are fully typed:

```ts
const config = envSafe({
  PORT: number(),
});

// config.PORT is inferred as number ✅
```

---

## 🧪 Tests

This package includes full unit tests using [Vitest](https://vitest.dev).

```bash
npm run test
```

---

## 🔧 Advanced Use (Custom Validators) — Coming Soon

Pluggable custom validators (`url()`, `enum()`, etc.) are planned for future versions.

---

## 📄 License

MIT © 2025 Dilakshan Kamalathasan
[GitHub Repository](https://github.com/your-username/envsafe-lite)

```

---

## ✅ Next Steps

- Save this as your `README.md`
- Update the **GitHub Repository link** at the bottom when ready
- After this, you’ll be ready to **publish to NPM** — want to proceed with that now?

Let me know if you'd like help with:
- Publishing
- Adding a logo or badges
- Creating a GitHub repo structure

You're almost there 🚀
```
