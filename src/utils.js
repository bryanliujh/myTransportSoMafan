export function getUniqueId() {
  let machineId = localStorage.getItem("machineId");
  if (!machineId) {
    machineId = crypto.randomUUID();
    localStorage.setItem("machineId", machineId);
  }
  return machineId;
}

export async function sendLog({ target_type }) {
  const urlparams = new URLSearchParams(window.location.search);
  const data = {
    user_id: getUniqueId(),
    target_type,
    timestamp: Date.now(),
    platform: window.navigator.userAgent,
    abtest_group: urlparams.get("abtest") || "control",
  };
  try {
    // const res = await fetch(
    //   "https://sheet.best/api/sheets/970aaaa0-1db6-45ae-9dad-893f60eaaedb"
    // );
    // const data = await res.json();
    // console.log(data);

    await fetch(
      "https://sheet.best/api/sheets/970aaaa0-1db6-45ae-9dad-893f60eaaedb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    console.log(error);
  }
}
