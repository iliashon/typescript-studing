interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}
const formData: IFormData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

const email = document.querySelector('#email') as HTMLInputElement;
const text = document.querySelector('#text') as HTMLTextAreaElement;
const title = document.querySelector('#title') as HTMLInputElement;
const checked = document.querySelector('#checkbox') as HTMLInputElement;
const submit = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

submit.forEach(elem => {
	elem.addEventListener('click', (elem) => {
		elem.preventDefault();
		addFormData(email.value, text.value, title.value, checked.checked);
	})
})


function addFormData(email: string, text: string, title: string, checked: boolean) {
	formData.email = email;
	formData.text = text;
	formData.checkbox = checked;
	formData.title = title;
	validateFormData(formData);
}

function validateFormData(data: IFormData) {
	if (formData.title !== ''
		&& formData.text !== ''
		&& formData.checkbox
		&& formData.email !== '') {
		checkFormData(formData);
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: IFormData) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	if (emails.indexOf(email) >= 0) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}
