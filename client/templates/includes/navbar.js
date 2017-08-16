Template.navbar.events({
	'click .twitch'(event) {
		Meteor.loginWithTwitch(function (err) {
			if (err) console.log('login failed: ' + err)
		});
	}
});

Template.navbar.helpers({
	activeRouteClass: function(/* route names */) {
		var args = Array.prototype.slice.call(arguments, 0);
    	args.pop();
    
    	var active = _.any(args, function(name) {
      		return FlowRouter.current() && FlowRouter.current().route.name === name
    	});
    
    	return active && 'active';
  	}
});