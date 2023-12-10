// // function expandBinomial(base, exponent) {
// // 	let result = ""
// // 	for (let i = 0; i <= exponent; i++) {
// // 		let coefficient = binomialCoefficient(exponent, i)
// // 		let term = ""

// // 		if (coefficient !== 1) {
// // 			term += coefficient
// // 		}

// // 		if (exponent - i > 0) {
// // 			term += `${base}`
// // 			if (exponent - i > 1) {
// // 				term += `^${exponent - i}`
// // 			}
// // 		}

// // 		if (i > 0) {
// // 			term += `*${base}^${i}`
// // 		}

// // 		result += term + "+"
// // 	}

// // 	return result.slice(0, -3)
// // }

// // function binomialCoefficient(n, k) {
// // 	if (k === 0 || k === n){
// // 		return 1
// // 	} else {
// // 		return binomialCoefficient (n-1, k-1) + binomialCoefficient(n - 1, k)
// // 	}
// // }

// // console.log( expandBinomial('(x+2)', 6 ) )

// function expandBinomial(base, exponent) {
// 	const result = [];
	
// 	for (let i = 0; i <= exponent; i++) {
// 	  result.push(binomialCoefficient(exponent, i) * Math.pow(base, exponent - i) * Math.pow(1, i));
// 	}
  
// 	return result;
//   }
  
//   function binomialCoefficient(n, k) {
// 	let result = 1;
	
// 	for (let i = 1; i <= k; i++) {
// 	  result *= (n - i + 1) / i;
// 	}
  
// 	return result;
//   }
  
//   // Example usage:
//   console.log(expandBinomial("x", 6)); // Expand (1 + 2)^6

const expandBtn = document.getElementById("expand-btn")
const resultEl = document.getElementById("result-el")
 
expandBtn.addEventListener("click", function(){
	let $k = parseInt(document.getElementById("k").value)
	let $n = parseInt(document.getElementById("n").value)

	resultEl.innerHTML = expandBinomial($k, $n)
})

function factorial(num) {
	let fac = 1
	for (let i = 1; i <= num; i++) {
		fac *= i
	} return fac
}

function combination(p, r) {
	return ( factorial(p) / (factorial(p - r) * factorial(r)) )
}

function expandBinomial(k, n) {
	let result = ""
	// `x<sup>${n}</sup> + ${combination(n, 1)}x<sup>${n-1}</sup> + ${k ** n}`
	// return result
	result += `x<sup>${n}</sup> + `
	for (let i = 1; i < n; i++) {
		result += `${combination(n, i) * (k ** i)}x<sup>${n - i}</sup> + `
	}
	result += `${k ** n}`

	return result
} 

// console.log( factorial(6) )

// console.log( combination(6, 7) )

console.log( expandBinomial(1, 3) )

console.log("The Holy Spirit is with me. Have fun coding! ☺")
