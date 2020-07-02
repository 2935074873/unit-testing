function sum() {
    let $ = (name)=>{
        return document.getElementById(name)
    }

    let a = $('add1').value,b = $('add2').value,res = $('result');
    res.value = add(a,b)
}