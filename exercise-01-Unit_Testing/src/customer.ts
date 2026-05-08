/**
 * Represents a customer with specific tax and discount rules.
 */

import { AbstractCustomer } from "./abstract.customer.js";

type CustomerType = 'regular' | 'vip' | 'business';

const DISCOUNT_RATES: Record<CustomerType, number> = {
  regular: 0.15,
  vip: 0.5,
  business: 0,
};

const TAX_RATES: Record<CustomerType, number> = {
  regular: 0.21,
  vip: 0.21,
  business: 0.1,
};

export class Customer extends AbstractCustomer {
  private readonly name: string;
  private readonly type: CustomerType;

  constructor(name: string, type: CustomerType) {
    super(name, type);
    this.name = name;
    this.type = type;
  }

  public getDiscountRate(): number {
    return DISCOUNT_RATES[this.type];
  }

  public getTaxRate(): number {
    return TAX_RATES[this.type];
  }

  public getName(): string {
    return this.name;
  }
}