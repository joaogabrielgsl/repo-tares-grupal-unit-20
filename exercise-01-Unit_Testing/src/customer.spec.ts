/**
 * Unit tests for class Customer
 */

import { Customer } from "./customer.js";

describe("Test of class Customer", () => {

  describe("constructor", () => {
    test("It instantiates a regular customer successfully", () => {
      const customer = new Customer("John Doe", "regular");
      expect(customer).toBeInstanceOf(Customer);
    });

    test("It instantiates a vip customer successfully", () => {
      const customer = new Customer("Jane Doe", "vip");
      expect(customer).toBeInstanceOf(Customer);
    });

    test("It instantiates a business customer successfully", () => {
      const customer = new Customer("Acme Corp", "business");
      expect(customer).toBeInstanceOf(Customer);
    });
  });

  describe("getName", () => {
    test("It returns the customer name correctly", () => {
      const customer = new Customer("John Doe", "regular");
      expect(customer.getName()).toEqual("John Doe");
    });
  });

  describe("getDiscountRate", () => {
    test("Regular customer has 15% discount rate", () => {
      const customer = new Customer("John Doe", "regular");
      expect(customer.getDiscountRate()).toBe(0.15);
    });

    test("VIP customer has 50% discount rate", () => {
      const customer = new Customer("Jane Doe", "vip");
      expect(customer.getDiscountRate()).toBe(0.5);
    });

    test("Business customer has no discount", () => {
      const customer = new Customer("Acme Corp", "business");
      expect(customer.getDiscountRate()).toBe(0);
    });
  });

  describe("getTaxRate", () => {
    test("Regular customer has 21% tax rate", () => {
      const customer = new Customer("John Doe", "regular");
      expect(customer.getTaxRate()).toBe(0.21);
    });

    test("VIP customer has 21% tax rate", () => {
      const customer = new Customer("Jane Doe", "vip");
      expect(customer.getTaxRate()).toBe(0.21);
    });

    test("Business customer has 10% tax rate", () => {
      const customer = new Customer("Acme Corp", "business");
      expect(customer.getTaxRate()).toBe(0.1);
    });
  });
});
