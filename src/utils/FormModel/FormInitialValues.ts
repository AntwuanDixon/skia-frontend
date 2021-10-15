import postFormModel from './PostFormModel';
const {
  formField: {
    stakeAmount,
  }
} = postFormModel;

const initialValues = {
  [stakeAmount.name]: ''
};

export default initialValues