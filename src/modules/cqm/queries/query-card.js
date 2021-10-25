// import { graphql, useStaticQuery } from "gatsby"

// export default setHardLocation => {
//   const query = useStaticQuery(graphql`
//     query MyLayoutLocation {
//       allContentfulThemeLocations {
//         edges {
//           node {
//             rowHeading: identifier
//             headingOn: heading
//             location
//             backgroundColor
//             color: textColor
//             layoutType
//             alignContent
//             specialDisplay
//             numberOfColumns
//           }
//         }
//       }
//     }
//   `)

//   const data =
//     query.allContentfulThemeLocations.edges.reduce(function(
//       reducedObj,
//       dataObj
//     ) {
//       console.log("setHardLocation setHardLocation setHardLocation")
//       console.log(setHardLocation)

//       if (dataObj.node.location === setHardLocation) {
//         const dataItem = {
//           location: dataObj.node.location || null,
//           rowHeading: dataObj.node.rowHeading || null,
//           headingOn: dataObj.node.headingOn || null,
//           backgroundColor: dataObj.node.backgroundColor || null,
//           color: dataObj.node.color || null,
//           layoutType: dataObj.node.layoutType || null,
//           alignContent: dataObj.node.alignContent || null,
//           specialDisplay: dataObj.node.specialDisplay || null, // tirar isso e colocar no bloco ( carousel or column )
//           numberOfColumns: dataObj.node.numberOfColumns || null,
//         }

//         reducedObj.push(dataItem)
//       }

//       return reducedObj
//     },
//     []) || null
//   return data
// }
