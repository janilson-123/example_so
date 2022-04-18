import { MyEnum } from '@test/shared/src/my-enum'

function test(x: number){
	return x == MyEnum.B
}

setTimeout(test, 1000, 1)
setTimeout(test, 2000, 2)
setTimeout(test, 3000, 3)