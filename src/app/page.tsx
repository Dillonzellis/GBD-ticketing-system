import { Inter } from "next/font/google";

export default function Home() {
  function generateUniqueNumbers() {
    const uniqueNumbers: number[] = [];
    const generateNumber = () => Math.floor(Math.random() * 900000000 + 100000000);

    const addUniqueNumber = () => {
      const newNumber = generateNumber();
      if (!uniqueNumbers.includes(newNumber)) {
        uniqueNumbers.push(newNumber);
      } else {
        addUniqueNumber();
      }
    };

    while (uniqueNumbers.length < 9) {
      addUniqueNumber();
    }

    return uniqueNumbers;
  }
  return (
    <main>
      <h1>yeppers</h1>
    </main>
  );
}
