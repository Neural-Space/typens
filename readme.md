
![Logo](https://platform.neuralspace.ai/static/media/logo.e09c49e6.svg)


# Typens

Typens ( pronounced "Type NS" ) is a Javascript library that enables Phonetic typing on any input/textarea element by using Neural Space Transliteration API.

## Pre-requisites

You need a NeuralSpace platform auth code to be able to initialize the library.

Sign up is free and you get free credits too.

Sign in to the [NeuralSpace platform](https://platform.neuralspace.ai/)

You can copy the auth code on the top right corner of the platform


## Features

- Enable Phonetic typing on Input/Textarea elements
- Configurable maximum number of suggestions while typing
- Cross browser compatibility


## Installation

### Install speakns 

With npm

```bash
  npm install typens --save
```

Usage

```javascript
import PhoneticType from "speakns";

let phoneticType = new PhoneticType({
    authToken: "<YOUR_NEURALSPACE_AUTH_TOKEN>",
    language: "hi", //Specify the language code of the target language
    elementId: "mytext", // Id of the input/textarea element on which you want to initialize phonetic typing
    maxSuggest: 5 // Maximum number of suggestions to display while typing
});
```

Use the `phoneticType` object apis to enable/disable phonetic suggestions while typing

To enable suggestions

```javascript
phoneticType.enablePhoneticTyping()
```

To disable suggestions

```javascript
phoneticType.disablePhoneticTyping()
```