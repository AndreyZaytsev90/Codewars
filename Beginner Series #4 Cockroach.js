function cockroachSpeed(s) {
    if (s >= 0) {
        let speed = (s*100000)/3600
        return  Math.trunc(speed)
    }
}