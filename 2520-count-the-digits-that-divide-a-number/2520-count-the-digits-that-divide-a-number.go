func countDigits(num int) int {
   str := strconv.Itoa(num)
    sliceOfNum := []int{}
    var result int
	for _, value := range str {
		num, _ := strconv.Atoi(string(value))
		sliceOfNum = append(sliceOfNum, num)
	}
    for _, val := range sliceOfNum {
		if num%val == 0 {
			result++
		}

	}
    return result
}