/**
 * @fileOverview Raptorize UI component
 * @author David Neilson david@panmedia.co.nz
 * @author Michael Robinson mike@panmedia.co.nz
 */

$.ui.editor.registerUi({

    /**
     * @name $.editor.ui.raptorize
     * @augments $.ui.editor.defaultUi
     * @class Raptorize your editor
     */
    raptorize: /** @lends $.editor.ui.raptorize.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor) {
            var button = editor.uiButton({
                title: _('Raptorize')
            });
            editor.bind('ready', function() {
                if (!button.button.raptorize) {
                    // <strict>
                    handleError(_('Raptorize plugin requires the raptorize dependency - https://github.com/PANmedia/jQuery-Raptor-Dependencies'));
                    // </strict>
                    return;
                }
                button.button.raptorize();
            });
            return button;
        }
    }

});