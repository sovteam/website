import { Meteor } from 'meteor/meteor'
import { PostLogs } from '/imports/api/log/post-log.js'

Meteor.publish('PostLogs', () => {
	return PostLogs.find()
})
