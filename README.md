
```bash
npm install envsafe-lite
````

---

## 🚀 Quick Usage

```ts
import { envSafe, string, number, bool } from "envsafe-lite";
import "dotenv/config"; // Optional: to load .env file

const config = envSafe({
  PORT: number({ default: 3000 }),
  DB_URL: string(),
  DEBUG_MODE: bool({ default: false }),
});
```

**Example `.env`:**

```
PORT=8080
DB_URL=postgres://user:pass@localhost:5432/db
DEBUG_MODE=true
```

---

## 🛠️ Validators

| Validator  | Description                            |
| ---------- | -------------------------------------- |
| `string()` | Parses a string                        |
| `number()` | Parses a number, throws if NaN         |
| `bool()`   | Parses `true`, `false`, `1`, `0`, etc. |

Each validator supports a `default` value.

---

## ❗ Errors

Clear, readable error messages:

```
[envsafe-lite] Missing required environment variable: DB_URL
[envsafe-lite] Invalid number for environment variable PORT: "abc"
```

---

## 📘 TypeScript Support

The returned object from `envSafe()` is fully typed:

```ts
const config = envSafe({
  PORT: number(),
});
// config.PORT is inferred as number ✅
```


## 📄 License

MIT © [Dilakshan Kamalathasan](https://github.com/dilaksh06)

```


