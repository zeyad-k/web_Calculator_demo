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
const resetButtonHandler = ()=>{
	 storedNumber = "";
	  currentNumber = "";
 operation= "";
updateScreen(currentNumber) ;

}
const deleteButtonHandler = ()=>{
if (!currentNumber || currentNumber==="0")  return ;

if (currentNumber.length === 1) {
	currentNumber = "";
	updateScreen(currentNumber) ;
}else{
currentNumber = currentNumber.substring(0,currentNumber.length - 1);
updateScreen(currentNumber);
}
 
}
const executeOperation = ()=>{
	if (currentNumber && storedNumber && operation) {
		switch (operation) {
			case "+":
				storedNumber = parseFloat(storedNumber )+parseFloat( currentNumber)
				break;
			case "-":
				storedNumber = parseFloat(storedNumber )- parseFloat(currentNumber)
 				break;
			case "*":
				storedNumber = parseFloat(storedNumber )* parseFloat(currentNumber)
 				break;
			case "/":
				storedNumber = parseFloat(storedNumber )/ parseFloat(currentNumber)
				break;
		
			default:
				break;
		}
		currentNumber="";
		updateScreen(storedNumber);

	}
 }
const operationButtonHandler = (operationValue)=>{
if (!storedNumber && !currentNumber) return;

if (!storedNumber && currentNumber) {
	storedNumber = currentNumber;
	currentNumber = "";
	operation = operationValue;
}else if (storedNumber){
	operation = operationValue;

	if(currentNumber) executeOperation();
}
// console.log({storedNumber});
// console.log({currentNumber});
// console.log({operation});
 	}

const keyElementHandler =(element)=>{
	element.addEventListener('click', ()=>{
		 const type= element.dataset.type;

		if (type === "number") {
			numberButtonHandler(element.dataset.value) ;
		} else if(type === "operation"){
			switch (element.dataset.value) {
				case 'c':
					resetButtonHandler();
					break;
				case 'Backspace':
					deleteButtonHandler();
 					break;
				case 'Enter':
					executeOperation();
  					break;
			
				default:
					operationButtonHandler(element.dataset.value)
 			}

		}
	})
}

keyElements.forEach(keyElementHandler)




// To make it more Accessible :  use keyboard as input source
const availableNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","."];
const availableOperations = ["+","-","*","/"];
const availableKeys = [...availableNumbers, ...availableOperations, "Backspace", "Enter", "c"]
console.log(availableKeys)
window.addEventListener("keydown", (event)=>{
// keyboardWithoutHover(event.key)
keyboardWithHover(event.key)
});

keyboardWithoutHover = (key)=>{
	if (availableNumbers.includes(key)) {
		numberButtonHandler(key);
			 }else if(availableOperations.includes(key)){
		operationButtonHandler(key);
			}else if(key === 'Backspace'){
		deleteButtonHandler()
			}else if(key==='Enter'){
				executeOperation();
			}else if(key==='c')	{
				resetButtonHandler()
			}
}
keyboardWithHover = (key)=>{ 
	if (availableKeys.includes(key)) {
		const element = document.querySelector(`[data-value="${key}"]`);

		element.classList.add('hover');
		element.click();
		setTimeout(()=>element.classList.remove('hover'),200);


	}
 }