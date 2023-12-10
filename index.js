const expandBtn = document.getElementById("expand-btn")
const resultEl = document.getElementById("result-el")
 
expandBtn.addEventListener("click", function(){
	let $c = parseInt(document.getElementById("c").value)
	let $k = parseInt(document.getElementById("k").value)
	let $n = parseInt(document.getElementById("n").value)

	resultEl.innerHTML = expandBinomial($c, $k, $n)
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

function expandBinomial(c, k, n) {
	let result = ""
	result += `${c ** n}x<sup>${n}</sup> + `
	for (let i = 1; i < n; i++) {
		if (n - i === 1) {
			result += `${combination(n, i) * (c ** (n - i)) * (k ** i)}x + `
		} else {
			result += `${combination(n, i) * (c ** (n - i)) * (k ** i)}x<sup>${n - i}</sup> + `
		}
	}
	result += `${k ** n}`

	return result
}

// console.log("The Holy Spirit is with you. Have fun coding! ☺")
