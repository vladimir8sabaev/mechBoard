function findOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		const count = arr.filter((value) => value === arr[i]).length;
		if (count % 2 == 1) {
			console.log(arr[i]);
			return arr[i];
		}
	}
}
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
