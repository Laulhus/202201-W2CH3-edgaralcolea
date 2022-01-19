let startButton;
let currentlyPlaying = null;

function gameOver(status) {
  if (status === "win") {
    startButton = "You win! Play again?";
  } else {
    startButton = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

describe("Given a gameOver() function", () => {
  describe("When it receives 'win'", () => {
    test("Then it should assign 'You win! Play again?' to startButton", () => {
      const status = "win";

      gameOver(status);

      expect(startButton).toBe("You win! Play again?");
    });
  });

  describe("When it doesn't receive 'win", () => {
    test("Then it should assign 'Game over! Play again?' to startButton", () => {
      const status = "hello";

      gameOver(status);

      expect(startButton).toBe("Game over! Play again?");
    });
  });
});
