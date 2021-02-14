const { Builder, By, Key, util } = require("selenium-webdriver");

async function example() {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://codeforces.com/contests/");
  const table = await driver.findElement(By.css("div.datatable table"));
  const contests = await table.findElements(By.css("tbody tr[data-contestid]"));
  const len = await contests.length;
  console.log("__________________________________________");
  console.log("Number of upcoming contest: " + len);
  console.log("\n\n");
  console.log("       Name       |       Date & Time \n");
  for (let i = 0; i < len; i++) {
    const arr = await contests[i].findElements(By.css("td"));
    const name = await arr[0].getText();
    const date = await arr[2].getText();
    //console.log("\x1b[45m", `${name}  |  ${date} \x1b[0m `);
    console.log(`${name}  |  ${date}`);
    console.log();
  }
  console.log("\n__________________________________________");
  await driver.close();
}
example();
