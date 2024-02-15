# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

##
```bash
# Install package 📚
$ npm install
```
```bash
# Running the app 🚀
$ npm run start
```
##
# if you want test case
```bash
$ npm run test
```
Result
```bash
✓ src/Department.spec.ts (3)
   ✓ calculateAgeRange (3)
     ✓ 21-43
     ✓ 22-50
     ✓ 19-45

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  17:15:34
   Duration  119ms (transform 15ms, setup 0ms, collect 7ms, tests 1ms, environment 0ms, prepare 39ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
or
```bash
$ npm run test:coverage
```
Result
```bash
✓ src/Department.spec.ts (3)
   ✓ calculateAgeRange (3)
     ✓ 21-43
     ✓ 22-50
     ✓ 19-45

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  17:16:46
   Duration  131ms (transform 16ms, setup 0ms, collect 7ms, tests 1ms, environment 0ms, prepare 47ms)

 % Coverage report from v8
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |    5.78 |       25 |      25 |    5.78 |                   
 src                    |       0 |        0 |       0 |       0 |                   
  App.tsx               |       0 |        0 |       0 |       0 | 1-65              
  main.tsx              |       0 |        0 |       0 |       0 | 1-10              
 src/interface          |       0 |        0 |       0 |       0 |                   
  DepartmentSummary.tsx |       0 |        0 |       0 |       0 | 1-39              
 src/utils              |     100 |      100 |     100 |     100 |                   
  calculateAgeRange.tsx |     100 |      100 |     100 |     100 |                   
------------------------|---------|----------|---------|---------|-------------------

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
or
```bash
$ npm run test:ui
```
Result, And you can check at [Vitest UI](http://127.0.0.1:51204/__vitest__/#/)
```bash
✓ src/Department.spec.ts (3)
   ✓ calculateAgeRange (3)
     ✓ 21-43
     ✓ 22-50
     ✓ 19-45

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  17:17:14
   Duration  127ms (transform 15ms, setup 0ms, collect 8ms, tests 1ms, environment 0ms, prepare 38ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
