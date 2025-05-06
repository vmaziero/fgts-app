import { useState } from "react";

type FormatterResult = {
  formatted: string;
  raw: string;
};

type MaskFunction = (value: string) => FormatterResult;

export const useMask = (maskFn: MaskFunction) => {
  const [value, setValue] = useState<string>("");
  const [raw, setRaw] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = maskFn(e.target.value);
    setValue(result.formatted);
    setRaw(result.raw);
  };

  return {
    value,
    raw,
    onChange,
  };
};
