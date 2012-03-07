/***************************************************************************
 *                                                                         *
 * DoubleClickEvent.js                                                     *
 *                                                                         *
 * This makes the menu pop up on Double Click with left mouse. To do this, *
 * we redefine the DblClick object inside MathEvents to send a fake call as*
 * "ContextMenu" to MathEvents.Handler. This is defined only for a browser *
 * that is not on a mobile device.                                         *
 *                                                                         *
 * Since this interferes with the zoom setting in Accessibility.js, that   *
 * zoom setting will no longer work.                                       *
 *                                                                         *
 ***************************************************************************
 */

MathJax.Callback.Queue(
  MathJax.Hub.Register.StartupHook("MathEvents Ready", function () {
    var HUB = MathJax.Hub;
    //
    // Redefine DblClick only if it is not a mobile device. For a mobile
    // device MathJax-2.0 has double tap and hold for ContextMenu.
    //
    if (!HUB.Browser.isMobile) {
      (function () {
        var EVENT = MathJax.Extension.MathEvents.Event;
        EVENT.DblClick = function(event){
          return EVENT.Handler(event,"ContextMenu",this);
        }
      })();
      //
      // Disable the DblClick option from the menu. This is taken mostly
      // from MathMenu.js
      //
      (function () {
        var MENU = MathJax.Menu;
        var MENUSETTINGS = HUB.config.menuSettings;
        var trigger = MENU.menu.Find("Math Settings", "Zoom Trigger").menu;
        trigger.items[2].disabled = true;
        if (MENUSETTINGS.zoom === "Double-Click") {MENUSETTINGS.zoom = "None"}
      })();
    }

    HUB.Startup.signal.Post("DoubleClickEvent Ready");
  })
);

MathJax.Ajax.loadComplete("[MathJax]/../sage/js/DoubleClickEvent.js");
