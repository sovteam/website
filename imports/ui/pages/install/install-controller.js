import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './install-template.html'


Template.Install.helpers({
  playstoreLink() {
    return "https://play.google.com/store/apps/details?id=sneer.main&referrer=" + FlowRouter.getParam('referrer')
  }
})