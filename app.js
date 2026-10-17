const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    resultList.innerHTML = '';

    for (let i = 1; i < 10; i++) {
        
        const newLi = document.createElement('li');
        newLi.innerText = `${i}. I am awesome!`;
        resultList.appendChild(newLi);
    
    }
});