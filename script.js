const correctOptions = ['A','A','C','B','D','C','A','B','B','D'];
const form = document.querySelector('.Quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userOptions = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value, form.Q6.value, form.Q7.value, form.Q8.value, form.Q9.value, form.Q10.value]
    
    userOptions.forEach((option, index) => {
        if (option === correctOptions[index]){
            score += 10;
        }
    })
    //console.log(form.Q1.value)
    console.log(score);
});

console.log(form.Q2.value);