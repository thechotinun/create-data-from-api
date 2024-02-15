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
✓ src/Department.spec.ts (4)
   ✓ calculateAgeRange (4)
     ✓ age < 20
     ✓ age < 30
     ✓ age < 40
     ✓ 40+

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  14:36:58
   Duration  127ms (transform 15ms, setup 0ms, collect 8ms, tests 2ms, environment 0ms, prepare 45ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
or
```bash
$ npm run test:coverage
```
Result
```bash
✓ src/Department.spec.ts (4)
   ✓ calculateAgeRange (4)
     ✓ age < 20
     ✓ age < 30
     ✓ age < 40
     ✓ 40+

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  14:40:00
   Duration  133ms (transform 15ms, setup 0ms, collect 8ms, tests 1ms, environment 0ms, prepare 46ms)

 % Coverage report from v8
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------|---------|----------|---------|---------|-------------------
All files              |     5.4 |    66.66 |      25 |     5.4 |                   
 src                   |       0 |        0 |       0 |       0 |                   
  App.tsx              |       0 |        0 |       0 |       0 | 1-60              
  main.tsx             |       0 |        0 |       0 |       0 | 1-10              
 src/interface         |       0 |        0 |       0 |       0 |                   
  ...rtmentSummary.tsx |       0 |        0 |       0 |       0 | 1-35              
 src/utils             |     100 |      100 |     100 |     100 |                   
  ...ulateAgeRange.tsx |     100 |      100 |     100 |     100 |                   
-----------------------|---------|----------|---------|---------|-------------------

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
or
```bash
$ npm run test:ui
```
Result, And you can check at [Vitest UI](http://127.0.0.1:51204/__vitest__/#/)
```bash
✓ src/Department.spec.ts (4)
   ✓ calculateAgeRange (4)
     ✓ age < 20
     ✓ age < 30
     ✓ age < 40
     ✓ 40+

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  14:41:55
   Duration  128ms (transform 15ms, setup 1ms, collect 8ms, tests 2ms, environment 0ms, prepare 39ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
