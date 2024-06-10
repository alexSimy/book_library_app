import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().min(3, 'Title too short').required('Title is required!'),
  genre: Yup.string().min(3, 'Genre too short').required('Genre is required!'),
  author: Yup.string()
    .min(3, 'Author too short')
    .required('Author is required!'),
  description: Yup.string()
    .min(3, 'Description too short')
    .required('Description is required!'),
});

export default validationSchema;
