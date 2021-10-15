import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Typography,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import formInitialValues from "../utils/FormModel/FormInitialValues";
import PostFormModel, { formTypes } from "../utils/FormModel/PostFormModel";
import validationSchema from "../utils/FormModel/ValidationSchema";
import InputField from "./Fields/InputField";
import { BalanceDict } from "./MainCard";
import { ApiPromise } from "@polkadot/api";
import { getMintFee, mintLKSM } from "../utils/liquidStake";

interface FormValues {
  [x: string]: any;
}

interface StakeFormProps {
  activeToken: string;
  tokens: string[];
  balances: BalanceDict;
  api: ApiPromise;
  address: string;
}

const { formId, formField } = PostFormModel;

const StakeKSMForm: React.FC<StakeFormProps> = ({
  api,
  address,
  activeToken,
  tokens,
  balances,
}): ReactElement => {
  const { stakeAmount } = formField;
  const [formValues, setFormValues] = useState<FormValues>(formInitialValues);
  const [error, setError] = useState("");
  const [mintFee, setMintFee] = useState("0.00");
  const [mintAmount, setMintAmount] = useState(0)
  useEffect(() => {
    (async () => {
      try {
        const mintFee = await getMintFee(api);
        setMintFee(mintFee!.toString());
      } catch (err) {
        setMintFee("error");
      }
    })();
  }, [api]);

  const _submitForm = async (values: FormValues): Promise<void> => {
    console.log(values);
    const hash = await mintLKSM(address, api, values.stakeAmount);
  };

  function _handleSubmit(e) {
    e.preventDefault();
    validationSchema[0]
      .validate(formValues)
      .then(() => _submitForm(formValues))
      .catch((err) => {
        setError(err.errors);
      });
  }

  const setLKSMMintAmount = (amount) => {
     setMintAmount(parseFloat(amount) * 10)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setLKSMMintAmount(value)
  };

  return (
    <form onSubmit={_handleSubmit}>
      <Box
        sx={{
          width: "20rem",
          height: "25rem",
          marginBottom: ".5rem",
          backgroundColor: "#121212",
          borderRadius: "1rem",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "0rem",
              marginBottom: "1rem",
              width: "15rem",
            }}
          >
            <Typography sx={{ flexShrink: 0, color: "text.secondary" }}>
              Available
            </Typography>
            <Typography
              sx={{
                flexShrink: 0,
                color: "text.secondary",
              }}
            >
              4.72 {activeToken}
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 0.3,
                pb: 5.0,
                width: "12ch",
                padding: ".2rem",
              },
            }}
            autoComplete="off"
          >
            <FormControl>
              <InputField
                name={stakeAmount.name}
                label={stakeAmount.label}
                errorMsg={error}
                fullWidth
                error={error !== ""}
                value={formValues.stakeAmount}
                onChange={handleInputChange}
                onFocus={() => setError("")}
              />
            </FormControl>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "0rem",
                marginTop: "1rem",
                width: "15rem",
              }}
            >
              <Typography sx={{ flexShrink: 0, color: "text.secondary" }}>
                Mint
              </Typography>
              <Typography
                sx={{
                  flexShrink: 0,
                  color: "text.secondary",
                }}
              >
                {formValues.stakeAmount ? mintAmount.toFixed(2) : "0.00"}{" "}
                {activeToken === "KSM" ? ("LKSM") : activeToken}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "0rem",
                justifyContent: "space-between",
                marginTop: "1rem",
                width: "15rem",
              }}
            >
              <Typography sx={{ flexShrink: 0, color: "text.secondary" }}>
                Mint Fee
              </Typography>
              <Typography
                sx={{
                  flexShrink: 0,
                  color: "text.secondary",
                  marginTop: ".2rem",
                }}
              >
                {mintFee} {activeToken}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "0rem",
                width: "15rem",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ flexShrink: 0, color: "text.secondary" }}>
                Flexible Fee
              </Typography>
              <Typography
                sx={{
                  flexShrink: 0,
                  color: "text.secondary",
                  marginTop: ".2rem",
                }}
              >
                {mintFee} {activeToken}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "2rem" }}>
              <Button
                type="submit"
                onClick={() => console.log("clicked")}
                variant="contained"
                color="inherit"
                sx={{
                  width: "15rem",
                  backgroundColor: "peachpuff",
                  fontSize: "1.1rem",
                }}
              >
                Stake
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default StakeKSMForm;
