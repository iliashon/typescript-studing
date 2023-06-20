var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
var email = document.querySelector('#email');
var text = document.querySelector('#text');
var title = document.querySelector('#title');
var checked = document.querySelector('#checkbox');
var submit = document.querySelectorAll('.btn');
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
submit.forEach(function (elem) {
    elem.addEventListener('click', function (elem) {
        elem.preventDefault();
        addFormData(email.value, text.value, title.value, checked.checked);
    });
});
function addFormData(email, text, title, checked) {
    formData.email = email;
    formData.text = text;
    formData.checkbox = checked;
    formData.title = title;
    validateFormData(formData);
}
function validateFormData(data) {
    if (formData.title !== ''
        && formData.text !== ''
        && formData.checkbox
        && formData.email !== '') {
        checkFormData(formData);
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.indexOf(email) >= 0) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
