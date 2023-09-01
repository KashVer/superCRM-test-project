function generateRandomDate(from: Date, to: Date) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime()),
  );
}

const startDate = generateRandomDate(new Date(2023, 0, 1), new Date());
const endDate = generateRandomDate(new Date(2023, 0, 15), new Date());

const formatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

export const formattedDateOne = formatter.format(startDate);
export const formattedDateTwo = formatter.format(endDate);
