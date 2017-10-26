Chrome extension

//popup.js— > background
///////////browser-action-popup/////////////
//Send message from browser-action-popup to background-script
chrome.runtime.sendMessage({
        msg: "This is a message sent from the browser-action-popup to the background-script"
    })
    .then(response => { //Receive response from the background-script
        console.log(response.msg)
    })

//Receive message from background-script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse({
        msg: "This is a response message sent from the browser-action-popup"
    })
    return true
})

//background— > popup
////////////background-script//////////////
//Send message from background-script to browser-action-popup
chrome.runtime.sendMessage({
        msg: "This is a message sent from the background-script to the browser-action-popup"
    })
    .then(response => { //Receive response from the browser-action-popup
        console.log(response.msg)
    })

//Receive messages from browser-action-popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse({
        msg: "This is a response message sent from the background-script"
    })
    return true
})

//popup.js— > content script
////////////Popup//////////////
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    browserObject.tabs.sendMessage(tabs[0].id, {
        action: 'ActiveAccount'
    }, function(response) {
        self.isValid = response.isShow;
        self.isChecked = true;
    });
});

//Content Script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'ActiveAccount') {
        sendResponse({
            isShow: !!document.getElementById('hg-app')
        });
    }
});


//background—— content script
////////////Content Listeren//////////////
browserObject.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'Auth') {
        return window.postMessage(request, '*');
    }
});

//background Script
browserObject.tabs.query({
    url: '*://mail.google.com/*'
}, function(tabs) {
    for (let i = 0; i < tabs.length; ++i) {
        browserObject.tabs.sendMessage(tabs[i].id, {
            action: 'Auth'
        });
    }
});

//Content—— Background
////////////Content Send and wait received//////////////
browserObject.runtime.sendMessage(data, function(response) {
    console.log(response)
});

//background Script
browserObject.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.action === 'Login') {
                sendResponse(data);
            };
            
});