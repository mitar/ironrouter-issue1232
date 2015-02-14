Router.route('/', {
  name: 'hellos',
  template: 'hello'
});

Router.route('/album/:id', {
  name: 'hello',
  template: 'hello'
});

if (Meteor.isClient) {
  Template.hello.helpers({
    id: function () {
      return Iron.controller().getParams().id;
    }
  });
}
