import { it, expect, describe } from "vitest";
import { isValid } from "../helper/expandingCards-util";

describe("isTrue", () => {
  
    it("should return a valid url", () => {
    const urlToTest =
      "https://cdn.pixabay.com/photo/2014/03/08/22/32/escalator-283448_960_720.jpg";

    const validUrl = isValid(urlToTest);

    expect(validUrl).toBe(urlToTest);
  });

  it("should return a invalid url", ()=>{
    const emptyUrl = ""

    const errorUrl = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    
    const invalidUrl = isValid(emptyUrl)

    expect(invalidUrl).toBe(errorUrl)
  })
});
