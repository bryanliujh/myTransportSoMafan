import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import debounce from "lodash";
import { sendLog } from "../utils";

const NavigateButton = ({
  children,
  targetType,
  pathname,
  style,
  onClick,
  pageName,
}) => {
  const navigate = useNavigate();
  return (
    <IconButton
      style={style}
      onClick={
        onClick
          ? onClick
          : debounce(async () => {
              if (targetType) {
                await sendLog({
                  target_type: targetType,
                  page_name: pageName,
                });
              }
              navigate({
                pathname,
                search: window.location.search,
              });
            }, 500)
      }
    >
      {children}
    </IconButton>
  );
};

export default NavigateButton;
