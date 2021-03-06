import React, { ReactElement } from 'react'
import {
  Text,
  View,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from '../Auth/styles'

export enum CityID {
  Moscow = 1,
  SaintP = 2,
}

const city2Label = {
  [CityID.Moscow]: 'Москва',
  [CityID.SaintP]: 'Санкт-Петербург',
}

interface PickerProps {
  defaultValue?: CityID
  label: string
  onChange: React.Dispatch<React.SetStateAction<CityID>>
  hasFilled: boolean
  onFill: React.Dispatch<React.SetStateAction<boolean>>
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  showArrow: boolean
}

function CityChooser({
  defaultValue = CityID.Moscow,
  label,
  onChange,
  hasFilled,
  onFill,
  labelStyle = {},
  style,
  showArrow,
}: PickerProps): ReactElement<PickerProps> {
  const handleChange = (selectedValue: CityID) => {
    onChange(selectedValue)
    onFill(true)
  }

  const dropDownPickerChange = (item: any) => handleChange(item.value)

  return (
    <View
      style={[
        styles.container,
        Platform.OS !== 'android' && {
          zIndex: 10,
        },
        style,
      ]}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <DropDownPicker
        items={[
          {
            label: city2Label[CityID.Moscow],
            value: CityID.Moscow,
          },
          {
            label: city2Label[CityID.SaintP],
            value: CityID.SaintP,
          },
        ]}
        showArrow={showArrow}
        defaultValue={defaultValue}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdownStyle}
        labelStyle={styles.textAreaStyle}
        selectedLabelStyle={
          hasFilled ? { color: '#000000' } : { color: '#A3A3A3' }
        }
        dropDownStyle={styles.dropdownItems}
        onChangeItem={dropDownPickerChange}
      />
    </View>
  )
}

export default CityChooser
