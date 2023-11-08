import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().required(),
  description: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
