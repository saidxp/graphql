// Her I Will Access To query !!

// <===========> \\ 
export const user = `
 {
  user {
    firstName
    lastName
    auditRatio
  }
    transaction(
    where: {_and: [{type: {_eq: "level"}}, {event: {object: {name: {_eq: "Module"}}}}]}
    order_by: {amount: desc}
    limit: 1
  ) {
    amount
  }
}
`
