import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Chip } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import Text from './base/Text'

const styles = StyleSheet.create({
  chip: {
    borderRadius: 32,
    alignSelf: 'center',
  },
})

type NewChipProps = {
  style?: StyleProp<ViewStyle>
}

const NewChip = ({ style }: NewChipProps): ReactElement => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Chip style={[styles.chip, { backgroundColor: theme.colors.primary }, style]} compact>
      <Text variant='body3' style={{ color: theme.colors.onPrimary }}>
        {t($ => $.common.state.new)}
      </Text>
    </Chip>
  )
}

export default NewChip
