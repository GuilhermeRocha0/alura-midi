function playAudio(audioSelector) {
  const element = document.querySelector(audioSelector)

  if (!element || element.tagName != 'AUDIO') return

  element.play()
}

const keys = document.querySelectorAll('.key')

for (let i = 0; i < keys.length; i++) {
  const key = keys[i]
  const keySound = key.classList[1]
  const audioId = `#audio_${keySound}`

  key.addEventListener('click', () => {
    playAudio(audioId)
  })

  key.addEventListener('keydown', e => {
    if (e.code === 'Enter' || e.code === 'Space') key.classList.add('active')
  })

  key.addEventListener('keyup', () => {
    key.classList.remove('active')
  })
}
