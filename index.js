import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "URL",
      message: "Provide The Url here:",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers.URL);
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("Url.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      Console.log("Unable to find URL");
    } else {
      // Something else went wrong
    }
  });
