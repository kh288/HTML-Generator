const inquirer = require("inquirer");
const fs = require("fs");

https://www.linkedin.com/in/kevin-hernandez-5a8243167/

inquirer
    .prompt([{
            message: "Enter your Name",
            name: "name",
        },
        {
            message: "Enter your location: ",
            name: "location",
        },
        {
            message: "Tell me about yourself: ",
            name: "bio",
        },
        {
            message: "Share your linkedin URL: ",
            name: "linkedin",
        },
        {
            message: "Share your github URL: ",
            name: "github",
        }
        ])
        .then(function(data) {
            console.log(data);

            const htmlDoc = 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <title>HTML Generated</title>
            </head>
            <body>
                <div class="jumbotron p-3">
                    <h1 class="display-4">Hello ${data.name}</h1>
                    <p class="lead">Location: ${data.location}</p>
                    <p class="lead">About me: ${data.bio}</p>
                    <hr class="my-4">
                    <p class="lead">
                    <a class="btn btn-primary btn-lg" href="${data.linkedin}" role="button">Linkedin</a>
                    <a class="btn btn-primary btn-lg" href="${data.github}" role="button">Github</a>
                    </p>
                </div>
            </body>
            </html>
            `;

        fs.writeFile("index.html", htmlDoc, function(error) {
            if (error) {
                console.log("Error, something went wrong");
            } else {
                console.log("Success");
            }
        })
    });
