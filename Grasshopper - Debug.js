function weatherInfo (temp) {
    const c = convert(temp)
    if (c <= 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convert(temp) {
    const celsius = (temp - 32) * (5/9)
    return celsius
}