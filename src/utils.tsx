const CEILING = .45

export function getCycleHeight(date: Date, sunrise: number, sunset: number): number {
    const seconds = date.getTime() / 1_000
    // const seconds = sunrise
    const timeSinceSunrise = seconds - sunrise
    const lengthOfDay = sunset - sunrise
    const x = timeSinceSunrise / lengthOfDay
    if (x === Infinity) {
        return 0
    }
    const y =  CEILING * Math.sin(x * Math.PI)
    return y
}

export function getSunYPos(date: Date, sunrise: number, sunset: number): string {
    const y = -1 * getCycleHeight(date, sunrise, sunset)
    return y * 100 + "vh"
}

export function getMoonYPos(date: Date, sunrise: number, sunset: number): string {
    const y = getCycleHeight(date, sunrise, sunset)
    return y * 100 + "vh"
}

export function getCycleOpacity(date: Date, sunrise: number, sunset: number, invert: boolean): number {
    let y = getCycleHeight(date, sunrise, sunset)
    y = invert ? y * -1 : y
    if (y < 0) {
        return 0;
    }
    return 1 - (y * (.9 / CEILING))
}

export function isDaylight(date: Date, sunrise: number, sunset: number): boolean {
    const y = getCycleHeight(date, sunrise, sunset)
    return y > 0
}