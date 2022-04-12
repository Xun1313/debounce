const btn = document.body.querySelector('button')
let time = ''

btn.addEventListener('click', () => {
  clearTimeout(time)

  time = setTimeout(() => console.log('按到了'), 1000);
})