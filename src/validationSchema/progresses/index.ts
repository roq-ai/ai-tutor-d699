import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  status: yup.string().required(),
  score: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  module_id: yup.string().nullable().required(),
});
