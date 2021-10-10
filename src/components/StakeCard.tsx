import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { ReactElement } from "react";

function StakeCard(): ReactElement {
  return (
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
            4.72 KSM
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "15ch", padding: ".2rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Stake Amount"
            color="secondary"
            focused
            sx={{
              "& > :not(style)": {
                width: "15rem",
                height: "3rem",
                padding: ".2rem",
              },
            }}
          />
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
              0.7 KSM
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
              .02 KSM
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
              .01 KSM
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Button
              variant="contained"
              color="inherit"
              sx={{ width: "15rem", backgroundColor: "peachpuff", fontSize: "1.1rem" }}
            >
              Stake
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StakeCard;
