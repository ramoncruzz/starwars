export const findOcurrencies = (text: string): any => {
  const sanitizedText = text.replace(/[^\w^\s]/g, '');
  const arrayOfwords = sanitizedText.trim().split(/\s/g);
  const ocurrencies: any[] = [];
  arrayOfwords.forEach((item, index) => {
    const rgx = index === 0 ? `(${item})` : `\\s(${item})`;
    const value = text.match(new RegExp(rgx, 'g'))?.length;
    ocurrencies.push({ [item]: value });
  });
  return ocurrencies;
};
