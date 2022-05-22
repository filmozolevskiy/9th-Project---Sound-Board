const sounds = ['flush', 'guitar', 'barking', 'clapping']

sounds.forEach(sound => {
  const btn = document.createElement('button') // create buttons
  btn.classList.add('btn') // add class btn

  btn.innerText = sound // sets the innerText to the value in the array

  btn.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons')
  .appendChild(btn) // adds elements to a parent node

})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}
