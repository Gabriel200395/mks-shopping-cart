export default function storage(key: string) {
  if (JSON.parse(localStorage.getItem(key) as string)) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  return [];
}
