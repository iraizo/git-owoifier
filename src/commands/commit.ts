import {Command, flags} from '@oclif/command'
import {exec} from "child_process";


const faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];

function owoify(string: string) {
  let v = string;

  v = v.replace(/(?:r|l)/g, "w");
  v = v.replace(/(?:R|L)/g, "W");
  v = v.replace(/n([aeiou])/g, 'ny$1');
  v = v.replace(/N([aeiou])/g, 'Ny$1');
  v = v.replace(/N([AEIOU])/g, 'Ny$1');
  v = v.replace(/ove/g, "uv");

  let exclamationPointCount = 0;
  let stringsearch = "!";

  for (let i = 0; i < v.length; i++) {
    stringsearch === v[exclamationPointCount++]
  }
  ;

  for (let i = 0; i < exclamationPointCount; i++) {
    v = v.replace("!", " " + faces[Math.floor(Math.random() * faces.length)] + " ");
  }

  return v;
}

function execute(command: string, callback: any, owo: boolean) {
  console.log(owo);
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
    if (owo) {
      console.log("owoify")
      if (error) {
        console.log(owoify("Uh oh something went wrong " + error));
      }
      if (stderr) {
        console.log(owoify("Uh oh something went wrong " + stderr));
      }
    } else {
      console.log("no owoify")
      if (error) {
        console.log(owoify("Uh oh something went wrong "));
        console.log(error.)
      }
      if (stderr) {
        console.log(owoify("Uh oh something went wrong ") + stderr);
      }
    }
  });
}

export default class Commit extends Command {
  static description = 'git commit wrapper that owoifies commit message'

  static examples = [`$ owoifier --commit "hello world"`,]

  static flags = {
    help: flags.help({char: 'h'}),
    owoerrors: flags.boolean({char: "e", description: "owoifies errors"})
  }


  static args = [{name: 'message'}]

  async run() {
    const {args, flags} = this.parse(Commit)

    if (!args.message) this._help();

    if (!flags.owoerrors) {
      flags.owoerrors = false
    }

    execute(`git commit -m "${owoify(args.message)}"`, function (output: string) {
      //console.log(output);
    }, flags.owoerrors);
  }
}

