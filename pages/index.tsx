import Chart from "@/components/Chart";
import Deviation from "@/components/Deviation";
import OfferList from "@/components/offerList";
import React, { useState } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";

function Index() {
  const [data, setData] = useState([
    { ability: "AIM", A: 120, B: 110, fullMark: 150 },
    { ability: "集中力", A: 98, B: 130, fullMark: 150 },
    { ability: "統率力", A: 86, B: 130, fullMark: 150 },
    { ability: "継続力", A: 99, B: 100, fullMark: 150 },
    { ability: "わからん", A: 85, B: 90, fullMark: 150 },
    { ability: "ほげ", A: 65, B: 85, fullMark: 150 },
  ]);

  const Data = {
    companyName: "株式会社ほげんぽつ",
    description: "めちゃくちゃブラック企業です！非推奨",
  };

  const n = 10;

  const newsData = Array.from({ length: n }, (_, i) => ({
    companyName: `${Data.companyName} ${i + 1}`,
    description: `${Data.description} ${i + 1}`,
  }));

  const [limit, setLimit] = useState(2); // 新しいstate変数

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...data];
    const mathIndex = newData.findIndex((item) => item.ability === "AIM");
    newData[mathIndex].B = Number(event.target.value);
    setData(newData);
  };

  return (
    <div>
      <a href="/company">企業一覧</a>
      <br />
      <input type="number" onChange={handleInputChange} placeholder="AIM" />
      <Chart data={data} width={500} height={500} outerRadius={200} />
      <Deviation />
      <br />
      <Paper elevation={3} style={{ display: "inline-block", padding: "20px" }}>
        {newsData.slice(0, limit).map(
          (
            news,
            index // .sliceを追加
          ) => (
            <OfferList
              key={index}
              companyName={news.companyName}
              description={news.description}
              width="30vw"
              height="80%"
            />
          )
        )}
        <Typography
          style={{ textAlign: "right" }}
          onClick={handleShowMore}
          padding="5px"
          color="primary.main"
          fontWeight="bold"
        >
          もっと見る
        </Typography>
      </Paper>
    </div>
  );
}

export default Index;
