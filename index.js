import readline from "readline-sync";
import chalk from "chalk"

import { easyQuestion } from "./questions.js";

const playGame = () => {
  console.log(chalk.bgYellow.white("\n*********** Game Rule ****************"))
  console.log(chalk.bgYellow.white(`* You will be awarded ${chalk.bgWhite.bold.green('+1')} for correct answer`))
  console.log(chalk.bgYellow("* There is no negative marking , Have some fun\n"))

  let score = 0;
  for (let i = 0; i < easyQuestion.length; i++) {

    const { id, question, options, answer } = easyQuestion[i];
    console.log(chalk.bold.inverse(`Q[${id}]: What's the answer? \n ${question}`))
    const index = readline.keyInSelect(options, " Select options from");

    if (index === -1) {
      return;
    }
    if (options[index] === answer) {
      score++;
      if( i != easyQuestion.length -1){
      console.log(chalk.green("Correct Answer Move Ahead\n"))
      }else{
        console.log(chalk.green("Correct Answer"))
      }
    } else {
      console.log(chalk.red("Wrong Answer ! Try your best"))
      console.log(`The correct answer is ${chalk.bold.green(answer)}\n`)
    }
  }
  console.log(`You Scored : ${chalk.bold.green(score)}`)
  
}
//   easyQuestion.map(({ id, question, options, answer }) => {
//     console.log(chalk.bold.inverse(`Q[${id}]: What's the answer? \n ${question}`))
//     const index = readline.keyInSelect(options, " Select options from");

//     if (index === -1) {
//     console.log(index)
//       return;
//     }
//     if (options[index] === answer) {
//       score++;
//       console.log(chalk.green("Correct Answer Move Ahead\n"))
//     } else {
//       console.log(chalk.red("Wrong Answer ! Try your best"))
//       console.log(`The correct answer is ${chalk.bold.green(answer)}\n`)
//     }
//   })
//   console.log(`Total Score : ${chalk.bold.green(score)}`)

// }

function init() {
  const userName = readline.question('Heyy Welcome , Whats your name ');
  const userConsent = readline.keyInYN(`Hey ${chalk.bgWhite(`   ${chalk.bold.green( userName.toUpperCase())}   `)} , Do you like play a short quiz game`);
  if (userConsent === false) {
    console.log("Byee ** See you next time **")
    return
  } else {
    playGame()
  }
}
init();
