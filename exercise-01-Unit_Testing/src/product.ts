/**
 * Handles the calculation and formatting of the shopping receipt.
 */
export class Product {
    
    constructor(private id: string, private name:string, private price: number) {
        if(id.length > 6) {
            throw new Error('Product id cannot be longer than 6 characters');
        }
        if(name.length > 30) {
            // FIXED: Matches the test exactly
            throw new Error('Product name cannot be longer than 30 characters');
        }
        if(price < 0)  {
            throw new Error('Product price cannot be negative');
        }
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    toString(): string {
        return `Product: ${this.id.padStart(6)} - ${this.name.padEnd(30)}  ${this.price.toFixed(2).padStart(8)} €`;
    }
}