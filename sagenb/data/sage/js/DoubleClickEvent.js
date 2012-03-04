/* DoubleClickEvent.js
 *
 * This makes the menu pop up on Double Click with left mouse. To do this,
 * we redefine the DblClick object inside MathEvents to send a fake call as
 * "ContextMenu" to MathEvents.Handler.
 * 
 * Since this interferes with the zoom setting in Accessibility.js, that
 * zoom setting will no longer work. Zoom on Double Click also will not
 * work even when selected from the MathJax menu.
 *
 */

MathJax.Hub.Register.StartupHook("MathEvents Ready", function () {
  var EVENT = MathJax.Extension.MathEvents.Event;
  EVENT.DblClick = function(event){
    return EVENT.Handler(event,"ContextMenu",this);
  }
  MathJax.Hub.Startup.signal.Post("DoubleClickEvent Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/../sage/js/DoubleClickEvent.js");
