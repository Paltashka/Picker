import { gql } from "@apollo/client";

export const GET_ORDER = gql`
  query orders(
    $status: [OrderStatusFilter!]!
    $first: Int!
    $OrderDirection: OrderDirection!
    $OrderSortField: OrderSortField!
  ) {
    orders(
      first: $first
      filter: { status: $status }
      sortBy: { direction: $OrderDirection, field: $OrderSortField }
    ) {
      edges {
        node {
          id
          status
          token
          metadata {
            key
            value
          }
          customerNote
          lines {
            productName
            productSku
            quantity
            id
            unitPrice {
              gross {
                amount
              }
            }
            thumbnail {
              url
            }
          }
          number
          total {
            gross {
              amount
            }
            net {
              amount
            }
          }
        }
      }
    }
  }
`;
