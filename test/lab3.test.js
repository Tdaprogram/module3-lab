// test.js
import { expect } from "chai";

describe("Fun and Interesting Unit Tests", function () {
  // 1. Basic Arithmetic
  it("should return the sum of two numbers", function () {
    function sum(a, b) {
      // Students should implement this
      return a + b;
    }
    expect(sum(2, 3)).to.equal(5);
    expect(sum(-1, 1)).to.equal(0);
  });

  // 2. Fun with Emojis

  // 2.1: Return an emoji for a string keyword
  it("should return an emoji for a string keyword", function () {
    function getEmoji(keyword) {
      // See below the range of unicode characters for emojis:
      // \uD800-\uDBFF
      // \uDC00-\uDFFF

      // Students should implement this function that should return an emoji for a string keyword
      return emojiMap[keyword];
    }
    const emojiMap = {
      smile: "😊",
      cry: "😢",
      heart: "❤️",
    };
    expect(getEmoji("smile")).to.equal("😊");
    expect(getEmoji("cry")).to.equal("😢");
    expect(getEmoji("heart")).to.equal("❤️");
    expect(getEmoji("unknown")).to.be.undefined;
  });

  // 2.2: Count the number of emojis in a string
  it("should count the number of emojis in a string", function () {
    function countEmojis(str) {
      // Students should implement this function that counts the number of emojis in the input string str
      // Use a regular expression to match all emoji characters in the string
      const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      const matches = str.match(emojiRegex);

      // If matches are found, return the length of the matches array; otherwise, return 0
      return matches ? matches.length : 0;
    }
    expect(countEmojis("😊😊😢")).to.equal(3);
    expect(countEmojis("Hello 😊! How are you?")).to.equal(1);
    expect(countEmojis("No emojis here!")).to.equal(0);
  });

  // 2.3: Replace words with emojis
  it("should replace certain words with emojis", function () {
    function replaceWithEmojis(str, emojis) {
      // Students should implement a function replaceWithEmojis(str, replacements) that replaces
      // certain words in the string str with corresponding emojis from the replacements object.
      // Iterate over the replacements object
      for (const word in emojis) {
        // Replace each occurrence of the word in the string with the corresponding emoji
        str = str.replace(new RegExp(word, "g"), emojis[word]);
      }

      return str;
    }
    const emojis = {
      happy: "😊",
      sad: "😢",
      love: "❤️",
    };
    expect(replaceWithEmojis("I am happy", emojis)).to.equal("I am 😊");
    expect(replaceWithEmojis("I am sad", emojis)).to.equal("I am 😢");
    expect(replaceWithEmojis("I love you", emojis)).to.equal("I ❤️ you");
  });

  // 3. Create a function that checks if a number is odd
  it("should check if a number is odd", function () {
    function isOdd(num) {
      // Students should implement this function that checks if num is an odd number.
      return num % 2 !== 0;
    }
    expect(isOdd(1)).to.be.true;
    expect(isOdd(4)).to.be.false;
    expect(isOdd(17)).to.be.true;
  });

  // 4. Green Apples Eating Habit
  // 4.1
  it("My granny stopped eating green apples when she lost her teeth.", function () {
    const eatsGreenApples = (person) => {
      // Students should implement this
      return person.hasTeeth ? true : false;
    };
    const granny = {
      hasTeeth: false,
      age: 72,
      name: "Granny Smith",
    };
    expect(eatsGreenApples(granny)).to.be.false;
  });

  // 4.2
  it("My great granny still loves eating green apples as she has teeth.", function () {
    const eatsGreenApples = (person) => {
      // Students should implement this
      return person.hasTeeth;
    };
    const greatGranny = {
      hasTeeth: true,
      age: 85,
      name: "Glamma",
    };
    expect(eatsGreenApples(greatGranny)).to.be.true;
  });

  // 5. Junk Food Eating Habit
  it("People should stop eating junk food at age 40 and above", function () {
    const canEatJunkFood = (person) => {
      // Students should implement this
      if (person.age >= 40) {
        return false;
      }
      return true;
    };

    const uncleBob = {
      hasTeeth: true,
      age: 49,
      name: "Donald Duck",
    };
    expect(canEatJunkFood(uncleBob)).to.be.false;
    const youngTom = {
      hasTeeth: true,
      age: 25,
      name: "Tom",
    };
    expect(canEatJunkFood(youngTom)).to.be.true;
  });

  // 6. String Manipulation
  it("should reverse a string", function () {
    function reverseString(str) {
      // Students should implement this function that returns the reverse of the input string str.
      // Reverse the string using the split(), reverse(), and join() methods
      return str.split("").reverse().join("");
    }
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("world")).to.equal("dlrow");
  });

  // 7. Array Manipulation
  it("should remove duplicates from an array", function () {
    const removeDuplicates = (arr) => {
      // Students should implement this function hat removes duplicate elements from the input array arr.
      // Use the Set object to remove duplicate elements from the array. ... Syntax to spread the set in to array.
      return [...new Set(arr)];
    };
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates(["a", "a", "b", "b", "c"])).to.deep.equal([
      "a",
      "b",
      "c",
    ]);
  });

  // 8. Find the first even number in an array
  it("should find the first even number in an array", function () {
    const findFirstEven = (arr) => {
      // Students should implement this function that returns the first even number in the array arr.
      // Using the find() method to iterate over the array.
      /*   let num = arr.find(num);
        if (num % 2 === 0) {
          return num;
        }*/
      return arr.find((num) => num % 2 === 0);
    };
    expect(findFirstEven([1, 3, 7, 8, 10])).to.equal(8);
    expect(findFirstEven([1, 3, 5, 7])).to.be.undefined;
  });

  // 9. Filter out all non-positive numbers
  it("should filter out all non-positive numbers from an array", function () {
    const filterNonPositive = (arr) => {
      // Students should implement this function that filters out all non-positive numbers from the array arr.
      /*    let num = arr.filter(num);
        if (num > 0) {
          return num;
        };*/
      return arr.filter((num) => num > 0);
    };
    expect(filterNonPositive([1, -2, 3, 0, -5, 6])).to.deep.equal([1, 3, 6]);
    expect(filterNonPositive([-1, -2, -3])).to.deep.equal([]);
  });

  // 10. Count occurrences of a value in an array
  it("should count the occurrences of a value in an array", function () {
    const countOccurrences = (arr, value) => {
      // Use the filter method to create a new array with only the matching values
      const matchingValues = arr.filter((num) => num === value);

      // Use the length property to count the occurrences of the value in the array
      return matchingValues.length;
    };
    expect(countOccurrences([1, 2, 2, 3, 2, 4], 2)).to.equal(3);
    expect(countOccurrences([1, 2, 3, 4], 5)).to.equal(0);
  });

  // 11. Create a function that converts a JSON array of customers to CSV string format
  it("should convert a JSON array of customers to CSV string format", function () {
    const jsonToCsv = (customers) => {
      // Use the map() method to create an array of strings, where each string represents a row in the CSV format
      const rows = customers.map((customer) => {
        return Object.values(customer) // Use the Object.values() method to get an array of the customer's values
          .join(","); // Use the join() method to concatenate the values into a comma-separated string
      });

      // Use the join() to concatenate rows as whole string string, with a newline character between each row
      const csv = rows.join("\n");

      // Add the header row to the CSV string
      const header = Object.keys(customers[0]).join(",");
      const csvWithHeader = `${header}\n${csv}`;

      return csvWithHeader;
    };
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    expect(jsonToCsv(customers)).to.equal(csv);
  });

  // 12. Create a function that converts a CSV string to an array of JSON objects
  it("should convert a CSV string to an array of JSON objects", function () {
    const csvToJson = (csv) => {
      // Split CSV into rows
      const rows = csv.split("\n");

      // Get the header row and get column header/Names
      const headerRow = rows[0];
      const columnNames = headerRow.split(",");

      // Remove the header row from the rows array
      rows.shift();

      // Map each row to a JSON object
      const customers = rows.map((row) => {
        const values = row.split(",");
        const customer = {};

        // Assign each value to its corresponding column name
        columnNames.forEach((columnName, index) => {
          if (index == 0) {
            customer[columnName] = Number(values[index]); //must be Number(Values[index])
          } else {
            customer[columnName] = values[index];
          }
        });

        return customer;
      });

      return customers; // Add this line to return the customers array
    };

    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    expect(csvToJson(csv)).to.deep.equal(customers);
  });
});
