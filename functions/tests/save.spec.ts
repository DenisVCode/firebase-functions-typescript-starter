import "mocha";
import { expect } from "chai";
import { saveToFirestore } from "../src/models/save.js";

describe("Firestore", async () => {
  it("Should return increment", async () => {
    const result = await saveToFirestore({ num: 5 });

    return expect(result.num).to.equal(6);
  });
});
