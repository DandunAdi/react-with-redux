export const depositMoney = (amount) => ({ type: "deposit", payload: amount })

export const withdrawMoney = (amount) => ({ type: "withdraw", payload: amount })
