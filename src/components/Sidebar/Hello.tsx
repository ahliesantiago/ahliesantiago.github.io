import { useEffect, useRef, useState } from 'react'

const Hello = () => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [caretVisible, setCaretVisible] = useState(true)
  const [preBlinkCount, setPreBlinkCount] = useState(0)
  const [postBlinkCount, setPostBlinkCount] = useState(0)
  const message = 'My Arsenal >>>'
  const maxBlinks = 4 * 2
  const typingSpeed = 150
  const caretBlinkSpeed = 500
  const textIndex = useRef(0)

  useEffect(() => {
    let typingInterval: NodeJS.Timeout
    let caretBlinkInterval: NodeJS.Timeout

    // Caret blinking before typing (at load or after reset)
    if (!isTyping && text === '') {
      caretBlinkInterval = setInterval(() => {
        setCaretVisible((prev) => !prev)
        
        if (preBlinkCount < (maxBlinks - 4)) {
          setPreBlinkCount((prev) => prev + 1)
        } else if (preBlinkCount === (maxBlinks - 4)) {
          clearInterval(caretBlinkInterval)
          setPreBlinkCount(0)
          setIsTyping(true)
        }
      }, caretBlinkSpeed)
    }

    // Typing
    if (isTyping) {
      typingInterval = setInterval(() => {
        if (textIndex.current < message.length) {
          setText((prevText) => prevText + message[textIndex.current])
          setCaretVisible((prev) => !prev)
          setTimeout(() => textIndex.current ++, 10)
        } else {
          clearInterval(typingInterval)
        }
      }, typingSpeed)
    }

    // Caret blinking after typing
    if (text === message) {
      caretBlinkInterval = setInterval(() => {
        setCaretVisible((prev) => !prev)
        
        if (postBlinkCount < maxBlinks) {
          setPostBlinkCount((prev) => prev + 1)
        } else if (postBlinkCount === maxBlinks) {
          clearInterval(caretBlinkInterval)
          setCaretVisible((prev) => !prev)
          setText('')
          setPostBlinkCount(0)
          textIndex.current = 0
          setIsTyping(false)
        }
      }, caretBlinkSpeed)
    }

    return () => {
      clearInterval(typingInterval)
      clearInterval(caretBlinkInterval)
    }
  }, [preBlinkCount, postBlinkCount, text, maxBlinks, isTyping])

  return (
    <div className='text-2xl lg:text-sm xl:text-2xl font-[family-name:var(--font-geist-mono)] min-h-10'>
      {text}
      {caretVisible && <span className='text-2xl lg:text-sm xl:text-2xl'>|</span>}
    </div>
  )
}

export default Hello