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
  pageParam,
}) => {
  const navigate = useNavigate();
  return (
    <IconButton
      style={style}
      onClick={async () => {
        onClick();
        if (targetType) {
          sendLog({
            target_type: targetType,
            page_name: pageName,
          });
        }
        navigate(
          {
            pathname,
            search: window.location.search,
          },
          {
            state: pageParam,
          }
        );
      }}
    >
      {children}
    </IconButton>
  );
};

export default NavigateButton;
