import { extendTheme } from "@chakra-ui/react"
import Button from './components/Button'

// 2. Call `extendTheme` and pass your custom values
const MyTheme = extendTheme({
  colors: {
    darkPurple: '#5102B1',
    lightPurple : '#955AF8',
    green : '#13F5B2',
    darkBlue : '#302E5B',
    white : '#FFFFFF'

  },
  components: {
      Button
  },
  fonts: {

  }
})

export default MyTheme