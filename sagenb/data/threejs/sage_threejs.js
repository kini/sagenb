
function sage_threejs_plot(id,url) {
    // check capabilities, and start if sufficient
    var haswebgl = (function() {try {return !! window.WebGLRenderingContext && 
                                     !! document.createElement('canvas').getContext('experimental-webgl');}
                                catch(e){return false;}})();
    
    var hascanvas = !! window.CanvasRenderingContext2D;
    
    if(hascanvas) {
        document.addEventListener( "DOMContentLoaded", init, false);
    }
    
    var item = {};
    function init() {
        /* spawns the objects, scenes, cameras, renderers etc. */
        // set the scene
        var width = 700;
        var height=400;
        if (haswebgl) {
            //item.renderer = new THREE.WebGLRenderer();
            item.renderer = new THREE.WebGLRenderer({antialias:true});
        } else {
            item.renderer = new THREE.CanvasRenderer();
        }
        item.renderer.setSize(width,height);
        item.scene = new THREE.Scene();
        item.camera = new THREE.PerspectiveCamera(45, width/height, 2, 1000);
        item.camera.position = new THREE.Vector3(10,10,10);
        item.scene.add(item.camera);
        item.controls = new THREE.TinyTrackballControls(item.camera, item.renderer.domElement);
        item.controls.target.set(0, 0, 0);
        //item.controls.noZoom = true;
        //item.controls.noPan = true;
        var loader = new THREE.OBJLoader();
        var mesh;
        loader.load( url, function ( object ) {
            myobj=object.children[0];
            if (haswebgl) {
                mesh = new THREE.meshTHREE.SceneUtils.createMultiMaterialObject(myobj.geometry, 
                                                                      [new THREE.MeshBasicMaterial({color: 0x6666ff}),
                                                                       new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.5 } )] );
            } else {
                mesh = myobj
                mesh.material.wireframe = true
            }
            item.scene.add(mesh);
        });
        
        // add the renderer to the document
        div=document.getElementById(id)
        if (div.firstChild) {
            div.replaceChild(item.renderer.domElement,div.firstChild);
        } else {
            div.appendChild(item.renderer.domElement);
        }
        animate();
    }
    
    function animate() {
        /* one animation tick */
        requestAnimationFrame(animate);
        item.controls.update();
        myrender();
    }
    
    function myrender () {
        /* renders our little scene */
        item.renderer.render(item.scene, item.camera);
    }
    init()
}
