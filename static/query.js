// Her I Will Access To query !!
export const user = `
query {
  user_info: user {
    firstName
    lastName
  }

  latestLevel: transaction(
    where: {
      _and: [
        { type: { _eq: "level" } },
        { event: { object: { name: { _eq: "Module" } } } }
      ]
    }
    order_by: { amount: desc }
    limit: 1
  ) {
    amount
  }

  skills: user {
    transactions(
      where: { type: { _nin: ["xp", "level", "up", "down"] } }
    ) {
      type
      amount
    }
  }
    
  ratio: user {
    auditRatio
    sucess: audits_aggregate(where: { closureType: { _eq: succeeded } }) {
      aggregate {
        count
      }
    }
    failed: audits_aggregate(where: { closureType: { _eq: failed } }) {
      aggregate {
        count
      }
    }
  }
}
`;
