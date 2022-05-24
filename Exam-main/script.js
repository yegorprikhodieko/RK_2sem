const sndBtn = document.getElementById('snd');
const diametr = document.getElementById('exampleInputEmail1');
const type_of_bike = document.getElementById('exampleInputRating');
const head_bool1 = document.getElementById('check1');
const head_bool2 = document.getElementById('check2');
const shop = document.getElementById('shop');
const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;

sndBtn.addEventListener('click', (e) => {
	e.preventDefault()

	const dataTrue = checked();
	// console.log(dataTrue)
	if (dataTrue) {
		data = {
			diametr_Wheels: diametr.value,
			type: type_of_bike.value,
            shopd: shop.value, 
		}
		
        if (head_bool1.checked) {
			data.Head = head_bool1.value
		} else {
			data.Head = head_bool2.value
		}

		console.log(data)
		
		const PushInfo =  request('/api/information', 'POST', data)
		console.log(PushInfo.body)
	}
});

async function request(url, method = 'GET', data = null) {
	try {
		const headers = {};
		let body;

		if (data) {
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(data);
		}
		console.log('req:', body);
		const response = await fetch(url, {
			method,
			headers,
			body
		})
		return await response;
	} catch (e) {
		console.warn(`Erorr: ${e.message}`);
	}
}
async function checked(){
    if (diametr.value=='')
    {
        diametr.reportValidity();
        diametr.setCustomValidity('Введите значение!');
        return false;
    }
    if(shop.value=='')
    {
        shop.reportValidity();
        shop.setCustomValidity('Введите значение!');   
        return false;
    }
    if (!cyrillicPattern.test(shop.value)) {
        shop.reportValidity();
        shop.setCustomValidity('Введите буквы!');      
        return false;
    }
    return true;
}