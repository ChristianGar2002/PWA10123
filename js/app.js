if('serviceWorker' in navigator){//Verficia si el navegador web tiene soporte 
	window.addEventListener('load', ()=> {
		navigator.serviceWorker.register('../sw.js').then(() =>{
			console.log('Soy el service worker registrado y funcionando')
		})
	})
}