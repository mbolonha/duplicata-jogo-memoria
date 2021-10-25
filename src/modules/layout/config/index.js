import CQM__Config from "../../cqm/config/"

export const mainMenuEventsSettings = ({
  wrapperRef,
  handleRefState,
  refState,
}) => {
  const configs = {
    // implementation configs
    wrapperRef: wrapperRef,
    handleRefState: handleRefState,
    refState: refState,
    // application configs
    scroll: true,
    resize: true,
    outsideClick: true,
    hasOverlay: false,
    mouseDown: {
      on: true,
      clickElement: ".menu-wrapper",
    },
  }
  return configs
}

export const Page__Settings = pageParams => {
  return CQM__Config("Home", pageParams)
}
