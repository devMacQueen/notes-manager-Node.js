import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notes = [];

function showMenu() {
  console.log("\n1: Add Notes");
  console.log("2: View Notes");
  console.log("3: Delete Note");
  console.log("4: Exit");
  rl.question("Choose an option: ", handleInput);
}

function handleInput(input) {
  const option = input.trim();

  if (option === "1") {
    rl.question("\nEnter note Name: ", (note) => {
      notes.push(note);
      console.log("note", note);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\n Saved Notes");
    if (notes.length <= 0) {
      console.log("\nNo Notes Yet!");
      return showMenu();
    }
    notes.forEach((note, index) => {
      console.log(`${index + 1}:${note}`);
    });
    showMenu();
  } else if (option === "3") {
    rl.question("Enter Note ID: ", (note) => {
      const id = note.trim();
      if (!id || notes.length <= 0 || id > notes.length) {
        console.log("\nInvaild id");
        return showMenu();
      }
      const deleted = notes.splice(Number(id) - 1, 1);
      console.log("Deleted ", deleted);

      showMenu();
    });
  } else if (option === "4") {
    console.log("Thanks for using Todo App");
    rl.close();
  } else {
    console.log("Incorrect Input");
    showMenu();
  }
}

showMenu();
