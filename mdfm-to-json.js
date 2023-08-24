const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const getHash = content => {
  const hash = crypto.createHash("md5");
  const data = hash.update(content, "utf-8");
  const gen_hash = data.digest("hex");

  return gen_hash;
};

const directoryPath = "markdown_files"; // Adjust the directory name
const outputDirectory = "json_files"; // Adjust the output directory name

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith(".md")) {
    let fileNoExt = file.replace(".md", "");
    fileNoExt = fileNoExt.replace("-", "_");

    const mdContent = fs.readFileSync(path.join(directoryPath, file), "utf-8");
    let needsWrite = true;

    const posEnd = mdContent.indexOf(`\n---`);
    // console.log(mdContent.substring(9, posEnd))
    const jsonData = mdContent.substring(9, posEnd);
    if (jsonData) {
      const jsonFileName = `${fileNoExt}_info.json`;
      const jsonExists = fs.existsSync(
        path.join(outputDirectory, jsonFileName)
      );
      console.log(jsonExists);

      if (jsonExists) {
        const jsonContent = fs.readFileSync(
          path.join(outputDirectory, jsonFileName),
          "utf-8"
        );
        const jsonExistingHash = getHash(jsonContent);
        const jsonNewHash = getHash(jsonData);
        console.log(jsonExistingHash);
        console.log(jsonNewHash);

        if (jsonNewHash == jsonExistingHash) needsWrite = false;
      }
      if (needsWrite) {
        console.log(`${jsonFileName} needs writing!`);
        fs.writeFileSync(path.join(outputDirectory, jsonFileName), jsonData);
      } else {
        console.log(`No write for ${jsonFileName}`);
      }
    }
  }
});
