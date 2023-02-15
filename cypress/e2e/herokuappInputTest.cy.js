import Input from "../support/pages/herokuapp/herokuappInput";
const input = new Input()

describe('Fill Input number',()=>{
    beforeEach(()=>{
        input.visitPageInput()

    })

    it('increase number',()=>{
        input.increaseNumber('2')
        
    })

    it('decrease number',()=>{
        input.decreaseNumber('5')
        
    })
})
