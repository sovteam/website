import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '/imports/ui/layouts/app/app-layout-controller.js'
import '/imports/ui/pages/home/home-controller.js'
import '/imports/ui/pages/logs/logs-controller.js'
import '/imports/ui/pages/link/link-controller.js'
import '/imports/ui/pages/404/404-template.html'

FlowRouter.route('/', {
  triggersEnter: [function (context, redirect) {
    window.location = 'https://github.com/sovteam/docs/wiki'
  }],
  action: function(_params) {
    throw new Error("this should not get called");
  }
})

/*FlowRouter.route('/', {
    name: 'Home',
    fastRender: true,
    action: function () {
        BlazeLayout.render('AppLayout', { content: 'Home' })
    }
})*/

FlowRouter.route('/logs', {
    name: 'PostLogs',
    fastRender: true,
    action: function () {
        BlazeLayout.render('AppLayout', { content: 'PostLogs' })
    }
})

FlowRouter.route('/link/:referrer', {
    name: 'Link',
    fastRender: true,
    action: function () {
        BlazeLayout.render('AppLayout', { content: 'Link' })
    }
})

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('AppLayout', { content: 'NotFound404' }); 
    }
};
