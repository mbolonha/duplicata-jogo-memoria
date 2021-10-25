import { React, useState } from '../dependencies'

const defaultState = {
  pageNameState: 'Home',
  handlePageName: null,
}

const GlobalContext = React.createContext(defaultState)

const GlobalProvider = ({ children, pageName }) => {

  const [pageNameState, togglePageName] = useState('Home')

  function handlePageName(xxx){
    togglePageName(xxx)
    // localStorage.setItem("pageName", JSON.stringify(pageName))
  }

  // handlePageName(pageName)

  // const lsPageName = JSON.parse(localStorage.getItem("pageName"))

  // if (lsPageName) {
  //   togglePageName(lsPageName)
  // }

  return(
    <GlobalContext.Provider
      value={{
        pageNameState,
        handlePageName: handlePageName,
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalProvider }