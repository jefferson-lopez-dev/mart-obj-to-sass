export function convObjToSassVars(obj: any, parentKey = ""): string {
  const keys = Object.keys(obj);
  const contentArray: string[] = [];

  for (const key of keys) {
    const currentKey = parentKey ? `${parentKey}-${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      const nestedContent = convObjToSassVars(value, currentKey);
      contentArray.push(nestedContent);
    } else {
      contentArray.push(`$--${currentKey}: ${value};`);
    }
  }

  return contentArray.join("\n");
}
