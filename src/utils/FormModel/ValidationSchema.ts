import * as Yup from 'yup';
import postFormModel from './PostFormModel';
const {
  formField: {
    stakeAmount
  }
} = postFormModel;

const yupSchema = [
  Yup.object().shape({
    [stakeAmount.name]: Yup.string().required(`${stakeAmount.requiredErrorMsg}`),
    [stakeAmount.name]: Yup.mixed()
      .test('stakeAmountMin', `${stakeAmount.invalidErrorMsg}`, (val) => {
        return val >= .02
      })
  })
];

export default yupSchema