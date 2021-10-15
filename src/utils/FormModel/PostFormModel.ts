const fieldValues = {
    formId: 'postForm',
    formField: {
      stakeAmount: {
        name: 'stakeAmount',
        label: 'stake amount',
        requiredErrorMsg: 'amount is required',
        invalidErrorMsg: 'amount must be greater than 0.02'
      }
    }
  };

export interface formTypes {
    stakeAmount: {
      name: string,
      label: string,
      requiredErrorMsg: string,
      invalidErrorMsg: string
    }
}

export default fieldValues