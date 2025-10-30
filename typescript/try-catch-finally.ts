try {
  const jsonData = JSON.parse('{"valid": true}');
  console.log(jsonData);
} catch (error) {
  console.log(`Invalid JSON format! ${error}`);
} finally {
  console.log("JSON parser ready!");
}

function divideNumbers(numOne: number, numTwo: number) {
  try {
    if (numTwo === 0) {
      throw new Error("Cannot divide by Zero!");
    }

    const result: number = numOne / numTwo;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log(`Operation finished!`);
  }
}

async function getData(): Promise<void> {
  try {
    const response = await fetch("https://fakestoreapi.com/Products/1");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
