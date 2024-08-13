import { expect, it } from 'vitest'

const stock = {
  type: 'apples',
  count: 13
}

it('stock has 13 apples', () => {
  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
  expect.soft(12).not.toBe(11)
  expect(11).toBe(11)
})

it('my test', () => {
  expect((() => {})()).toBeUndefined()
})

class Student {
  name:string
  constructor (name: string) {
    this.name = name
  }
}

const student1 = new Student('Peter')

it('stocks are instance of Stocks', () => {
  expect(student1).toBeInstanceOf(Student)
})
