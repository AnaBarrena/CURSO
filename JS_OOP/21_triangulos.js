/** Function Objeto
 * @description crear función triangulo con sus tres propiedad y tres métodos
 * @param Lado 1, Lado 2, Lado 3
 * @returns
 */




 function triangulo (l1, l2, l3) {
    this.l1 = l1
    this.l2 = l2
    this.l3 = l3
 }

 Triangulo.prototype.getLados = function () {
    return this
 }

 Triangulo.prototype.getPerimetro = function () {
    return this._l1 + this._12 + this._13
 }

 const t = new Triangulo(5,8,5)
 console.log(t._l1 + t._12 + t._13)