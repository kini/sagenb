/* DoubleClick-HTML-CSS.js
 *
 * This makes the menu pop up on Double Click with left mouse. It works
 * only with MathJax-1.1
 * 
 * Since this interferes with the zoom setting in Accessibility.js, that
 * zoom setting will no longer work. Zoom on Double Click also will not
 * work even when selected from the MathJax menu.
 *
 * The interface for calling the menu will also potentially change in
 * MathJax-2.0, so the return statement will need to be adjusted when we
 * move to MathJax-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", function () {
  var HTMLCSS = MathJax.OutputJax["HTML-CSS"];
  HTMLCSS.Augment({
    DblClick: function (event) {
      if (HTMLCSS.config.showMathMenu) {
        if (!event) {event = window.event}
        if (HTMLCSS.settings.context === "MathJax") {
          return HTMLCSS.ContextMenu.call(this,event,true);
        }
      }
    }
  });
  MathJax.Hub.Startup.signal.Post("DoubleClick HTML-CSS Ready");
});

MathJax.Ajax.loadComplete("[MathJax]/../sage/js/DoubleClick-HTML-CSS.js");
