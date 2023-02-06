function onCreated() {
    if (browser.runtime.lastError) {
      console.error(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
}

browser.contextMenus.create({
    id: "open-in-maps",
    title: browser.i18n.getMessage("contextItemOpenInMaps"),
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "open-in-maps"){
        let url = encodeURI("https://www.google.com/maps/search/?api=1&query=" + info.selectionText);
        browser.tabs.create({
            active: true,
            url: url
        })
    }
});