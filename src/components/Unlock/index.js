// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  LockContainer,
  LockImage,
  LockDescription,
  LockButton,
  ButtonContainer,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onChangeLock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <AppContainer>
      <LockContainer>
        {isLock ? (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="Unlock"
          />
        )}
        <LockDescription>
          Your Device is {isLock ? `Locked` : `Unlocked`}.
        </LockDescription>
        <ButtonContainer>
          <LockButton onClick={onChangeLock}>
            {isLock ? `Unlock` : 'Lock'}
          </LockButton>
        </ButtonContainer>
      </LockContainer>
    </AppContainer>
  )
}

export default Unlock
