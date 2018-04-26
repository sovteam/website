import '/imports/startup/client'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import './main.html';

//added to solve height 100% problem
BlazeLayout.setRoot('body');
