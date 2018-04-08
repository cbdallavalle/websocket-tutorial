let nickname = '';

$('input').on('change', (e) => {
  nickname = e.target.value;
})

const socket = io();

socket.on('connect', () => {
  console.log('You have connected');
  socket.send({
    username: 'Nancy Drew',
    text: 'Check out my detective blog.'
  })
})

socket.on('message', message => {
  document.querySelector('.messages').innerText = `'Something came along on the "message" channel', ${message}`;
  // console.log('Something came along on the "message" channel', message)
})

$(window).on('keyup', () => {
  socket.emit('mission', `${nickname} is typing.`)
})