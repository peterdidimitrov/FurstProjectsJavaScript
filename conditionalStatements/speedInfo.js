function speedInfo(input) {
  let spead = Number(input[0]);
  if (spead < 10.1) console.log("slow");
  else if (spead > 10 && spead < 50.1) console.log("average");
  else if (spead > 50 && spead < 150.1) console.log("fast");
  else if (spead > 150 && spead < 1000.1) console.log("ultra fast");
  else if (spead > 1000) console.log("extremely fast");
}
speedInfo(["1001"]);
