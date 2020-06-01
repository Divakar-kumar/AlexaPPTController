'use strict';
const Alexa = require('alexa-sdk');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const APP_ID = 'amzn1.ask.skill.bd64581c-be4e-4fd7-8888-3027eb8ed4b3';
const API=require('./ApiService/Services');
const CommonUtil=require('./ApiService/CommonUtil');
const SKILL_NAME = 'Slide Controller';
const GET_MARKET_MESSAGE = "Here's your briefings: ";
const HELP_MESSAGE = "Here's your help";
const HELP_REPROMPT = 'What would like to do next?';
const ERROR_REPROMPT= 'There was some error occured , Please try later';
const STOP_MESSAGE = 'Goodbye!';
const speechOutput="ok";     

const handlers = {
    'LaunchRequest': function () {        
        API.InitializeFirebase(); 
        this.emit(':ask','Welcome to Mandiv slide Controller !',HELP_REPROMPT);        
    },
    'OpenIntent':function(){
        const self=this;                  
        API.UpdateOpenNode().then(function(){
            console.log("we got response.result on update openstart node");  
            API.DeleteOpenNode().then(function(){
                console.log("inside delete operation");
                self.response.speak('We have updated the open node')
                .listen('What else would you like to do?');
                self.emit(':responseReady');
            })                     
        });        
       
    },
    'StartIntent':function(){
        const self=this;        
        API.UpdateOpenNode().then(function(){
            console.log("we got response.result on update openstart node");  
            API.DeleteOpenNode().then(function(){
                console.log("inside delete operation");
                self.response.speak('We have updated the open node')
                .listen('What else would you like to do?');
                self.emit(':responseReady');
            })                     
        });        
    },    
    'OpenStartIntent':function(){
        const self=this;        
        API.UpdateOpenNode().then(function(){
            console.log("we got response.result on update openstart node");  
            API.DeleteOpenNode().then(function(){
                console.log("inside delete operation");
                self.response.speak('We have updated the open node')
                .listen('What else would you like to do?');
                self.emit(':responseReady');
            })                     
        });        
    },
    
    'FirstIntent':function(){
        const self=this;        
        API.UpdateFirstNode().then(function(){
            console.log("result on update first node");
            API.DeleteFirstNode().then(function(){
                self.response.speak(speechOutput).listen(HELP_REPROMPT);
                self.emit(':responseReady');
            });            
        })
        .catch(function(){
            console.log("error");
            self.response.speak(ERROR_REPROMPT);
            self.emit(':responseReady');
        });
    },
    
    'LastIntent':function(){
        const self=this;        
        API.UpdateLastNode().then(function(){
            console.log("result on update last node");
            API.DeleteLastNode().then(function(){
                self.response.speak(speechOutput).listen(HELP_REPROMPT);
                self.emit(':responseReady');
            })            
        })
        .catch(function(){
            console.log("error");
            self.response.speak(ERROR_REPROMPT);
            self.emit(':responseReady');
        });
    },
    
    'NextIntent':function(){
        const self=this;        
        API.UpdateNextNode().then(function(){
            console.log("result on update next node");
            API.DeleteNextNode().then(function(){
                self.response.speak(speechOutput).listen(HELP_REPROMPT);
                self.emit(':responseReady');
            });            
        })
        .catch(function(){
            console.log("error");
            self.response.speak(ERROR_REPROMPT);
            self.emit(':responseReady');
        });
    },
    
    'PreviousIntent':function(){
        const self=this;        
        API.UpdatePreviousNode().then(function(){
            console.log("result on update previous node");
            API.DeletePreviousNode().then(function(){
                self.response.speak(speechOutput).listen(HELP_REPROMPT);
                self.emit(':responseReady');
            });            
        })
        .catch(function(){
            console.log("error");
            self.response.speak(ERROR_REPROMPT);
            self.emit(':responseReady');
        });
    },    
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.YESIntent':function(){
        console.log('reached yes intent');
        this.response
            .speak(HELP_MESSAGE)
            .listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.FallbackIntent': function () {
        this.response
        .speak(HELP_MESSAGE)
        .listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'SessionEndedRequest' : function () {        
        this.response
            .speak(HELP_MESSAGE)
            .listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'Unhandled' : function () {
        var message = 'Sorry, this is not a valid command. Please say help to hear what you can say.';
       this.response.speak(message).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    }
};

exports.handler = function (event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);   
    alexa.execute();
};
