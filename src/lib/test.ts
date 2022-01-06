export function getSomething(): number | undefined {
	let a: number|undefined = 0
	return a;
}
export function getDimMatrix(vec: number[]): number | undefined {
	let sqrtDimVec = Math.sqrt(vec.length);
	if (!Number.isInteger(sqrtDimVec)) {
		// return Math.round(sqrtDimVec);
		return undefined;
	}
	return sqrtDimVec;
}
let a :string|number= getDimMatrix([1,2,3])
console.log(a)

