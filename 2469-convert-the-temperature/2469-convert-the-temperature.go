func convertTemperature(celsius float64) []float64 {
    kelvin :=  celsius + 273.15
    fahrenheit   := celsius * 9/5 + 32
    return []float64{kelvin, fahrenheit}
}