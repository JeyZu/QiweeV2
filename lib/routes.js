FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('masterLayout', {
				footer: "footer",
				main: "home",
				nav: "navbar",

		});
	}
});

