import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/app/app-layout-controller.js'
import '/imports/ui/pages/home/home-controller.js';

FlowRouter.route('/', {
    name: 'Home',
    fastRender: true,
    action: function () {
        BlazeLayout.render('AppLayout', { content: 'Home' }); 
    }
});