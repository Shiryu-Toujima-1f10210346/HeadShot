import Chart from "@/components/Chart";
import React, { useState } from "react";

function Index() {
  const [data, setData] = useState([
    { ability: "AIM", A: 120, B: 110, fullMark: 150 },
    { ability: "集中力", A: 98, B: 130, fullMark: 150 },
    { ability: "統率力", A: 86, B: 130, fullMark: 150 },
    { ability: "継続力", A: 99, B: 100, fullMark: 150 },
    { ability: "わからん", A: 85, B: 90, fullMark: 150 },
    { ability: "ほげ", A: 65, B: 85, fullMark: 150 },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...data];
    const mathIndex = newData.findIndex((item) => item.ability === "AIM");
    newData[mathIndex].B = Number(event.target.value);
    setData(newData);
  };

  return (
    <div>
      <input type="number" onChange={handleInputChange} placeholder="AIM" />
      <Chart data={data} width={500} height={500} outerRadius={200} />
    </div>
  );
}

export default Index;
