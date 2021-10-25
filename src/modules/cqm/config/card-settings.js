import Card__Queries from "../queries/query-card"

export default ({ author, version, id }) => {
  let configs = {
    // implementation configs
    author: author || null,
    version: version || null,
    id: id || null,
  }

  const Card__Settings = (author, version, id) => {
    configs = {
      author: author || null,
      version: version || null,
      id: id || null,
    }
    return configs
  }

  let querySelector = "Card"

  let data = null
  if (querySelector === "Card") {
    data = Card__Queries(querySelector)
  }

  let settings = null

  switch (querySelector) {
    case "Card":
      settings = Card__Settings(wrapperRef, handleRefState, refState)
      break
    default:
      break
  }
  return {
    settings,
    data,
  }
}
