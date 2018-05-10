import { PostLogs } from '/imports/api/log/post-log.js'
import './logs-template.html'

Template.PostLogs.onCreated(function () {
	this.subscribe('PostLogs')
})

Template.PostLogs.helpers({
	logs() {
		return PostLogs.find({}, {sort: {stamp: -1}})
	}
})