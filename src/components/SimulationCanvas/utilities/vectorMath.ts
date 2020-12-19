export type Vector = [number, number]

export const vectorAdd = (a: Vector, b: Vector): Vector => [a[0] + b[0], a[1] + b[1]]
export const vectorSubstract = (a: Vector, b: Vector): Vector => [a[0] - b[0], a[1] - b[1]]
export const vectorMultiply = (a: Vector, x: Vector | number): Vector =>
  typeof x === "number" ? [a[0] * x, a[1] * x] : [a[0] * x[0], a[1] * x[1]]

export default {
  vectorAdd,
  vectorSubstract,
  vectorMultiply,
}
