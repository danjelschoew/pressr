export const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      descriptionHtml
      handle
      availableForSale
      onlineStoreUrl
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
      ingredients: metafield(namespace: "custom", key: "ingredients") {
        value
        type
      }
      shortDescription: metafield(namespace: "custom", key: "short_description") {
        value
        type
      }
      badge: metafield(namespace: "custom", key: "badge") {
        value
        type
      }
    }
  }
`;
