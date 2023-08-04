// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #161617;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const LockImage = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 20px;
`
export const LockDescription = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: white;
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 25px;
`

export const LockButton = styled.button`
  padding: 8px;
  background-color: #06b6d4;
  color: white;
  height: 35px;
  width: 110px;
  margin-top: 40px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`
