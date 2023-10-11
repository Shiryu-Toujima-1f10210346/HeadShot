// 各種ライブラリのインポート
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Chartコンポーネントの定義
function Chart(props: {
  data: {
    ability: string; // 軸の項目名
    A: number; // 平均点
    B: number; // 自分の点数
    fullMark: number; // MAX点
  };
  width: number;
  height: number;
  outerRadius: number;
}) {
  const { data, width, height, outerRadius } = props;
  return (
    <RadarChart
      key={Math.random()}
      width={width}
      height={height}
      cx={width / 2}
      cy={height / 2}
      outerRadius={outerRadius}
      data={data}
    >
      {/* レーダーチャートの蜘蛛の巣のような線 */}
      <PolarGrid />

      {/* 軸を決める項目 */}
      <PolarAngleAxis dataKey="ability" />

      <PolarRadiusAxis
        angle={30} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
        domain={[0, 150]} // リストの１番目の要素が最小値、2番目の要素が最大値
      />

      <Radar
        name="平均" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
        dataKey="A" // 表示する値と対応するdata内のキー
        stroke="#8884d8" // レーダーの外枠の色
        fill="#8884d8" // レーダー内の色
        fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
      />
      <Radar
        name="あなた"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />

      <Legend />
    </RadarChart>
  );
}

export default Chart;
