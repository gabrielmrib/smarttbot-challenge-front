import styles from "./globalStyles";

function MonetaryValue({ value = 0 }: { value?: number }) {
  if (value >= 0)
    return (
      <div color={styles.colorPositive}>
        R${value.toLocaleString("pt-BR")}
      </div>
    );
  return (
    <div color={styles.colorNegative}>
      -R${Math.abs(value).toLocaleString("pt-BR")}
    </div>
  );
}

export default MonetaryValue;
