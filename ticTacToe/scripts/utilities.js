// Utilities.js from Larry Ullman's Modern JavaScript

var U = {
    $: function(id) {
        'use strict';

        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, // end $()

    setText: function(id, message) {
        'use strict';

        if ( (typeof id == 'string') && (typeof message =='string') ) {
            var output = this.$(id);

            if (!output) return false;

            if (output.textContent !== undefined) {
                output.textContent = message;
            }
            else {
                output.innerText = message;
            }
            return true;
        } // end main if
    }, // end setText()

    addEvent: function(obj, type, fn) {
        'use strict';

        if (obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        }
        else if (obj && obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    }, // end addEvent()

    removeEvent: function(obj, type, fn) {
        'use strict';

        if (obj && obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        }
        else if (obj && obj.detachEvent) {
            obj.detachEvent('on' + type, fn);
        }
    } // end of removeEvent()
}; // end of U declaration