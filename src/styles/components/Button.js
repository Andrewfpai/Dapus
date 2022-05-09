const Button = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary: {
            
            bg: 'green',
            color: '#000000',
            transition : '0.4s ease',
            _hover : {
                boxShadow : 'md',
                transform : 'scale(1.05)'
            }

        },
        secondary: {
         
            bg: 'white',
            color: '#000000',
            transition : '0.4s ease',
            _hover : {
                boxShadow : 'md',
                transform : 'scale(1.05)'
            }

        }
    },
    // The default `size` or `variant` values
    defaultProps: {},
  }

export default Button