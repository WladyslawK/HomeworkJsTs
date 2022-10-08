// 1. Функция sum принимает
//...здесь пишем код.
// В return стоит "заглушка", чтоб typescript не ругался параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    return [...nums].reduce((prev, curr) => prev + curr)
}

sum(3, 5, 7, 6, 4, 9)


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    if (!((a + b > c) && (a + c > b) && (b + c > a))) return "00"
    else if (a === b && b === c && a === c) return "10"
    else if (a === b || b === c || a === c) return "01"
    else return "11"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let result = 0
    let arrayNums = number.toString().split("").map(item => result = Number(item) + result)
    return result
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sumEven = 0
    let sumOdd = 0

    arr.map((item, index) => index % 2 === 0 ? sumEven = sumEven + item : sumOdd = sumOdd + item)

    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) {
            newArr.push(Math.pow(array[i], 2))
        }
    }
    return newArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export const sumFirstNumbers = (N: number): number => {
    console.log(N)
    if (N < 0) return 0
    else if (N === 1) return 1
    else return N + sumFirstNumbers(N - 1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): number[] {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let sum = 0
    let index = 0
    const banknoteList:Array<number> = []
    while (sum < amountOfMoney) {
        if (amountOfMoney - (sum + banknotes[index]) >= 0) {
            banknoteList.push(banknotes[index])
            sum += banknotes[index]
        }else index ++
    }

    return banknoteList
}
