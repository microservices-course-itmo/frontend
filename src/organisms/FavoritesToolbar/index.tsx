import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import FavoritesFilterButton from '../../molecules/FilterButton/Favorites'
import { FiltersProvider } from '../FiltersBar/FiltersContext'
import ConfirmPopUp from '../../molecules/ConfirmPopUp'

interface FavoritesToolbarProps {
  handleClear?: () => void
}

export default function FavoritesToolbar({
  handleClear = () => {},
}: FavoritesToolbarProps) {
  const [isModalVisible, setModalVisible] = React.useState(false)

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  const onClear = () => {
    closeModal()
    handleClear()
  }

  return (
    <Container>
      <FiltersProvider>
        <FavoritesFilterButton />
      </FiltersProvider>
      <TouchableOpacity onPress={openModal}>
        <ClearText>Очистить избранное</ClearText>
      </TouchableOpacity>
      <ConfirmPopUp
        visible={isModalVisible}
        onConfirm={onClear}
        onDismiss={closeModal}
      />
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`

const ClearText = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline;
`
