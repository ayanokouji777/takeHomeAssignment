
// save status
exports.saveStatus = function(handlerInput, value) {
    let attributes = handlerInput.attributesManager.getSessionAttributes();
    attributes.status = value;
    handlerInput.attributesManager.setSessionAttributes(attributes);
}

// get status
exports.getStatus = function(handlerInput) {
    let attributes = handlerInput.attributesManager.getSessionAttributes();
    let status = attributes.status;
    console.log('status:' + status);
    return status;
}