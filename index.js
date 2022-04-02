const jsonfile = require("jsonfile");
const random = require("random");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 150);
  const y = random.int(0, 6);
  const DATE = moment().subtract(2.4, "y").add(x, "w").add(y, "d").format();

  const data = {
    date: DATE,
  };
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(20);
