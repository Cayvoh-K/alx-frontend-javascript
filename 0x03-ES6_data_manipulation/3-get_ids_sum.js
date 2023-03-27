export default function getStudentIdsSum(studentd) {
  return students.reduce((acc, c) => acc + c.id, 0);
}
