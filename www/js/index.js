/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
		$("a").on('click',this.btnClick);
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		 document.addEventListener("pause", onPause, false);
		 //document.addEventListener("backbutton", onBackKeyDown, false);
		/* $( window ).on( "navigate", function() {
		  alert( "navigated!" );
		}); */
        app.receivedEvent('deviceready');
		
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
 */
       console.log('Received Event: ' + id);
    },
	btnClick:function(){
		
		
		var vid = $(event.currentTarget).attr('id');
		jQuery("#youtube-player").tubeplayer('play',vid);
		
		$('img').removeClass('rightShift');
		$('img').attr('src','img/play.png');
		 console.log($(this).find('img').attr('src'));
		
		$(this).find('img').attr('src','img/pause.png');
		$(this).find('img').addClass('rightShift');
	}
};

	function onPause() {
       //alert(device.uuid);
	   jQuery("#youtube-player").tubeplayer('pause');
    }

	function onBackKeyDown(e) {
		//alert('back key pressed');
		//e.preventDefault();
		navigator.notification.confirm("Are you sure you want to exit ?", this.onConfirm, "Confirmation", "Yes,No"); 
		// Prompt the user with the choice
	}

	function onConfirm(button) {
		if(button==2){//If User selected No, then we just do nothing
			return;
		}else{
			navigator.app.exitApp();// Otherwise we quit the app.
		}
	}

