/**
 * Unit test for class Product
 */

import { Product } from "./product.js";

describe('Test of class Product', () => {

    describe('constructor', () => {
        test('it fails when product code is longer than 6 chars', () => {
            // Arrange
            const expectedError = new Error('Product id cannot be longer than 6 characters');
            // Act + Assert
            expect(() => new Product('Code longer than 6 char', 'Product name', 22)).toThrow(expectedError);
        });

        test('it fails when product name is longer than 30 chars', () => {
            // Arrange
            const longName = "This is a very long name that exceeds thirty characters";
            // FIXED: Matches the class exactly
            const expectedError = new Error('Product name cannot be longer than 30 characters');
            
            // Act + Assert
            expect(() => new Product('P01', longName, 10)).toThrow(expectedError);
        });

        test('it fails when product price is negative', () => {
            // Arrange
            const expectedError = new Error('Product price cannot be negative');
            
            // Act + Assert
            expect(() => new Product('P01', 'Valid Name', -5.00)).toThrow(expectedError);
        });

        test('it istantiates the product successfully', () => {
            // Act
            const result = new Product('code', 'Product name', 22);
            // Assert
            expect(result).toBeInstanceOf(Product);
        });

    });

    describe('method getId', () => {
        test('It returns the product id succesfully', () => {
            // Arrange
            const myProduct = new Product('myId', 'Product name', 22);
            // Act
            const result = myProduct.getId();
            // Assert
            expect(result).toEqual('myId');
        });
    });
});