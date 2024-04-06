import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import debounce from "lodash";
import { sendLog } from "../utils";

const NavigateButton = ({ children, targetType, pathname, style, onClick }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      style={style}
      onClick={
        onClick
          ? onClick
          : async () => {
              if (targetType) {
                debounce(async () => {
                  await sendLog({ target_type: targetType });
                }, 500);
              }
              navigate({
                pathname,
                search: window.location.search,
              });
            }
      }
    >
      {children}
    </IconButton>
  );
};

export default NavigateButton;
