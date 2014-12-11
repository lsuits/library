YUI.use('node', 'moodle-core-notification', function(Y) {
        console.log('out here');
    // Don't set up the dialogue until it's needed
    var dave = null;

    // Use a delegate rather than on. It's much more efficient for large numbers of nodes.  This one will call
    // display_popup whenever anything with the class 'clickedcell' is called anywhere within the document.
    Y.delegate('click', display_popup, Y.config.doc, '.clickedcell');

    display_popup = function(thisevent) {
        console.log('in here');
        if (!dave) {
            dave = new M.core.dialogue({
                visible: false,
                modal: true,
                close: true,
                draggable: true
            });


            dave.render();
        }
            var mycontent = Y.one('#somecontent');
            dave.setAttrs({
                'headerContent': mycontent.one('hd'),
                'bodyContent': mycontent.one('bd'),
                'footerContent': mycontent.one('ft')
            });
        dave.show();
    };

});