interface HistoryTrade {
  date: string;
  type: string;
  position: string;
  price: number;
  posSide: string;
  volume: number;
  totalprice: number;
  profitlossrate: number | null;
  profitloss: number | null;
  point: number | null;
}

export default HistoryTrade;
