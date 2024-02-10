// alert('بسم الله')

//  Light - Dark Theme 

const toggleElement = document.querySelector('.themes__toggle');

const switchTheme = () => toggleElement.classList.toggle("themes__toggle--isActive"); 
const switchThemeWithEnter = (event) => (event.key === 'Enter') && switchTheme();

// const switchTheme = ()=>{
// 	toggleElement.classList.toggle("themes__toggle--isActive"); 
// }

// const switchThemeWithEnter = (event)=>{
// 	event.key === 'Enter' && switchTheme();
// }

toggleElement.addEventListener('keydown',switchThemeWithEnter )  
toggleElement.addEventListener('click',switchTheme ) 

// End Light - Dark Theme 

// Logic of Addig numbers to screen
let storedNumber = "";
let currentNumber = "";
let operation= "";

const resultElement = document.querySelector('.calc__result');
const keyElements = document.querySelectorAll('[data-type]');

const updateScreen = (value)=>{
	resultElement.innerText = !value ? "0" : value;
}
const numberButtonHandler= (value)=>{
 	if(value==='.' && currentNumber.includes('.')) return ;
	if(value==='0' && !currentNumber) return ;

	currentNumber += value ;
	updateScreen(currentNumber) ;
}
const keyElementHandler =(element)=>{
	element.addEventListener('click', ()=>{
		if (element.dataset.type === "number") numberButtonHandler(element.dataset.value) ;
	})
}

keyElements.forEach(keyElementHandler)




