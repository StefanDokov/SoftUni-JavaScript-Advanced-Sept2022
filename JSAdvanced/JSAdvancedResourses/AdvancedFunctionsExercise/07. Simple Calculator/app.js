function calculator() {
    let slector1;
    let slector2;
    let resultSelector;
    
    return {
        
        init(num, mun, res){
            slector1 = document.querySelector(num);
            slector2 = document.querySelector(mun);
            resultSelector = document.querySelector(res);
            
            
        },
        add(){
            resultSelector.value = Number(slector1.value) + Number(slector2.value);
        },
        subtract(){
            resultSelector.value = Number(slector1.value) - Number(slector2.value);
        }

    }
    
    
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 






