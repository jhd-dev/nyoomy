import { useFormik } from 'formik';
import { registrationSchema } from '../validation/registrationSchema';

export interface RegistrationFormValues {
    displayName: string;
    username: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
}

const initialValues: RegistrationFormValues = {
    displayName: '',
    username: '',
    email: '',
    password: '',
    termsAndConditions: false,
};

type OnSubmitFn = (values: RegistrationFormValues) => Promise<void>;

interface UseRegistrationFormOptions {
    onSubmit: OnSubmitFn;
}

// interface UseRegistrationFormResults {
//     formik: ReturnType<typeof useFormik<RegistrationFormValues>>;
// }

export const useRegistrationForm = ({ onSubmit }: UseRegistrationFormOptions) =>
    useFormik({
        initialValues,
        onSubmit,
        validationSchema: registrationSchema,
        validateOnBlur: true,
        validateOnChange: true,
    });
