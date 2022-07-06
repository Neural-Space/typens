import "./jquery.textcomplete"
import $ from "jquery"
class PhoneticType {
    constructor(initParams) {
        

        let { authToken, language, elementId, maxSuggest, platformUrl } = initParams
        this.platformUrl = platformUrl;
        this.authToken = authToken;
        this.language = language;
        this.transliterationUrl = `https://${platformUrl ? platformUrl : `platform.neuralspace.ai`}/api/transliteration/v1/transliterate`;
        this.inputElement = document.getElementById(elementId);
        this.maxSuggest = maxSuggest
        if ($("#dropDownStyle") !== null) {
            $("head").append(dropDownStyle)
        }
        console.info("Phonetic typing is successfully initialized 🎉", $(dropDownStyle))
    }
    enablePhoneticTyping() {
        $(this.inputElement).textcomplete([{
            match: /\b(\w{2,})$/,
            completeOnSpace: true,
            search: (term, callback) => {
                $.ajax({
                    url: this.transliterationUrl,
                    type: "post",
                    headers: {
                        "authorization": this.authToken
                    },
                    data: JSON.stringify({
                        "text": term,
                        "sourceLanguage": "en",
                        "targetLanguage": this.language,
                        "suggestionCount": this.maxSuggest
                    }),
                    contentType: "application/json",
                    dataType: "json"
                }).then((data) => {
                    callback(data.data.suggestions)
                })
            },
            index: 0,
            replace: word => word + " "
        }])
    }

    disablePhoneticTyping(){
        $(this.inputElement).textcomplete("destroy")
    }
}

const dropDownStyle = `
<style id="dropDownStyle">
    .textcomplete-dropdown {
        border: 1px solid #ddd;
        background-color: white;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .textcomplete-dropdown li {
        margin: 0;
    }
    .textcomplete-dropdown li:last-child {
        border-top: 1px solid #ddd;
    }
    .textcomplete-dropdown .textcomplete-item {
        border-top: 1px solid #ddd;
        padding: 3px 8px;
        color: #181818;
        cursor: pointer;
    }
    .textcomplete-dropdown .textcomplete-item:first-child {
        border-top: none;
    }
    .textcomplete-dropdown .textcomplete-item:hover, .textcomplete-dropdown .textcomplete-item.active {
        background-color: #3754a1;
        color: #fff;
    }
    .textcomplete-dropdown .textcomplete-item img {
        height: 1rem;
        margin-bottom: 0;
        vertical-align: middle;
    }
</style>
`
if (window) {
    window.PhoneticType = PhoneticType
}
export default PhoneticType;