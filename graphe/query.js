// Her I Will Access To query !!
export const user = `

query {
  user_info: user {
  login firstName lastName email auditRatio totalUp totalDown
    finished_projects: groups(where: { group: {status: {_eq: finished}, _and: {eventId: {_eq: 41}} } }) { group { path members { userLogin } } }
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
    
  totalxp : transaction_aggregate(
            where: {
                type: { _eq: "xp" }
                event: { object: { name: { _eq: "Module" } } }
            }
        ) {
        aggregate {
            sum {
                amount
            }
        }
  }
  }        
  `

;
