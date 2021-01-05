import { gql } from "@apollo/client";

export const FULFILL_ORDER = gql`
  mutation orderFulfill($input: OrderFulfillInput!, $orderId: ID!) {
    orderFulfill(order: $orderId, input: $input) {
      order {
        number
      }
      fulfillments {
        lines {
          orderLine {
            id
          }
          quantity
          id
        }
      }
    }
  }
`;

export const TOKEN_CREATE = gql`
  mutation tokenCreate($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors {
        field
        message
      }
    }
  }
`;
