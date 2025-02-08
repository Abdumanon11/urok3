
const student1 = document.querySelector('.student1');


function people(peopleArray) {

    for (let item of peopleArray) {
        const student = document.createElement('div')
        const name = document.createElement('h4')
        const age = document.createElement('h5')
        const buttons = document.createElement('div')
        const izmenit = document.createElement('button')
        const delet = document.createElement('button')
        const divv = document.createElement('div')


student.classList.add('student')
buttons.classList.add('buttons')
divv.classList.add('divv')

name.innerHTML= item.name
age.innerHTML = item.age

izmenit.src = 'https://cdn-icons-png.flaticon.com/512/8054/8054391.png'
delet.src = 'https://cdn-icons-png.flaticon.com/512/8054/8054391.png'
divv.innerHTML = ''


student.append(name, age , buttons , divv)
buttons.append(izmenit, delet)


    }

}
people(peopleArray)


function addPerson() {
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const name = nameInput.value.trim(); 
    const age = ageInput.value.trim(); 

    if (name && age) {
        const person = {
            name: name,
            age: age
        };
        peopleArray.push(person); 
        console.log(peopleArray); 
        nameInput.value = ''; 
        ageInput.value = ''; 
    } else {
        alert('Пожалуйста, введите имя и возраст.'); 
    }
}


document.getElementById('addButton').addEventListener('click', addPerson);

addPerson(peopleArray)

















