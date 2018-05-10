import { PostLogs } from '/imports/api/log/post-log.js'

const bodyParser = Npm.require('body-parser'); 
Picker.middleware(bodyParser.urlencoded({ extended: false }));
Picker.middleware(bodyParser.json());

Picker.route('/ws/log-error', function(params, req, res, next) {
  if (req.method != 'POST')
    return res.end('Method ' + req.method + ' not supported');
  
  let log = req.body
  log.stamp = new Date()
  PostLogs.insert(log)

  res.end('done')
});
