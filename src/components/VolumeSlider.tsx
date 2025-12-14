import React from "react";
import { Box, Typography } from "@mui/material";

export const VolumeSlider: React.FC = () => {
  const segments = [{ label: "min" }, { label: "50%" }, { label: "75%" }, { label: "max" }];
  const activeSegment = 1;

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 12,
          gap: "6px",
          mb: 1.5,
        }}>
        {segments.map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: "100%",
              backgroundColor: index <= activeSegment ? "#000000" : "#E5E5EA",
              borderRadius: "6px",
              ...(index === 0 && {
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
              }),
              ...(index === segments.length - 1 && {
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }),
            }}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", width: "100%", position: "relative", height: 16 }}>
        {segments.map((segment, index) => {
          const segmentWidthPercent = 25;
          const segmentCenter = segmentWidthPercent / 2 + index * segmentWidthPercent;

          return (
            <Typography
              key={index}
              variant='caption'
              sx={{
                fontSize: "11px",
                color: "#666666",
                fontWeight: 400,
                position: "absolute",
                left: `${segmentCenter}%`,
                top: "0px",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                textAlign: "center",
                lineHeight: 1,
              }}>
              {segment.label}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
