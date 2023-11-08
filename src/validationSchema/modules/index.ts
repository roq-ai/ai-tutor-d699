import * as yup from 'yup';

export const moduleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  content_id: yup.string().nullable().required(),
});
