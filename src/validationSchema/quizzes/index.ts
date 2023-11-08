import * as yup from 'yup';

export const quizValidationSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
  module_id: yup.string().nullable().required(),
});
