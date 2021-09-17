import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'family'], 'Size is required!'),
    chicken: yup.boolean(),
    meatballs: yup.boolean(),
    olives: yup.boolean(),
    cheese: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;