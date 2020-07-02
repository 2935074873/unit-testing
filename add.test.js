
describe('加法函数的单元测试',function(){ //测试套件
    it('0 + 0 = 0',function() {    //测试用例
        expect(add(0,0,)).to.be.equal(0)
    })

    it('1 + 4 = 5',function() {
        expect(add(1,4,)).to.be.equal(5)
    })

    it('a+b=NaN',function(){
        expect(add('a','b')).to.be.NaN
    })
})