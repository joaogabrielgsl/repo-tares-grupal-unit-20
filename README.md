# Exercise 01 — Unit Testing


![Tests](https://img.shields.io/badge/tests-16%20passed-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Jest](https://img.shields.io/badge/tested%20with-Jest-C21325?logo=jest)
![Node](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js)


## Description
Unit testing exercise implementing `Product`, `Customer` and `Receipt` classes with full test coverage using **Jest** and **TypeScript**.

## Project Structure
```
exercise-01-Unit_Testing/
├── src/
│   ├── abstract.customer.ts
│   ├── customer.ts
│   ├── customer.spec.ts
│   ├── product.ts
│   ├── product.spec.ts
│   ├── receipt.ts
│   └── main.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```

## Setup & Usage

```bash
# Install dependencies
npm ci

# Run the program
npm run dev

# Run tests
npm run test
```

## Class Overview

| Class | Description |
|-------|-------------|
| `Product` | Item in the sale catalog with id, name and price |
| `Customer` | Purchasing customer with type-based discount and tax rates (`regular`, `vip`, `business`) |
| `Receipt` | Calculates and prints the purchase receipt for a customer and a list of products |

---
## Group Members
- Hugo Hernández Moreno
- Marian Alexandru Domsa Grigoras
- João Gabriel Guimaraes Santa Lima
