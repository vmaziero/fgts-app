export const formatCurrency = (value: string): { formatted: string; raw: string } => {
    const raw = value.replace(/\D/g, "");
    let formatted = raw;
  
    formatted = formatted.replace(/(\d)(\d{2})$/, "$1,$2");
    formatted = formatted.replace(/(?=(\d{3})+(\D))\B/g, ".");
    formatted = "R$ " + formatted;

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
  