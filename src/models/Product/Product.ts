export interface Product {
    id: string,
    name: string,
    price: number,

    discountPercent?: number,
    getFinalPrice(): number,

    inStock: boolean,

    Builder(): ProductBuilder
}

export interface ProductBuilder {
    id(id :string): this,
    name(name :string): this,
    price(price: number): this,
    discountPercent(value: number): this,
    inStock(inStock: boolean): this,

    build(): Product
}

export class Product implements Product {
    
    id = "";
    name = "";
    price = NaN;

    // should be 10, 15, etc, not 0.10, 0.15, etc
    discountPercent?: number | undefined;
    inStock = true;
    
    // return final price with discount
    getFinalPrice(): number {
        return this.discountPercent
            // if has discount, return calculated value
            ? this.price * (100 - this.discountPercent) / 100
            // if not, return original price
            : this.price;
    }

    // --- Builder --- //
    static Builder(): ProductBuilder {
        return new class {
            private _product: Product;

            constructor(){
                this._product = new Product();
            }

            id(id: string): this{
                this._product.id = id;
                return this
            }

            name(name: string): this{
                this._product.name = name;
                return this;
            }

            price(price: number): this{
                this._product.price = price;
                return this;
            }

            discountPercent(value: number): this{
                this._product.discountPercent = value;
                return this;
            }

            inStock(inStock: boolean): this{
                this._product.inStock = inStock;
                return this;
            }

            build(): Product {
                return this._product;
            }
        }
    }
}