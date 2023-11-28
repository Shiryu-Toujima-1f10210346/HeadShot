import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { erf } from "mathjs";

function ScoreBackground({ score }: { score: number }) {
  const mean = 50; // 偏差値の平均
  const stdDev = 10; // 偏差値の標準偏差

  // 正規分布のCDFを計算
  const cdf = 0.5 * (1 + erf((score - mean) / (stdDev * Math.sqrt(2))));
  const calculatedHeight = `${cdf * 100}%`;

  const styles = `
  @keyframes riseFromBottom {
    0% { bottom: -100%; }
    100% { bottom: 0; }
  }
`;

  return (
    <Box
      position="relative"
      width="150px"
      height="150px"
      overflow="hidden"
      border="1px solid #ccc"
      bgcolor="#e0e0e0"
      borderRadius="50%"
    >
      <style>{styles}</style>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={calculatedHeight}
        bgcolor="primary.main"
        style={{
          animation: "riseFromBottom 2s forwards",
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: "translate(-50%, -50%)" }}
        color="white"
        fontSize="40px"
      >
        {score}
      </Box>
    </Box>
  );
}

export default function Deviation() {
  const scores = {
    ApexLegends: 32.0,
    LeagueOfLegends: 60.0,
    Valorant: 58.0,
    Shadowverse: 65.0,
  };

  const highestScore = Math.max(...Object.values(scores));

  return (
    <Box
      border={4}
      borderColor="grey.300"
      borderRadius={1}
      padding={1}
      style={{ display: "inline-block", padding: 0, margin: 0 }}
    >
      <Typography variant="h6" gutterBottom align="center">
        ゲームレート
      </Typography>
      <Box display="flex" alignItems="center">
        <ScoreBackground score={highestScore} />

        <List>
          {Object.entries(scores).map(([skill, score]) => (
            <ListItem key={skill}>
              <ListItemText primary={skill} secondary={`偏差値 ${score}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
