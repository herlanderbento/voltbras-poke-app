const colorMap: { [key: string]: string } = {
  "0-500": "#F87060",
  "501-1000": "#662C91",
  "1001-1500": "#F5B700",
  "1501+": "#00C1FD",
};

export function getColorByCPRange(cp: number) {
  let color: string;

  switch (true) {
    case cp <= 500:
      color = colorMap["0-500"];
      break;

    case cp <= 1000:
      color = colorMap["501-1000"];
      break;

    case cp <= 1500:
      color = colorMap["1001-1500"];
      break;

    default:
      color = colorMap["1501+"];
      break;
  }

  return color;
}
