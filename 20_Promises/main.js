const inputValue = document.querySelector('.id__post')
const button = document.querySelector('.button')
const errorId = document.querySelector('.error__id')
const commentBlock = document.querySelector('.comment__block')

function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.value}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.post').classList.add('active')
            document.querySelector('.title span').innerHTML = `TITLE: ${data.title}`
            document.querySelector('.body span').innerHTML = `POST: ${data.body}`
            while (commentBlock.firstChild) {
                commentBlock.removeChild(commentBlock.firstChild);
            }

            return data;
            })
        .then(postId => fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}/comments`))
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                commentBlock.insertAdjacentHTML('beforeend', `
                     <div class="email">${item.email}</div>
                     <span class="comment">${item.body}</span>`)
            })
        })
        .catch(error => console.log(error))
}

inputValue.addEventListener('input', function () {
    (this.value < 1 || this.value > 100) ? errorId.innerHTML = 'Введите значение ID от 1 до 100' : errorId.innerHTML = ''
})

button.addEventListener('click', getPost)
