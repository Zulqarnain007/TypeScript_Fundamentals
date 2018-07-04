var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("productCategory", [], function (exports_1, context_1) {
    "use strict";
    var ProductCategory, SodaCategory, NutsCategory, ChipsCategory, CandyCategory, CandyBarCategory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ProductCategory = /** @class */ (function () {
                function ProductCategory() {
                    this.imgPath = "img/";
                }
                return ProductCategory;
            }());
            exports_1("ProductCategory", ProductCategory);
            SodaCategory = /** @class */ (function (_super) {
                __extends(SodaCategory, _super);
                function SodaCategory() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Soda";
                    return _this;
                }
                SodaCategory.prototype.getImageUrl = function () {
                    return this.imgPath + "SodaCan.png";
                };
                return SodaCategory;
            }(ProductCategory));
            exports_1("SodaCategory", SodaCategory);
            NutsCategory = /** @class */ (function (_super) {
                __extends(NutsCategory, _super);
                function NutsCategory() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Nuts";
                    return _this;
                }
                NutsCategory.prototype.getImageUrl = function () {
                    return this.imgPath + "Nuts.png";
                };
                return NutsCategory;
            }(ProductCategory));
            exports_1("NutsCategory", NutsCategory);
            ChipsCategory = /** @class */ (function (_super) {
                __extends(ChipsCategory, _super);
                function ChipsCategory() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Potato chips";
                    return _this;
                }
                ChipsCategory.prototype.getImageUrl = function () {
                    return this.imgPath + "Chips.png";
                };
                return ChipsCategory;
            }(ProductCategory));
            exports_1("PotatoChipsCategory", ChipsCategory);
            CandyCategory = /** @class */ (function (_super) {
                __extends(CandyCategory, _super);
                function CandyCategory() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Candy";
                    return _this;
                }
                CandyCategory.prototype.getImageUrl = function () {
                    return this.imgPath + "Candy.png";
                };
                return CandyCategory;
            }(ProductCategory));
            exports_1("CandyCategory", CandyCategory);
            CandyBarCategory = /** @class */ (function (_super) {
                __extends(CandyBarCategory, _super);
                function CandyBarCategory() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Candy bar";
                    return _this;
                }
                CandyBarCategory.prototype.getImageUrl = function () {
                    return this.imgPath + "CandyBar.png";
                };
                return CandyBarCategory;
            }(ProductCategory));
            exports_1("CandyBarCategory", CandyBarCategory);
        }
    };
});
System.register("product", ["productCategory"], function (exports_2, context_2) {
    "use strict";
    var categories, Initial, CocaCola, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints, Gummies, Hersey, MilkyWay;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (categories_1) {
                categories = categories_1;
            }
        ],
        execute: function () {
            Initial = /** @class */ (function () {
                function Initial() {
                    this.name = "Please select a product";
                    this.price = 0;
                }
                return Initial;
            }());
            exports_2("Initial", Initial);
            CocaCola = /** @class */ (function () {
                function CocaCola() {
                    this.name = "Coca-Cola";
                    this.price = 2.30;
                    this.category = new categories.SodaCategory();
                }
                return CocaCola;
            }());
            exports_2("CocaCola", CocaCola);
            Fanta = /** @class */ (function () {
                function Fanta() {
                    this.name = "Fanta";
                    this.price = 2;
                    this.category = new categories.SodaCategory();
                }
                return Fanta;
            }());
            exports_2("Fanta", Fanta);
            Sprite = /** @class */ (function () {
                function Sprite() {
                    this.name = "Sprite";
                    this.price = 1.80;
                    this.category = new categories.SodaCategory();
                }
                return Sprite;
            }());
            exports_2("Sprite", Sprite);
            Peanuts = /** @class */ (function () {
                function Peanuts() {
                    this.name = "Peanuts";
                    this.price = 1.50;
                    this.category = new categories.NutsCategory();
                }
                return Peanuts;
            }());
            exports_2("Peanuts", Peanuts);
            Cashews = /** @class */ (function () {
                function Cashews() {
                    this.name = "Cashews";
                    this.price = 2.80;
                    this.category = new categories.NutsCategory();
                }
                return Cashews;
            }());
            exports_2("Cashews", Cashews);
            Plain = /** @class */ (function () {
                function Plain() {
                    this.name = "Plain";
                    this.price = 2;
                    this.category = new categories.PotatoChipsCategory();
                }
                return Plain;
            }());
            exports_2("Plain", Plain);
            Cheddar = /** @class */ (function () {
                function Cheddar() {
                    this.name = "Cheddar";
                    this.price = 2;
                    this.category = new categories.PotatoChipsCategory();
                }
                return Cheddar;
            }());
            exports_2("Cheddar", Cheddar);
            Mints = /** @class */ (function () {
                function Mints() {
                    this.name = "Mints";
                    this.price = 1.30;
                    this.category = new categories.CandyCategory();
                }
                return Mints;
            }());
            exports_2("Mints", Mints);
            Gummies = /** @class */ (function () {
                function Gummies() {
                    this.name = "Gummies";
                    this.price = 1.90;
                    this.category = new categories.CandyCategory();
                }
                return Gummies;
            }());
            exports_2("Gummies", Gummies);
            Hersey = /** @class */ (function () {
                function Hersey() {
                    this.name = "Hersey's";
                    this.price = 1.30;
                    this.category = new categories.CandyBarCategory();
                }
                return Hersey;
            }());
            exports_2("Hersey", Hersey);
            MilkyWay = /** @class */ (function () {
                function MilkyWay() {
                    this.name = "Milky Way";
                    this.price = 1.80;
                    this.category = new categories.CandyBarCategory();
                }
                return MilkyWay;
            }());
            exports_2("MilkyWay", MilkyWay);
        }
    };
});
System.register("productFactory", ["product"], function (exports_3, context_3) {
    "use strict";
    var products;
    var __moduleName = context_3 && context_3.id;
    function GetProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Fanta();
            case 2: return new products.Sprite();
            case 3: return new products.Peanuts();
            case 4: return new products.Cashews();
            case 5: return new products.Plain();
            case 6: return new products.Cheddar();
            case 7: return new products.Mints();
            case 8: return new products.Gummies();
            case 9: return new products.Hersey();
            case 10: return new products.MilkyWay();
        }
    }
    exports_3("default", GetProduct);
    return {
        setters: [
            function (products_1) {
                products = products_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("coin", [], function (exports_4, context_4) {
    "use strict";
    var Coin, Quarter, Dime, Half, Dollar;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            // namespace Coin { 
            // }
            Coin = /** @class */ (function () {
                function Coin(value) {
                    this.value = value;
                    this.value = value;
                }
                return Coin;
            }());
            exports_4("Coin", Coin);
            Quarter = /** @class */ (function (_super) {
                __extends(Quarter, _super);
                function Quarter() {
                    return _super.call(this, 0.25) || this;
                }
                Quarter.prototype.getImageUrl = function () {
                    return "img/Quarter.png";
                };
                ;
                return Quarter;
            }(Coin));
            exports_4("Quarter", Quarter);
            Dime = /** @class */ (function (_super) {
                __extends(Dime, _super);
                function Dime() {
                    return _super.call(this, 0.10) || this;
                }
                Dime.prototype.getImageUrl = function () {
                    return "img/Dime.png";
                };
                ;
                return Dime;
            }(Coin));
            exports_4("Dime", Dime);
            Half = /** @class */ (function (_super) {
                __extends(Half, _super);
                function Half() {
                    return _super.call(this, 0.5) || this;
                }
                Half.prototype.getImageUrl = function () {
                    return "img/Half.png";
                };
                ;
                return Half;
            }(Coin));
            exports_4("Half", Half);
            Dollar = /** @class */ (function (_super) {
                __extends(Dollar, _super);
                function Dollar() {
                    return _super.call(this, 1) || this;
                }
                Dollar.prototype.getImageUrl = function () {
                    return "img/Dollar.jpg";
                };
                ;
                return Dollar;
            }(Coin));
            exports_4("Dollar", Dollar);
        }
    };
});
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />
System.register("vendingMachine", ["coin", "product", "productFactory"], function (exports_5, context_5) {
    "use strict";
    var Coins, product_1, productFactory_1, vendingMachineSize, Cell, vendingMachine;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (Coins_1) {
                Coins = Coins_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (productFactory_1_1) {
                productFactory_1 = productFactory_1_1;
            }
        ],
        execute: function () {
            /// <reference path="product.ts" />
            /// <reference path="productFactory.ts" />
            (function (vendingMachineSize) {
                vendingMachineSize[vendingMachineSize["small"] = 6] = "small";
                vendingMachineSize[vendingMachineSize["medium"] = 9] = "medium";
                vendingMachineSize[vendingMachineSize["large"] = 12] = "large";
            })(vendingMachineSize || (vendingMachineSize = {}));
            Cell = /** @class */ (function () {
                function Cell(product) {
                    this.product = product;
                    this.stock = ko.observable(3);
                    this.sold = ko.observable(false);
                }
                return Cell;
            }());
            vendingMachine = /** @class */ (function () {
                function vendingMachine() {
                    var _this = this;
                    this.paid = ko.observable(0);
                    this.selectedCell = ko.observable(new Cell(new product_1.Initial()));
                    this.cells = ko.observableArray([]);
                    this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(),
                        new Coins.Half(), new Coins.Dollar()];
                    this.canPay = ko.pureComputed(function () { return _this.paid() -
                        _this.selectedCell().product.price >= 0; });
                    this.select = function (cell) {
                        cell.sold(false);
                        _this.selectedCell(cell);
                    };
                    this.acceptCoin = function (coin) {
                        var oldTotal = _this.paid();
                        _this.paid(oldTotal + coin.value);
                    };
                    this.pay = function () {
                        if (_this.selectedCell().stock() < 1) {
                            alert("I am Sorry, we are out of them !");
                            return;
                        }
                        var currentPayed = _this.paid();
                        _this.paid(Math.round(((currentPayed -
                            _this.selectedCell().product.price) * 100)) / 100);
                        var currentStock = _this.selectedCell().stock();
                        _this.selectedCell().stock(currentStock - 1);
                        _this.selectedCell().sold(true);
                    };
                }
                Object.defineProperty(vendingMachine.prototype, "size", {
                    set: function (givenSize) {
                        this.cells([]);
                        for (var index = 0; index < givenSize; index++) {
                            var product = productFactory_1.default();
                            this.cells.push(new Cell(product));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return vendingMachine;
            }());
        }
    };
});
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
machine.size = vendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map