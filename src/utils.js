export function getUniqueId() {
  let machineId = localStorage.getItem("machineId");
  if (!machineId) {
    machineId = crypto.randomUUID();
    localStorage.setItem("machineId", machineId);
  }
  return machineId;
}

export const DataAmount = {
  Few: "few",
  Some: "some",
  Many: "many",
};

export function getABtest() {
  const urlparams = new URLSearchParams(window.location.search);
  const abtestGroup = urlparams.get("abtest") || "control";
  switch (abtestGroup) {
    case "abtest1": {
      return {
        expanded: false,
        hamburger: true,
        dataAmount: DataAmount.Few,
      };
    }
    case "abtest2": {
      return {
        expanded: true,
        hamburger: false,
        dataAmount: DataAmount.Few,
      };
    }
    case "abtest3": {
      return {
        expanded: false,
        hamburger: false,
        dataAmount: DataAmount.Few,
      };
    }
    case "abtest4": {
      return {
        expanded: true,
        hamburger: true,
        dataAmount: DataAmount.Few,
      };
    }
    case "abtest5": {
      return {
        expanded: false,
        hamburger: true,
        dataAmount: DataAmount.Some,
      };
    }
    case "abtest6": {
      return {
        expanded: true,
        hamburger: false,
        dataAmount: DataAmount.Some,
      };
    }
    case "abtest7": {
      return {
        expanded: false,
        hamburger: false,
        dataAmount: DataAmount.Some,
      };
    }
    case "abtest8": {
      return {
        expanded: true,
        hamburger: true,
        dataAmount: DataAmount.Some,
      };
    }
    case "abtest9": {
      return {
        expanded: false,
        hamburger: true,
        dataAmount: DataAmount.Many,
      };
    }
    case "abtest10": {
      return {
        expanded: true,
        hamburger: false,
        dataAmount: DataAmount.Many,
      };
    }
    case "abtest11": {
      return {
        expanded: false,
        hamburger: false,
        dataAmount: DataAmount.Many,
      };
    }
    case "abtest12": {
      return {
        expanded: true,
        hamburger: true,
        dataAmount: DataAmount.Many,
      };
    }
    default:
      return {
        expanded: true,
        hamburger: true,
        dataAmount: DataAmount.Many,
      };
  }
}

export async function sendLog({ target_type, page_name }) {
  const urlparams = new URLSearchParams(window.location.search);
  const { expanded, hamburger, dataAmount } = getABtest();
  const data = {
    user_id: getUniqueId(),
    target_type,
    timestamp: Date.now(),
    platform: window.navigator.userAgent,
    abtest_group: urlparams.get("abtest") || "control",
    expanded: expanded ? "true" : "false",
    hamburger: hamburger ? "true" : "false",
    data_amount: dataAmount,
    page_name,
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
