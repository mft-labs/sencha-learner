/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SenchaDev.Application',

    name: 'SenchaDev',

    requires: [
        // This will automatically load all classes in the SenchaDev namespace
        // so that application classes do not need to require each other.
        'SenchaDev.*'
    ],

    // The name of the initial view to create.
    mainView: 'SenchaDev.view.main.Main'
});
