### Run the FormKit CLI

At your terminal, run `npx formkit@latest create-app` to start your new project:

```sh
npx formkit@latest create-app
```

`create-app` will ask you some questions about your project so it can determine what it needs to install and setup for you:

```sh
✔ Please enter a name for the project › <your-project-name>
✔ What framework would you like to use? › Vue (Vite) / Nuxt / React (Vite)
✔ What language should be used? › TypeScript / Javascript
✔ Would you like to install FormKit Pro? › no / yes
```

Once this is completed, you can follow the instructions to install all dependencies and start a development server:

Prefer one line (handy for scripts and coding agents)? Pass the answers as flags:

```sh
# React + Vite (TypeScript)
npx formkit@latest create-app my-app --framework react --lang ts

# Vue + Vite (TypeScript)
npx formkit@latest create-app my-app --framework vue --lang ts

# Nuxt
npx formkit@latest create-app my-app --framework nuxt
```

`--framework` accepts `vue` (alias `vite`), `nuxt`, or `react`. Add `--pro <key>` to include FormKit Pro.

```sh
Created formkit-app!

To run your new app:
📁 cd <your-project-name>
✅ npm install
🚀 npm run dev
```
