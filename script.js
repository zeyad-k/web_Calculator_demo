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