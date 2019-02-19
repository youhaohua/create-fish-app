/* define(function() {
    var isRunning = false;
    return {
        run: function() {

            fish.language = "zh";
            $(document).trigger("languageChanged.fish");
            if (!isRunning) {
                isRunning = true;
                require(['modules/index/views/IndexView.js'], function(IndexView) {


                    new IndexView({el:".fujianMobile"}).render()

                });
            }
        }
    }
});
 */
import loadingBar from "../../fish-desktop/loadingBar.js"
import "./css/index.css"
var fishTemp=require("./templates/temp.hbs")
var IndexView = fish
    .View
    .extend({
        manage: true,
        serialize: function () {
            return {message:"fish-app"}
        },
        template:fishTemp,
        initialize: function () {
        

        },
        afterRender: function () {

         /*    function fullScreen() {
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
                if (typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                };
                return;
            }
            fullScreen() */

        }
    });
export default IndexView