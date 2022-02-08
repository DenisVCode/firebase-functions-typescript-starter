import { fs } from "../firebase/firebase.js";

export const saveToFirestore = async (data: { num: number }) => {
  await fs.doc("test/test").set(data);

  data.num++;
  return data;
};
