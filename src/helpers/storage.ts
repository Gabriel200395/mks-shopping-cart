export default function storage(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (error) {
    return null;
  }
}
