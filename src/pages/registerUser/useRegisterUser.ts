import { object, string, number, date, InferType } from "yup";

const REQUIRED_FIELD_MESSAGE = "This field is requiered";

export const useRegisterUser = () => {
  const initialValues = {
    name: '',
    age: 0,
    email: '',
    website: '',
    birthDate: new Date(),
  };

  const formSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    birthDate: date().default(() => new Date()),
  });

  const onSubmit = (values: InferType<typeof formSchema>) => {
    console.log("values", values);
  }

  return { initialValues, formSchema, onSubmit };
};