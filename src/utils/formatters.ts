export const formatCurrency = (value: string): { formatted: string; raw: string } => {
  const raw = value.replace(/\D/g, "");

  if (!raw) {
    return { formatted: "R$ 0,00", raw: "" };
  }

  const numericValue = parseFloat(raw) / 100;

  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(numericValue);

  return {
    formatted,
    raw,
  };
};

  
export const formatPhone = (value: string): { formatted: string; raw: string } => {
  const raw = value.replace(/\D/g, "");
  let formatted = raw;

  if (raw.length <= 10) {
    // Formato para 8 dígitos: (xx) xxxx-xxxx
    formatted = raw
      .replace(/^(\d{0,2})/, "($1")
      .replace(/^(\(\d{2})(\d{0,4})/, "$1) $2")
      .replace(/(\d{4})(\d{0,4})$/, "$1-$2");
  } else {
    // Formato para 9 dígitos: (xx) xxxxx-xxxx
    formatted = raw
      .replace(/^(\d{0,2})/, "($1")
      .replace(/^(\(\d{2})(\d{0,5})/, "$1) $2")
      .replace(/(\d{5})(\d{0,4})$/, "$1-$2");
  }

  formatted = formatted.slice(0, 15);

  return {
    formatted,
    raw,
  };
};
  