
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

```
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

## 🧪 Run Tests

This package includes unit tests using [Vitest](https://vitest.dev):

```bash
npm run test
```

---

## 📅 Roadmap

Planned upcoming features:

* `url()`, `email()`, `enum()` validators
* Custom validator API (`custom(fn)`)
* CLI tool: `envsafe-lite check`
* Auto-generate `.env.example`

---

## 📄 License

MIT © 2025 [Dilakshan Kamalathasan](https://github.com/dilaksh06)

```
