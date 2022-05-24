const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement // TypeCasting
const secondInput = document.querySelector('#second-input') as HTMLInputElement

// Adding the export keyword because we need to change the content of "screen" in the function below
export const screen = document.querySelector('.screen')

function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString()
}

button.addEventListener('click', () => 
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
)