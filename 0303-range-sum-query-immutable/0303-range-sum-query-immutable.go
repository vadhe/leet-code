type NumArray struct {
    Nums [] int
}


func Constructor(nums []int) NumArray {
	res := NumArray{
		Nums: []int{},
	}
	var a []int = []int{0}

	for _, value := range nums {

		a = append(a, a[len(a)-1]+value)
		// fmt.Println(index-1, value)
		// a = append(a, a[index-1]+value)

	}
	fmt.Println(a)
	for _, value := range a {
		res.Nums = append(res.Nums, value)
	}

	return res
}


func (this *NumArray) SumRange(left int, right int) int {
    return this.Nums[right + 1] - this.Nums[left]
}


/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(left,right);
 */