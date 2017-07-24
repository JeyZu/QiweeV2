Template.navbar.events({
	'click .twitch'(event) {
		Meteor.loginWithTwitch(function (err) {
			if (err) console.log('login failed: ' + err)
		});
	}
})