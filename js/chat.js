 
function Function() {


 window.watsonAssistantChatOptions = {
            integrationID: "09dca55d-f4b5-4c5d-9981-fc602e918a18", 
            region: "us-south", 
            serviceInstanceID: "6ced5adf-63ec-4690-a0b6-b97cfbf366a8", 
            onLoad: function(instance) { instance.render(); }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
            document.head.appendChild(t);
          });


 document.addEventListener('click', function (event) {
        setTimeout(function(){
          jQuery("#WAC__header-name").text("Ask Me");
        }, 250);
      }, false);
      document.addEventListener('DOMContentLoaded', (e) => {
        e.preventDefault()
        setTimeout(function() {
          jQuery("#WACContainer.WACContainer button.WACLauncher__Button.WAC__button--base").css({
            "height": "130px",
            "width": "130px"
          });
          jQuery("#WACContainer.WACContainer button.WACLauncher__Button svg").css({
            "height": "60px",
            "width": "60px"
          });
        }, 450);
      });

    }