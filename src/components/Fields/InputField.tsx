import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useHelperTextStyles = makeStyles(() => ({
  root: {
      padding: '0',
      height: '.1rem',
      color: 'blue'
  }
}));

export default function InputField(props) {
  const { errorMsg, ...rest } = props;
  const helperTextStyles = useHelperTextStyles();

  return (
    <TextField
        type="number"
        id="standard-error-helper-text"
        {...rest}
        color="secondary"
        focused
        sx={{
            "& > :not(style)": {
            width: "15rem",
            height: "3rem",
            padding: ".2rem",
            },
        }}
        helperText={errorMsg}
        FormHelperTextProps={{
          className:{
            root:helperTextStyles.root
          }
        }}
    />
  );
}