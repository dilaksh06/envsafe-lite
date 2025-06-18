Perfect! Here's a clean, contributor-friendly `ROADMAP.md` file you can drop directly into your project root.

---

### 📄 `ROADMAP.md`

````markdown
# 🛣️ envsafe-lite – Roadmap

This document outlines planned features, improvements, and stretch goals for the future of `envsafe-lite`.

Want to contribute to any of these? Open an issue or PR!

---

## ✅ Phase 1: Core Features (Completed)

- ✅ `envSafe(schema)` function
- ✅ Basic validators: `string()`, `number()`, `bool()`
- ✅ Default value support
- ✅ Clear error messages
- ✅ Type inference via TypeScript
- ✅ Zero dependencies, tree-shakable
- ✅ Vitest test suite
- ✅ Clean API & README documentation

---

## 🔜 Phase 2: Built-in Validators (Planned)

Add more built-in validators to cover common environment variable types:

- [ ] `url()` – Validates URL format
- [ ] `email()` – Validates basic email format
- [ ] `enum(['dev', 'prod'])` – Accepts only defined string values
- [ ] `json()` – Parses JSON strings
- [ ] `int()` – Like `number()` but disallows floats
- [ ] `port()` – Integer in safe port range (1024–65535)

---

## 🧠 Phase 3: Custom Validators

Let developers create and inject their own validators:

```ts
custom((key, value) => {
  if (!value?.startsWith("env-")) throw new Error(`${key} must start with "env-"`);
  return value;
});
````

API draft:

```ts
custom<T>(fn: (key: string, value: string | undefined) => T): BaseValidator<T>
```

---

## ✨ Phase 4: Utility Features

Quality-of-life enhancements:

* [ ] `.env.example` auto-generation from schema
* [ ] CLI command: `envsafe-lite check` to validate `.env` at runtime
* [ ] Optional config grouping (e.g., `config.db.host`)
* [ ] Export schema typings or JSON Schema from the schema object
* [ ] Support `.env.defaults` (fallbacks)

---

## 🌍 Phase 5: Community & Ecosystem

* [ ] Add GitHub issue templates
* [ ] Add a `CONTRIBUTING.md` guide
* [ ] Publish VS Code snippets (optional)
* [ ] Add GitHub Actions CI/CD
* [ ] Create documentation website (Docusaurus or similar)
* [ ] Add badges to `README.md` (npm, test, size, license)

---

## ❤️ Contributing

Want to build one of these? Fork the repo, create a branch, and submit a pull request.
Make sure to include tests and update documentation where applicable.

Thanks for helping improve `envsafe-lite`!

````

---

### ✅ Your Turn:
1. Save this as `ROADMAP.md` in your repo root.
2. (Optional) Link it in your `README.md`:

```md
## 📍 Roadmap
See [ROADMAP.md](./ROADMAP.md) for planned features and contribution ideas.
````

Ready to move to the **NPM publish** step?
