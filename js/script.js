const user = {
    name: 'user1',
    weight: 100,
    height: 1.90


}

const imc = {
    calculateIMC(weight, height) {
        return weight / (height * height)
    }
}

console.log(imc.calculateIMC(user.weight, user.height));