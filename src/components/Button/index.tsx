import { ComponentProps } from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { createBox, } from '@shopify/restyle'

import { Text } from '../Text'
import { ThemeProps } from '../../theme'
import styles from './styles'

const BaseButton = createBox<ThemeProps, TouchableOpacityProps>(TouchableOpacity);

type BaseButtonProps = ComponentProps<typeof BaseButton>


type ButtonProps = BaseButtonProps & {
  label: string
}

const Button = ({
  label,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      style={styles.buttonContainer}
      bg='primary-500'
    >
      <Text color='basic-100'>{label}</Text>
    </BaseButton>
  )
}

export { Button }

export type { ButtonProps }
