export default function getListStudentIds(lists) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
