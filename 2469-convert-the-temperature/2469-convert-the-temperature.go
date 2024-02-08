func convertTemperature(celsius float64) []float64 {
    Celsius :=  celsius + 273.15
    return []float64{Celsius, celsius * 9/5 + 32}
}