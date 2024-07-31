const weatherIcon = (conditionId) => {
  switch (conditionId) {
    case 200 < conditionId < 232:
        return "thunderstorm"
    case 300 < conditionId < 321:
        return "rain"
    case 500 < conditionId < 531:
        return "rain"
    case 600 < conditionId < 622:
        return "Snow"
    case 701 < conditionId < 781:
        return "mist"
    case 800:
        return "clear"
    case 801 < conditionId < 804:
        return "cloud"
    default:
        return "cloud"
  }
}

export { weatherIcon }