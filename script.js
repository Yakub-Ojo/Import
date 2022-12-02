const correctOptions = ['A','A','C','B','D','C','A','B','B','D'];
const form = document.querySelector('.Quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userOptions = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value, form.Q6.value, form.Q7.value, form.Q8.value, form.Q9.value, form.Q10.value]
    
    userOptions.forEach((option, index) => {
        if (option === correctOptions[index]){
            score += 10;
        }
    })

    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0;
    let timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        
        if(output === score){
            clearInterval(timer)
        }else{
            output++;
        }
    }, 40);
    
});


