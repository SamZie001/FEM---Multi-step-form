import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  transform: "translateX(15px)",
  width: 45,
  height: 20.5,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 2,
    padding: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25.5px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? "hsl(213, 96%, 18%)"
            : "hsl(213, 96%, 18%)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "hsl(213, 96%, 18%)",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === "light"
        ? "hsl(213, 96%, 18%)"
        : "hsl(243, 74%, 39%)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function CustomizedSwitches({
  check,
  setCheck,
}: {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={check}
            onClick={() => setCheck((prev) => !prev)}
          />
        }
        label=""
      />
    </FormGroup>
  );
}
