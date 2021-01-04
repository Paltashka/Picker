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
          fulfillments {
            created
          }
          customerNote
          lines {
            productName
            productSku
            quantity
            id
            variant {
              metadata {
                key
                value
              }
            }
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

export const GET_ORDER_BY_ID = gql`
  query orders($id: Int!) {
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
