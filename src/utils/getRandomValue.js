export function getRandom() {
    const base = 99;
    const randomFactor = Math.random() * 20;

    let num = Math.floor(base * randomFactor);
    return num;
}